import React from 'react'
import MainLayout from './MainLayout'
import './BasicPage.scss'
import 'moment'
import rehypeReact from 'rehype-react'
import PhotoGrid from '../bits/PhotoGrid/PhotoGrid'
import ImageCompare from '../bits/ImageCompare/GatsbyImageCompare'
import MetaTags from '../bits/MetaTags/MetaTags'
import { graphql, Link } from 'gatsby'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'photo-grid': PhotoGrid, 'image-compare': ImageCompare },
}).Compiler

/* style={{ backgroundImage: 'url(' + post.frontmatter.cover.childImageSharp.fixed.src + ')' }}*/
export default function Template({ data, location, pageContext }) {
  const { markdownRemark: post } = data
  const { previousPost, nextPost } = pageContext

  // content is at false is no previous or next
  const previousPostHtml = previousPost ? (
    <Link to={previousPost.frontmatter.path}>
      ← {previousPost.frontmatter.title}
    </Link>
  ) : (
    <div></div>
  )
  const nextPostHtml = nextPost ? (
    nextPost && (
      <Link to={nextPost.frontmatter.path}>{nextPost.frontmatter.title} →</Link>
    )
  ) : (
    <div></div>
  )

  return (
    <MainLayout language={post.frontmatter.language} location={{ ...location }}>
      <MetaTags
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.frontmatter.subtitle}
        image={post.frontmatter.image.childImageSharp.sizes.src}
        pathname={post.frontmatter.path}
        article
      />
      <div className="coverBand" id="content">
        <div className="overlay">
          <h1 className="punchline">{post.frontmatter.title}</h1>
          <h2 className="subtext">
            <p>
              <strong>{post.frontmatter.subtitle} </strong>
             // <em>
                {new Date(post.frontmatter.date).toLocaleDateString(
                  post.frontmatter.language,
                  { year: 'numeric', month: 'long' }
                )}
              </em>
            </p>
          </h2>
        </div>
      </div>

      <div className="Page">
        <article
          className="card"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <div className="article">
            <br />
            <br />
            {renderAst(post.htmlAst)}
            <div className="prevNextLinks">
              {previousPostHtml}
              {nextPostHtml}
            </div>
          </div>
        </article>
      </div>
    </MainLayout>
  )
}

//  <div className="content" itemProp="articleBody" dangerouslySetInnerHTML={{ __html: post.html }}/>

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst # previously \`html\`
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        language
        description
        image {
          childImageSharp {
            # Other options include height (set both width and height to crop),
            # grayscale, duotone, rotate, etc.
            fixed(width: 700) {
              # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
              ...GatsbyImageSharpFixed
              src
            }
            sizes {
              src
            }
          }
        }
      }
    }
  }
`
