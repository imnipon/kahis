@echo off
title IP Scanner - LAN Network Discovery Tool
echo ========================================
echo   IP Scanner - Starting...
echo ========================================
echo.

:: Start backend and frontend
echo [1/2] Starting servers...
start /b cmd /c "npm run dev"

:: Wait for frontend to be ready
echo [2/2] Waiting for frontend to be ready...
timeout /t 5 /nobreak >nul

:: Open browser
echo Opening browser...
start http://localhost:5173

echo.
echo ========================================
echo   IP Scanner is running!
echo   Frontend: http://localhost:5173
echo   Backend:  http://localhost:3001
echo ========================================
echo.
echo Press Ctrl+C to stop the servers.
echo.
cmd /k
