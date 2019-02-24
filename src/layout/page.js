import React from 'react'
import Layout from './layout'
import './page.scss'
import rehypeReact from 'rehype-react'
import PhotoGrid from '../components/photo-grid'


const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "photo-grid": PhotoGrid },
}).Compiler

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <div className="coverBand" id="content">
        <div className="overlay overlaySmaller">
          <div className="punchline">{post.frontmatter.title}</div>
        </div>
      </div>

      <div className="Page">
        <article className="card article" id="content">
          <header className="header" style={{ paddingTop: '1em', paddingBottom: '2em' }}>
          </header>
          <div className="content" itemProp="articleBody">
            {renderAst(post.htmlAst)}
          </div>
        </article>
      </div>


    </Layout>


  )
}

export const pageQuery = graphql`
    query PageByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
              htmlAst # previously \`html\`
            frontmatter {
                path
                title
            }
        }
    }`
