// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Carbon Aware SDK',
  tagline: 'An SDK to enable the creation of carbon aware applications, that do more when the electricity comes from clean low-carbon sources and less when it does not.',
  favicon: 'img/favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://carbon-aware-sdk.greensoftware.foundation',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
   // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Green-Software-Foundation', // Usually your GitHub org/user name.
  projectName: 'carbon-aware-sdk', // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Green-Software-Foundation/carbon-aware-sdk',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Green-Software-Foundation/carbon-aware-sdk',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Carbon Aware SDK',
        logo: {
          alt: 'Carbon Aware SDK Logo',
          src: 'img/GSF-logo.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'quickstart',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: 'https://greensoftware.foundation/', label: 'GSF', position: 'left'},
          {
            href: 'https://github.com/Green-Software-Foundation/carbon-aware-sdk',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/carbon-aware-sdk/docs/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/green-software-foundation/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gsfcommunity',
              },         
              {
                label: 'Slack (private members only)',
                href: 'https://greensoftwarefdn.slack.com/archives/C02JRAV4QEP',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'greensoftware.foundation',
                to: 'https://greensoftware.foundation/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Green-Software-Foundation/carbon-aware-sdk',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GSF, Inc. Built with Docusaurus.`,
      },
      announcementBar: {
        id: 'announcementBar-0', // Increment on change
        // content: `⭐️ If you like Docusaurus, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/docusaurus">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/docusaurus">Twitter ${TwitterSvg}</a>`,
        //content: `🎉️ <b><a target="_blank" href="https://docusaurus.io/blog/releases/3.0">Docusaurus v3.0</a> is now out!</b> 🥳️`,
        content:`<strong>\u26A0 Incubation Project This project is an incubation project being run inside the Green Software Foundation; as such, we <b>DON'T</b> recommend using it in any critical use case. Incubation projects are experimental, offer no support guarantee, have minimal governance and process, and may be retired at any moment. This project may one day graduate, in which case this disclaimer will be removed. <br><br> 🎉️ We are running a Hackathon! CarbonHack is open to all, including software practitioners and those with a passion for Green Software. Find out more on the <a href="https://grnsft.org/hack/github">CarbonHack website</a> </strong>`,
        backgroundColor:'#EBF2D7',
        textColor:'#00524f'
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
