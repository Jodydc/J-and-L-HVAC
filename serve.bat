@echo off
REM J & L HVAC v2 - Local web server (port 8081)
REM Double-click this file to start the v2 site at http://localhost:8081
REM Press Ctrl+C in the window to stop the server.

cd /d "%~dp0"
title J ^& L HVAC v2 - Local Server (port 8081)

echo.
echo ================================================
echo   J ^& L Heating ^& Cooling LLC - VERSION 2
echo ================================================
echo.
echo   This is the SECOND site for comparison.
echo.
echo   Site v2 is running at:   http://localhost:8081
echo.
echo   Open in browser:         http://localhost:8081/index.html
echo.
echo   To stop the server:      press Ctrl+C
echo.
echo   Version 1 (the other site) lives on port 8080.
echo   Run both at the same time to A/B compare.
echo.
echo ================================================
echo.

start "" "http://localhost:8081/index.html"

where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    python -m http.server 8081
) else (
    where py >nul 2>nul
    if %ERRORLEVEL% EQU 0 (
        py -3 -m http.server 8081
    ) else (
        echo.
        echo ERROR: Python is not installed.
        echo.
        echo Install Python from https://www.python.org/downloads/ ^(check "Add to PATH"^)
        echo Or get it free from the Microsoft Store ^(search "Python 3"^).
        echo.
        pause
    )
)
