# acalub.github.io

FarWest Freestyle website
deployed using github pages
Application is using master branch

## Development Setup

### Step 1) install dependencies
``` bash
$ npm run install
```
### Step 2) Serve with hot reload at localhost:3000
``` bash
$ npm run dev
```
## Save Change and Deploy to Live Site

### Step 1) Commit and push changes to development branch
``` bash
$ git add .
$ git commit -m "some new message"
```
### Step 2) Bump minor version
``` bash
$ npm version minor
```
### Step 3) Push changes to development branch
``` bash
$ git push
```

### Step 4) Generate static project
``` bash
$ npm run generate
```

### Step 5) Switch to master branch where site is deployed using github pages
``` bash
$ git checkout master
```

### Step 6) Update from dist directory
``` bash
$ rm -rf _nuxt, about, clubs, events, files, get-started, images, js, results
$ mv dist/* .
$ rm -rf dist

$ git add .
$ git commit -m "latest version"

$ git push
```

### Step 7) Verify site is updated at www.farwestfreestyle.com

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
