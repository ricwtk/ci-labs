REM call vuepress build

REM call cd .vuepress\dist

REM call git init
REM call git add -A
REM call git commit -m 'deploy'

REM call git push -f https://github.com/ricwtk/ci-labs.git master:gh-pages

REM call cd ../../


REM # build
call npm run docs:build

REM # navigate into the build output directory
call cd .vuepress\dist

REM # if you are deploying to a custom domain
REM # echo 'www.example.com' > CNAME

call git init
call git add -A
call git commit -m 'deploy'

REM # if you are deploying to https://<USERNAME>.github.io
REM # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

REM # if you are deploying to https://<USERNAME>.github.io/<REPO>
call git push -f https://github.com/ricwtk/ci-labs.git master:gh-pages

call cd ../../