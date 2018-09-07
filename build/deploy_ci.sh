#! /bin/sh
mkdir temp_web
git config --global user.name "Terry Rot"
git config --global user.email "gidcai@gmail.com"

if [ "$ROT_TOKEN" = "" ]; then
  echo "Bye~"
  exit 0
fi

echo taro.w3cub.com >> dist/CNAME

cd temp_web
git clone --depth 1 -b gh-pages --single-branch https://$ROT_TOKEN@github.com/icai/taro-cnode.git && cd taro-cnode


cp -rf ../dist/** .
git add -A .
git commit -m "$TRAVIS_COMMIT_MSG"
git push origin gh-pages
cd ../..

echo "DONE, Bye~"
exit 0
