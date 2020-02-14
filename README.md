# werewolves-how-to-play

Standalone How To Play site for [werewolv.es](https://werewolv.es).

# Writing guides

Guide files are stored within `docs`. Each guide is written in Markdown and has a heading section to set the name of the guide, here's a super-basic example:

```markdown
---
name: Cupid
menu: The Neutral
route: /cupid
---

# Cupid

Nope.

# Reasons

It's dumb.
```

# Setup

Install [Node.js](https://nodejs.org/en/) (see `.nvmrc` for suggested version). Then:

```sh
npm i # yarn
```

# Preview your changes in realtime

```sh
npm run dev # yarn dev
```

# Build as a static site

```sh
npm run build # yarn build
```

# Preview the built site

```sh
npm run serve # yarn serve
```