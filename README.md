# acalub.github.io

FarWest Freestyle website
deployed using github pages
Application is using master branch

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

## Commit and push changes to development branch
$ git add .
$ git commit -m "some new message"

## version bump
$ npm version minor

## push changes to development branch
$ git push

# generate static project
$ npm run generate

## Switch to master branch where site is deployed using github pages
$ git checkout master

## Update from dist directory 
$ rm -rf _nuxt, about, clubs, events, files, get-started, images, js, results
$ mv dist/* .
$ rm -rf dist

$ git add .
$ git commit -m "latest version"

$ git push

## Verify site is updated at www.farwestfreestyle.com
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
