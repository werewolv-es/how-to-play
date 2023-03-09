// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "werewolv.es",
  favicon: "favicon.ico",

  // Set the production url of your site here
  url: "https://werewolv.es",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/guides",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "werewolv-es", // Usually your GitHub org/user name.
  projectName: "how-to-play", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/apple-touch-icon.png",
            sizes: "180x180",
          },
          {
            tagName: "link",
            rel: "icon",
            type: "image/png",
            href: "/favicon-194x194.png",
            sizes: "194x194",
          },
          {
            tagName: "link",
            rel: "icon",
            type: "image/png",
            href: "/android-chrome-192x192.png",
            sizes: "192x192",
          },
          {
            tagName: "link",
            rel: "icon",
            type: "image/png",
            href: "/favicon-16x16.png",
            sizes: "16x16",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#000000",
          },
          {
            tagName: "link",
            id: "favicon",
            rel: "shortcut icon",
            href: "/favicon.ico",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "#000000"
          }
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/werewolv-es/how-to-play/edit/site/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "werewolv.es",
        logo: {
          alt: "werewolv.es",
          src: "favicon-32x32.png",
        },
        items: [
          {
            to: "https://werewolv.es",
            label: "Play Online Werewolf",
            position: "left",
          },
          {
            href: "https://github.com/werewolv-es/how-to-play",
            "aria-label": "GitHub",
            className: "github-link",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        maxHeadingLevel: 2,
      },
    }),
};

module.exports = config;
