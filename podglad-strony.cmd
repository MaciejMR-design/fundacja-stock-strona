@echo off
title Fundacja Stock - podglad strony
echo Uruchamiam serwer podgladu na http://localhost:8734 ...
echo (zamknij to okno, aby zatrzymac serwer)
start "" http://localhost:8734/news.html
npx -y serve -l 8734 "%~dp0design-v2"
