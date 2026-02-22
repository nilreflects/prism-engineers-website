@echo off
echo ========================================
echo Fixing and Redeploying to Vercel
echo ========================================
echo.

echo Step 1: Adding fixed files to Git...
git add .
echo.

echo Step 2: Committing changes...
git commit -m "Fix: Update file paths for Vercel deployment"
echo.

echo Step 3: Pushing to GitHub...
git push
echo.

echo Step 4: Deploying to Vercel...
vercel --prod
echo.

echo ========================================
echo Deployment Complete!
echo ========================================
echo.
echo Your site should now work properly with:
echo - CSS styles loaded
echo - JavaScript animations working
echo - 3D effects visible
echo - Smooth scrolling enabled
echo.
echo If issues persist:
echo 1. Clear your browser cache (Ctrl + Shift + Delete)
echo 2. Wait 1-2 minutes for CDN to update
echo 3. Try incognito/private browsing mode
echo.
pause
