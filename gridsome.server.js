// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");
const nodeExternals = require("webpack-node-externals");

module.exports = function(api) {

  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/]
        })
      ])
    }
  })
  
  // Use the Data store API here: https://gridsome.org/docs/data-store-api
  api.loadSource(async store => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const contentType = store.addContentType({
      typeName: "BlogPost",
      route: "/blog/:slug"
    });

    for (const item of data) {
      let path = `/blog/${item.id}`;
      contentType.addNode({
        id: item.id,
        title: item.title,
        path,
        fields: {
          body: item.body
        }
      });
    }
  });
};
