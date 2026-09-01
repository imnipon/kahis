@echo off
setlocal
set ROOT=%~dp0
echo Building Poodle Marker Studio: src -^> app
robocopy "%ROOT%src" "%ROOT%app" /MIR /XD node_modules /XF build.bat README.md >nul
if %ERRORLEVEL% LEQ 1 (
  echo Done. Open app\index.html to use.
  exit /b 0
)
echo Build failed with code %ERRORLEVEL%
exit /b %ERRORLEVEL%
