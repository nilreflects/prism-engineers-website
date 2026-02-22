@echo off
echo ========================================
echo Prism Engineers - Vercel Deployment
echo ========================================
echo.

echo Checking if Vercel CLI is installed...
where vercel >nul 2>&1
if %errorlevel% neq 0 (
    echo Vercel CLI not found. Installing...
    npm install -g vercel
    if %errorlevel% neq 0 (
        echo Failed to install Vercel CLI
        echo Please install Node.js first from: https://nodejs.org/
        pause
        exit /b 1
    )
)

echo.
echo Vercel CLI is ready!
echo.
echo Choose deployment option:
echo 1. Deploy to preview (test deployment)
echo 2. Deploy to production
echo 3. Login to Vercel first
echo.
set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" (
    echo.
    echo Deploying to preview...
    vercel
) else if "%choice%"=="2" (
    echo.
    echo Deploying to production...
    vercel --prod
) else if "%choice%"=="3" (
    echo.
    echo Opening Vercel login...
    vercel login
    echo.
    echo Now run this script again to deploy!
) else (
    echo Invalid choice!
)

echo.
echo ========================================
echo Deployment complete!
echo ========================================
pause
