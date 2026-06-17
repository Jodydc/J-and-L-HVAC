@echo off
REM J & L HVAC v2 - Cloudflare Quick Tunnel (port 8081)
REM Exposes the v2 site to the internet via a random trycloudflare.com URL.
REM Stop with Ctrl+C.

title J ^& L HVAC v2 - Cloudflare Quick Tunnel

echo.
echo ================================================
echo   Cloudflare Quick Tunnel - VERSION 2
echo ================================================
echo.
echo   IMPORTANT: make sure serve.bat (v2) is running first.
echo.
echo   Cloudflare will print a URL like:
echo     https://xxxx-xxxx-xxxx.trycloudflare.com
echo.
echo   That URL is your public preview link for VERSION 2.
echo   Share it with anyone. It works until you Ctrl+C this window.
echo.
echo   This is the V2 tunnel (port 8081).
echo   Version 1 tunnel runs on port 8080.
echo.
echo ================================================
echo.

where cloudflared >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    cloudflared tunnel --url http://localhost:8081
) else (
    echo.
    echo ERROR: cloudflared is not installed.
    echo.
    echo Download it from:
    echo   https://github.com/cloudflare/cloudflared/releases/latest
    echo.
    echo Get the file named:  cloudflared-windows-amd64.exe
    echo Rename it to:        cloudflared.exe
    echo Drop it into:        C:\Windows\System32   ^(or any folder in your PATH^)
    echo.
    echo Then double-click this file again.
    echo.
    pause
)
