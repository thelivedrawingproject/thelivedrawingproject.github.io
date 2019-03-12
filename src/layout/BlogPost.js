import React from 'react'
import MainLayout from './MainLayout'
import './BasicPage.scss'
import 'moment'
import rehypeReact from "rehype-react"
import PhotoGrid from '../components/PhotoGrid';
import ImageCompare from '../components/GatsbyImageCompare';
import MetaTags from '../components/MetaTags';
import { graphql } from 'gatsby'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "photo-grid": PhotoGrid, "image-compare": ImageCompare },
}).Compiler


/* style={{ backgroundImage: 'url(' + post.frontmatter.cover.childImageSharp.fixed.src + ')' }}*/
export default function Template({ data, location }) {
  const { markdownRemark: post } = data
  return (
    <MainLayout language={post.frontmatter.language} location={{ ...location }}>
      <MetaTags
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.frontmatter.subtitle}
        image={post.frontmatter.image.childImageSharp.sizes.src}
        pathname={post.frontmatter.path}
        article
      />
      <div className="coverBand"
           id="content">
        <div className="overlay">
          <h1 className="punchline">{post.frontmatter.title}</h1>
          <h2 className="subtext">
            <p><strong>{post.frontmatter.subtitle} </strong></p>
            <p><em>{new Date(post.frontmatter.date).getFullYear()}</em></p>
          </h2>
        </div>
      </div>

      <div className="Page">
        <article className="card" itemScope itemType="http://schema.org/BlogPosting">
          <div className="article">
            <br/><br/>
            {renderAst(post.htmlAst)}
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
    }`



