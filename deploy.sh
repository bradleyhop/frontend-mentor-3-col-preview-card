set -e

npm run build

cd dist/
# add screenshot of site for Open Graph cards
# cp ../src/assets/img/screenshot.png ./assets/screenshot.png
# echo "~~screenshot copied!!~~"
# wait

git init
git checkout main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:bradleyhop/frontend-mentor-3-col-preview-card.git main:gh-pages

cd -
