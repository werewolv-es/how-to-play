# werewolves-how-to-play

The official [How To Play](https://werewolv.es/guides) guide repo for [werewolv.es](https://werewolv.es).

## Writing guides

Guide files are stored within `docs`. Each guide is written in Markdown and has a heading section to set the name of the guide, here's a super-basic example:

```markdown
---
name: Cupid
menu: The Neutral
route: /guides/cupid
---

# Cupid

Nope.

## Reasons

It dumb.
```

## Setup

Install [Node.js](https://nodejs.org/en/) (see `.nvmrc` for suggested version, latest LTS should be fine). Then run:

```sh
npm i # yarn
```

## Preview your changes in realtime

```sh
npm run dev # yarn dev
```

## Build as a static site

```sh
npm run build # yarn build
```

## Preview the built site

```sh
npm run serve # yarn serve
```

or if you haven't run `build` yet:

```sh
npm run preview # yarn preview
```

## Prettify

Automatically done before a commit, or manually with:

```sh
npm run pretty # yarn pretty
```

## Docker

There is also a `Dockerfile` to build/run the site in a docker container for testing or developing without needing to install node/npm etc directly.

To just build and view the site, you can do:

```sh
docker build -t wwes-h2p .
docker run --rm --name wwes-h2p -p 8000:80 wwes-h2p
```

This may take some time as it will need to pull in all the npm dependencies, but you can then access the completed site at http://localhost:8000/ as it would appear online.

For development copy of the site at http://localhost:8000/ that hot-reloads as you edit files, you may want to use something like:

```sh
docker build --target install -t wwes-h2p-dev .
docker run -it -w /app -v wwes-h2p-dev:/app -v ${PWD}/src:/app/src -v ${PWD}/static:/app/static -v ${PWD}/gatsby-config.js:/app/gatsby-config.js -v ${PWD}/doczrc.js:/app/doczrc.js --rm -p 8000:8000 wwes-h2p-dev npx gatsby develop --host=0.0.0.0
```

This attempts to keep your current working directory clean of node_modules/gatsby cache etc, but if the node modules change in an incompatible way, you will want to run `docker volume rm wwes-h2p-dev; docker build --target install -t wwes-h2p-dev .` to rebuild the base image.

If you don't care about keeping your working directory clean, then a simpler approach would be:

```sh
docker run --rm -it -v ${PWD}:/app -w /app node npm install
docker run --rm -it -v ${PWD}:/app -w /app -p 8000:8000 node npx gatsby develop --host=0.0.0.0
```
