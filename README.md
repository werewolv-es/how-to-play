# how-to-play

The official [How To Play](https://werewolv.es/guides) guide repo for [werewolv.es](https://werewolv.es).

## Writing guides

Guide files are stored as `.mdx` files within `./docs`. Each guide is written in Markdown and has a heading section to set the name of the guide, here's a super-basic example, but take a look at the others for more realistic examples.

```markdown
---
title: Cupid
slug: /roles/Cupid
---

# Cupid

Nope.

## Reasons

It dumb.

## History

<timeline>
  <event interval="2023-04-01">April Fools!</event>
</timeline>
```

## Running locally

### Installation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

```sh
$ npm install
```

### Local Development

```sh
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh
$ npm run build
```

This command generates static content into the `./build` directory and can be served using any static contents hosting service.

## Docker

There is also a `Dockerfile` to build/run the site in a docker container for testing or developing without needing to install node/npm etc directly.

To just build and view the site, you can do:

```sh
docker build -t wwes-h2p .
docker run --rm --name wwes-h2p -p 8000:80 wwes-h2p
```
