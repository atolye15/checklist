/* eslint-disable @typescript-eslint/camelcase, @typescript-eslint/no-var-requires */
const dotenv = require('dotenv');

dotenv.config();

const queries = require('./src/utils/algolia');

module.exports = {
  siteMetadata: {
    title: 'Atölye15 Checklist',
    description: 'The protocols that have been used by Atölye15 for years.',
    author: '@atolye15',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
        name: 'Atölye15 Checklist',
        short_name: 'Checklist',
        start_url: '/',
        background_color: '#181C27',
        theme_color: '#181C27',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-typescript',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'checklists',
        path: `${__dirname}/src/checklists`,
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
