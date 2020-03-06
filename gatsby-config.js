/* eslint-disable @typescript-eslint/camelcase, @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');

dotenv.config();

const queries = require('./src/utils/algolia');

module.exports = {
  siteMetadata: {
    title: 'Checklist',
    description: "The protocols we follow for the things we can't automate yet.",
    author: '@atolye15',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-39803605-26',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://checklist.atolye15.com`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Checklist',
        short_name: 'Checklist',
        start_url: '/',
        background_color: '#101013',
        theme_color: '#ff0c6f',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },

    'gatsby-plugin-typescript',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'checklists',
        path: `${__dirname}/checklists`,
      },
    },

    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-component'],
      },
    },

    'gatsby-plugin-graphql-codegen',
    'gatsby-plugin-sass',

    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000,
      },
    },
  ],
};

/* eslint-enable @typescript-eslint/camelcase, @typescript-eslint/no-var-requires */
