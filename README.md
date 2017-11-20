# werewolves-how-to-play

These pages are C# Razor syntax, but anyone with basic HTML understanding should be fine editing them. See [Razor](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/razor) for further details.

Even without much knowledge, it should be obvious what is markup and what is text. Looking at existing pages should give someone enough of an idea of what is possible.

Indivual guides are within `Guides`, the sidebar is located within `Shared`.

This is not a full solution, and no compilation is provided, they will be copied into the main werewolv.es site when updates are made.

## Guide Viewer

Included is a simple viewer for the guide, to give you an idea of how it'll look on the main site. It requires [Node.js](https://nodejs.org/) to run. Run `npm install` within the main folder to install the required dependencies, then  `npm run dev` to open the guide viewer in the browser on port `8080`.

_Note:_ The viewer does not understand Razor syntax, though it will display the common header information for each guide page.
