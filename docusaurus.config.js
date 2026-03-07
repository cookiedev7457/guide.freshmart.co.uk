// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fresh-Mart Support",
  tagline: "Our Freshness, Your Smile.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://cookiedev7457.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/Support.Fresh-Mart.co.uk/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cookiedev7457", // Usually your GitHub org/user name.
  projectName: "Support.Fresh-Mart", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
            routeBasePath: "/",
            sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Fresh-Mart Support",
        items: [
          {
          type: 'docSidebar',
          sidebarId: 'portalSidebar', // This must match the name in your sidebars.js
          position: 'left',
          label: 'Staff Portal',
          }
      ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Support",
            items: [
              {
                label: "Home",
                to: "/",
              },
            ],
          },
          {
            title: "Community Links",
            items: [
              {
                label: "Roblox Group",
                href: "https://www.roblox.com/communities/34992659/Fresh-Mart#!/about",
              },
              {
                label: "Discord",
                href: "https://discord.gg/FvKHPPgVXu",
              },
            ],
          },
          {
            title: "GitHub Infomation",
            items: [
              {
                label: "Organization",
                href: "https://github.com/cookiedev7457?tab=repositories",
              },
              {
                label: "Support Repository",
                href: "https://github.com/cookiedev7457/Support.Fresh-Mart",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fresh-Mart. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;