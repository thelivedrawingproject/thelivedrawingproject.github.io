import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import MainLayout from './MainLayout';
import './BasicPage.scss';
import 'moment';
import MetaTags from '../bits/MetaTags/MetaTags';
import { SHORTCODES } from "./MdxBits";

export const pageQuery = graphql`
  query MdxPageByPath($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      frontmatter {
        path
        title
        language
        description
        embeddedImagesRemote {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        embeddedImagesLocal {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;


export default function Template({ data: {mdx}, location }) {
  return (
    <MainLayout language={mdx.frontmatter.language} location={{ ...location }}>
      <MetaTags
        title={mdx.frontmatter.title}
        description={
          mdx.frontmatter.description || mdx.frontmatter.subtitle || null
        }
        pathname={mdx.frontmatter.path}
        article
      />
      <div className="Page">
        <article className="card article" id="content">
          <header
            className="header"
            style={{ paddingTop: '1em', paddingBottom: '2em' }}
          ></header>
          <div className="content" itemProp="articleBody">
        <MDXProvider components={SHORTCODES}>
            <MDXRenderer    remoteImages={mdx.frontmatter.embeddedImagesRemote}
          localImages={mdx.frontmatter.embeddedImagesLocal}>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </article>
      </div>
    </MainLayout>
  )
}

