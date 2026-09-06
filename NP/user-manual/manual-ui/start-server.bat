@echo off
cd /d "%~dp0.."
echo.
echo  KAHIS Manual - Local Server
echo  ===========================
echo  Open in browser:
echo    http://localhost:8080/manual-ui/chapter-01-ui-components.html
echo.
echo  Press Ctrl+C to stop.
echo.
python -m http.server 8080
if errorlevel 1 (
  echo.
  echo Python not found. Install Python or run:
  echo   npx --yes serve -p 8080
  pause
)
