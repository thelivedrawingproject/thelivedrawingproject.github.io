import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Layout from '../layout/layout'
import './index.scss'
import flyer from './../pages/gallery/flyer.pdf';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <Layout>
      <div className="CenteredLogo">
      </div>
      <div className="home homePosts">
        <div className="moreProjects">
          <Link to="/contact">Contact Us</Link>

          <a href={flyer}>Our Brochure (in French)</a>
        </div>
      </div>
    </Layout>
  )
}


  export const portfolioPostsQuery = graphql`
      query IndexQuery {
     
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }
              filter: { frontmatter:  { category: { eq:"video"}}}
          ) {
              edges {
                  node {
                      excerpt(pruneLength: 250)
                      id
                      frontmatter {
                          title
                          date(formatString: "MMMM DD, YYYY")
                          path
                          category
                          subtitle
                          cover {
                              childImageSharp {
                                  # Other options include height (set both width and height to crop),
                                  # grayscale, duotone, rotate, etc.
                                  fixed(width: 700) {
                                      # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                                      ...GatsbyImageSharpFixed
                                      src
                                  }

                              }
                          }
                      }
                  }
              }
          }
      }`


/*


        <div className="postGrid">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (

                <div className="post" onClick={() => {
                  navigate(post.frontmatter.path + '#content')
                }} key={post.id}>
                  <div className="postHeader" style={{
                    backgroundImage: 'url(' + post.frontmatter.cover.childImageSharp.fixed.src + ')',
                  }}>
                    <div className="inside">
                      <span className="postTitle">{post.frontmatter.title}</span>
                      <span className="post-meta postTag">{post.frontmatter.subtitle}</span>
                    </div>
                  </div>
                </div>
              )
            })}

        </div>
 */
