@echo off
call cmd /k cd dist
call git init
call add -A
call commit -m 'deploy'
call push -f https://github.com/douyalzd/dosnHelpDoc.git master:gh-pages