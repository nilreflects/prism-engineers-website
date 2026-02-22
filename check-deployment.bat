@echo off
echo ========================================
echo DEPLOYMENT CHECKER
echo ========================================
echo.

echo Checking local files...
echo.

if exist "index.html" (
    echo [OK] index.html exists
) else (
    echo [ERROR] index.html missing!
)

if exist "styles.css" (
    echo [OK] styles.css exists
) else (
    echo [ERROR] styles.css missing!
)

if exist "script.js" (
    echo [OK] script.js exists
) else (
    echo [ERROR] script.js missing!
)

if exist "vercel.json" (
    echo [OK] vercel.json exists
) else (
    echo [ERROR] vercel.json missing!
)

echo.
echo Checking vercel.json content...
type vercel.json
echo.

echo.
echo Checking if files are in Git...
git ls-files | findstr /C:"index.html" >nul && echo [OK] index.html in Git || echo [ERROR] index.html not in Git
git ls-files | findstr /C:"styles.css" >nul && echo [OK] styles.css in Git || echo [ERROR] styles.css not in Git
git ls-files | findstr /C:"script.js" >nul && echo [OK] script.js in Git || echo [ERROR] script.js not in Git

echo.
echo Checking Git status...
git status --short

echo.
echo ========================================
echo RECOMMENDATIONS:
echo ========================================
echo.
echo 1. Test locally first:
echo    - Open test-local.html in browser
echo    - Should see red banner and styled content
echo.
echo 2. If local test works, deploy:
echo    - Run: deploy-fixed.bat
echo.
echo 3. After deployment:
echo    - Wait 60 seconds
echo    - Open Vercel URL in incognito mode
echo    - Hard refresh: Ctrl + Shift + R
echo.
echo 4. Check browser console (F12):
echo    - Look for errors in Console tab
echo    - Check Network tab for failed files
echo.
pause
