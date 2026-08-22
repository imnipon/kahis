/**
 * Minimal markdown → HTML renderer สำหรับแสดงเอกสาร .md ใน DocModal
 * พอร์ตมาจาก renderSimpleMarkdown() ของ NP/plan/plan_editor.html เพื่อให้ dev-facing docs
 * ของทุกโมดูลใน /NP render เหมือนกัน (headings, list, table, code block, bold, link)
 */

function escapeHtml(s: string): string {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function inlineFmt(s: string): string {
  let out = escapeHtml(s);
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  out = out.replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  return out;
}

function isTableSep(line: string): boolean {
  return /^\s*\|?[\s:-]+\|[\s|:-]*$/.test(line);
}

export function renderSimpleMarkdown(src: string): string {
  const lines = String(src || '').replace(/\r\n/g, '\n').split('\n');
  const html: string[] = [];
  let i = 0;
  let inCode = false;
  let codeBuf: string[] = [];
  let inList = false;
  let listTag: 'ul' | 'ol' = 'ul';

  const closeList = () => {
    if (inList) {
      html.push(`</${listTag}>`);
      inList = false;
    }
  };

  while (i < lines.length) {
    const line = lines[i];

    if (inCode) {
      if (/^```/.test(line)) {
        html.push(`<pre><code>${escapeHtml(codeBuf.join('\n'))}</code></pre>`);
        codeBuf = [];
        inCode = false;
      } else {
        codeBuf.push(line);
      }
      i++;
      continue;
    }

    if (/^```/.test(line)) {
      closeList();
      inCode = true;
      codeBuf = [];
      i++;
      continue;
    }

    if (/^\s*\|/.test(line) && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      closeList();
      const rows: string[][] = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) {
        if (isTableSep(lines[i])) {
          i++;
          continue;
        }
        rows.push(
          lines[i]
            .replace(/^\s*\|/, '')
            .replace(/\|\s*$/, '')
            .split('|')
            .map((c) => c.trim())
        );
        i++;
      }
      if (rows.length) {
        html.push(`<table><thead><tr>${rows[0].map((c) => `<th>${inlineFmt(c)}</th>`).join('')}</tr></thead><tbody>`);
        for (let r = 1; r < rows.length; r++) {
          html.push(`<tr>${rows[r].map((c) => `<td>${inlineFmt(c)}</td>`).join('')}</tr>`);
        }
        html.push('</tbody></table>');
      }
      continue;
    }

    if (/^---+\s*$/.test(line) || /^\*\*\*+\s*$/.test(line)) {
      closeList();
      html.push('<hr>');
      i++;
      continue;
    }

    const hm = /^(#{1,3})\s+(.+)$/.exec(line);
    if (hm) {
      closeList();
      const level = hm[1].length;
      html.push(`<h${level}>${inlineFmt(hm[2])}</h${level}>`);
      i++;
      continue;
    }

    if (/^>\s?/.test(line)) {
      closeList();
      html.push(`<blockquote>${inlineFmt(line.replace(/^>\s?/, ''))}</blockquote>`);
      i++;
      continue;
    }

    const ul = /^\s*[-*]\s+(.+)$/.exec(line);
    const ol = /^\s*\d+\.\s+(.+)$/.exec(line);
    if (ul || ol) {
      const tag: 'ul' | 'ol' = ul ? 'ul' : 'ol';
      const item = ul ? ul[1] : ol![1];
      if (!inList || listTag !== tag) {
        closeList();
        listTag = tag;
        html.push(`<${tag}>`);
        inList = true;
      }
      html.push(`<li>${inlineFmt(item)}</li>`);
      i++;
      continue;
    }

    if (/^\s*$/.test(line)) {
      closeList();
      i++;
      continue;
    }

    closeList();
    html.push(`<p>${inlineFmt(line)}</p>`);
    i++;
  }
  closeList();
  if (inCode) html.push(`<pre><code>${escapeHtml(codeBuf.join('\n'))}</code></pre>`);
  return html.join('\n');
}
