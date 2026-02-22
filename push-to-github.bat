@echo off
echo ========================================
echo Push Prism Engineers to GitHub
echo ========================================
echo.

REM Check if git is installed
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo Git is not installed!
    echo Please install Git from: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo Git is installed!
echo.

REM Check if already a git repository
if exist .git (
    echo Git repository already initialized.
    echo.
) else (
    echo Initializing Git repository...
    git init
    echo.
)

REM Add all files
echo Adding all files to Git...
git add .
echo.

REM Commit
echo Committing files...
git commit -m "Initial commit: Prism Engineers and Construction website"
echo.

REM Ask for GitHub repository URL
echo.
echo ========================================
echo IMPORTANT: Create a GitHub repository first!
echo ========================================
echo.
echo 1. Go to: https://github.com/new
echo 2. Create a new repository (e.g., prism-engineers-website)
echo 3. DO NOT initialize with README, .gitignore, or license
echo 4. Copy the repository URL
echo.
echo Example URL: https://github.com/yourusername/prism-engineers-website.git
echo.
set /p repo_url="Paste your GitHub repository URL here: "

if "%repo_url%"=="" (
    echo No URL provided. Exiting...
    pause
    exit /b 1
)

REM Add remote
echo.
echo Adding GitHub remote...
git remote remove origin 2>nul
git remote add origin %repo_url%
echo.

REM Rename branch to main
echo Setting branch to main...
git branch -M main
echo.

REM Push to GitHub
echo Pushing to GitHub...
git push -u origin main
echo.

if %errorlevel% equ 0 (
    echo ========================================
    echo SUCCESS! Your code is now on GitHub!
    echo ========================================
    echo.
    echo Next steps:
    echo 1. Go to https://vercel.com/new
    echo 2. Import your GitHub repository
    echo 3. Click Deploy
    echo.
    echo Your site will be live in ~30 seconds!
) else (
    echo ========================================
    echo Push failed!
    echo ========================================
    echo.
    echo Possible issues:
    echo - Wrong repository URL
    echo - Need to authenticate with GitHub
    echo - Repository already has content
    echo.
    echo Try running: git push -u origin main --force
)

echo.
pause
