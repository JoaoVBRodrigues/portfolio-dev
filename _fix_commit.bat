@echo off
set GIT=C:\PROGRA~1\Git\bin\git.exe

echo [1/5] Undoing last commit (keeping files)...
%GIT% reset HEAD~1
echo Done.

echo [2/5] Removing portfolio/node_modules and portfolio/.next from git cache...
%GIT% rm -r --cached portfolio/node_modules 2>nul
%GIT% rm -r --cached portfolio/.next 2>nul
echo Done.

echo [3/5] Deleting portfolio folder from disk...
rmdir /S /Q portfolio 2>nul
echo Done (errors above are OK if folder is partially locked).

echo [4/5] Staging only tracked files (respecting .gitignore)...
%GIT% add -A
echo Done.

echo [5/5] Committing and pushing...
%GIT% commit -m "refactor: move Next.js project from portfolio/ subdirectory to repository root"
%GIT% push

del /f _fix_commit.bat
echo.
echo All done!
