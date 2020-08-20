import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ filename, altTag }) => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile(filter:{ extension: { regex: "/jpeg|jpg|png|gif/"}}) {
        nodes {
          relativePath
          extension
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)


const image = images.nodes.find(n => {
  return filename.includes(n.relativePath)
})

if (!image) {
  return null
}

  return image.extension === "svg" ? (<img alt={altTag} publicUrl={image.childImageSharp.fluid} />) : (
    <Img alt={altTag} fluid={image.childImageSharp.fluid} />
  )
}


// const Image = ({ filename, altTag }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         images: allImageSharp {
//           edges {
//             node {
//                 fluid(maxWidth: 600) {
//                   ...GatsbyImageSharpFluid,
//                   originalName
//                 }
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       const image = data.images.edges.find(n => {
//         return filename.includes(n.node.originalName);
//       });
//       if (!image) {
//         return null;
//       }

//       //const imageSizes = image.node.childImageSharp.sizes; sizes={imageSizes}
//       return <Img alt={altTag} fluid={image.node.childImageSharp.fluid} />;
//     }}
//   />
// );

export default Image
