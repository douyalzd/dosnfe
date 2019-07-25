echo '开始执行命令'
echo '执行命令：vuepress build .'
vuepress build .

echo "执行命令：cd ./.vuepress/dist\n"
cd /dist

echo "执行命令：git init\n"
git init

echo "执行命令：git add -A"
git add -A

echo "执行命令：commit -m 'deploy'"
git commit -m 'deploy'

git push -f https://github.com/douyalzd/dosnHelpDoc.git master:gh-pages