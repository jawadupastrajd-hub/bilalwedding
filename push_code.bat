@echo off
setlocal
REM ============================================================
REM  Bilal & Fatima Royal Wedding Invitation — GitHub push helper
REM  Pehle neeche wali 3 values apni likhein, phir ye file chalayein.
REM ============================================================

set "REPO_URL=https://github.com/APNA-USERNAME/bilal-fatima-dark.git"
set "GIT_NAME=apna-name"
set "GIT_EMAIL=apna@email.com"

set "PATH=%ProgramFiles%\Git\cmd;%ProgramFiles%\Git\bin;%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"

REM Is .bat file wali folder me jao (project root)
cd /d "%~dp0"

echo [1/6] Initializing git...
git init

echo [2/6] Setting git config...
git config user.name "%GIT_NAME%"
git config user.email "%GIT_EMAIL%"

echo [3/6] Staging files...
git add .

echo [4/6] Committing files...
git commit -m "Royal wedding invitation - Muhammad Bilal & Fatima Waheed"

echo [5/6] Setting main branch...
git branch -M main

echo [6/6] Configuring remote origin...
git remote remove origin 2>nul
git remote add origin "%REPO_URL%"

echo.
echo ==============================================
echo Pushing code to GitHub...
echo (Agar browser window pop up ho to login kar lena)
echo ==============================================
git push -u origin main --force

echo.
echo Done!
pause
