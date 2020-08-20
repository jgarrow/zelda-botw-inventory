/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const path = require("path")

// exports.createPages = async ({ actions, graphql }) => {
//     const { createPage } = actions;

//     const result = await graphql(`
//         query {
//             allWeaponsJson {
//                 edges {
//                     node {
//                       name
//                       category
//                       icon
//                       isNew
//                       description
//                     }
//                 }
//             }

//             allShieldsJson {
//                 edges {
//                     node {
//                       name
//                       category
//                       icon
//                       isNew
//                       description
//                     }
//                 }
//             }

//             allArmorJson {
//                 edges {
//                     node {
//                       name
//                       category
//                       bonus
//                       icon
//                       isNew
//                       description
//                     }
//                 }
//             }
//         }
//     `);

//     // result.data.allWeaponsJson.edges.forEach(({ node }) => {
//         // console.log(node.name)
//         createPage({
//             path: `/`,
//             component: path.resolve(`./src/templates/index.js`),
//             context: {
//                 weapons: result.data.allWeaponsJson.edges,
//                 shields: result.data.allShieldsJson.edges,
//                 armor: result.data.allArmorJson.edges,
//             }
//         })
//     // })
// }
