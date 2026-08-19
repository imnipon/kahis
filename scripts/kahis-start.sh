#!/usr/bin/env bash
set -euo pipefail

# Idempotent local/Cloud Agent startup for the KAHIS HTML mocks.
if curl -sf --max-time 1 -o /dev/null http://127.0.0.1:8080/; then
  echo "KAHIS already serving on http://127.0.0.1:8080/"
  exit 0
fi

python3 -m http.server 8080 --bind 0.0.0.0 >/tmp/kahis-http.log 2>&1 &

for _ in $(seq 1 25); do
  if curl -sf --max-time 1 -o /dev/null http://127.0.0.1:8080/; then
    echo "KAHIS landing ready on http://127.0.0.1:8080/"
    exit 0
  fi
  sleep 0.2
done

echo "KAHIS HTTP server failed to start" >&2
cat /tmp/kahis-http.log >&2 || true
exit 1
