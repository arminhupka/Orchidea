require('dotenv').config()
module.exports = {
    siteMetadata: {
        title: `Orchidea`,
        description: `Studio Urody Orchidea dba o kobiety zapracowane i zabiegane, by dzięki naszym spersonalizowanym zabiegom miały chwilę dla siebie, poczuły się piękne i zadbane.`,
        author: `@kolorvision`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-react-leaflet',
            options: {
                linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
            }
        },
        {
            resolve: `gatsby-plugin-layout`,
            options: {
                component: require.resolve('./src/layout'),
            },
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                // You can find your read-only API token under the Settings > API tokens
                // section of your administrative area. Make sure to grant both CDA and CMA permissions.
                apiToken: `31a10be4fa76d9444542189b989af1`,

                // The project environment to read from. Defaults to the primary environment:
                environment: `main`,

                // If you are working on development/staging environment, you might want to
                // preview the latest version of records instead of the published one:
                previewMode: false,

                // Disable automatic reloading of content when some change occurs on DatoCMS:
                disableLiveReload: true,
            },
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        // {
        //   resolve: `gatsby-plugin-manifest`,
        //   options: {
        //     name: `gatsby-starter-default`,
        //     short_name: `starter`,
        //     start_url: `/`,
        //     background_color: `#D9BE79`,
        //     theme_color: `#D9BE79`,
        //     display: `minimal-ui`,
        //     icon: `src/images/orchidea_logo.png`, // This path is relative to the root of the site.
        //   },
        // },
    ],
};
