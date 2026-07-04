@echo off
set GIT=C:\PROGRA~1\Git\bin\git.exe
%GIT% add -A
%GIT% commit -m "feat(contact): integrate Resend API route with mailto fallback"
%GIT% push
del /f _commit_resend.bat
