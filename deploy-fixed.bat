@echo off
cls
echo ========================================
echo PRISM ENGINEERS - FIXED DEPLOYMENT
echo ========================================
echo.

echo This script will:
echo 1. Commit all fixes
echo 2. Push to GitHub
echo 3. Deploy to Vercel with correct settings
echo.
pause

echo.
echo [1/4] Adding all files...
git add .

echo.
echo [2/4] Committing changes...
git commit -m "Fix: Simplified Vercel config and updated file paths"

echo.
echo [3/4] Pushing to GitHub...
git push

echo.
echo [4/4] Deploying to Vercel...
echo.
echo IMPORTANT: When Vercel asks questions, answer:
echo - Set up and deploy? YES
echo - Which scope? (your account)
echo - Link to existing project? YES (if you have one) or NO (for new)
echo - What's your project's name? prism-engineers
echo - In which directory is your code located? ./
echo.
pause

vercel --prod

echo.
echo ========================================
echo DEPLOYMENT COMPLETE!
echo ========================================
echo.
echo Next steps:
echo 1. Wait 30-60 seconds for deployment
echo 2. Open your Vercel URL
echo 3. Hard refresh: Ctrl + Shift + R
echo 4. Or try incognito mode
echo.
echo If still not working:
echo - Open browser console (F12)
echo - Check for errors
echo - Verify styles.css and script.js load in Network tab
echo.
echo Test page created: test-local.html
echo Open this locally to verify CSS/JS work
echo.
pause
