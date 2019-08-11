vuepress build

cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ricwtk/ci-labs.git master:gh-pages

cd -