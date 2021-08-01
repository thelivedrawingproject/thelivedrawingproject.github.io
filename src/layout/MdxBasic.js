import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Link } from "gatsby"
import { PhotoGrid } from "./../bits/PhotoGrid/PhotoGrid"

const shortcodes = { Link, PhotoGrid } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
  console.log('hello from mdx layout', mdx);
  return (
    <div>
      <h1>{mdx.frontmatter.title} HOLA</h1>
      {/* <MDXProvider components={shortcodes}> */}
        <MDXRenderer frontmatter={mdx.frontmatter}>{mdx.body}</MDXRenderer>
      {/* </MDXProvider> */}
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      
      body
      frontmatter {
        title
      }
    }
  }`;