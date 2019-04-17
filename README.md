# com.curiousweb

> Curious website

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run serve

# generate static project
$ npm run generate

# Deploy to Github (AFTER Generate)
$ npm run deploy

```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## Notes
- Mail form is processed by Bryce's web host using curiousContact.php stored in this repo

## Domain & Hosting
hosted using Github pages on the gh_pages branch. Domain can be managed via Google Cloud Admin Console available [here](google.com/a/discovercurious.com). Domain [admin screen](https://admin.google.com/AdminHome?fral=1#Domains:) -> Advanced DNS settings


## For Jason
``` bash
# Go to correct local folder (Terminal)
$ cd Documents/Development/curiousweb

# Do a Git Pull (either in Atom or in Terminal)
$ git pull

# Start local server (Terminal) - open in browser localhost:3000
# Ctrl + C to cancel the dev server
$ npm run serve

### Make updates, save & see changes on localhost

# Stage your changes to Git (Atom or Terminal)
$ git add .

# Commit changes to Git (Atom or Terminal)
$ git commit -m "commit message"

# Push your local repo to the cloud (Atom or Terminal)
$ git push

# Build project for server (Terminal)
$ npm run generate

# Deploy built project to Github Pages
$ npm run deploy
```
