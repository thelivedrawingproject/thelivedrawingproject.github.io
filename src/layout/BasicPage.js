import React from 'react'
import MainLayout from './MainLayout'
import './BasicPage.scss'
import rehypeReact from 'rehype-react'
import PhotoGrid from '../components/PhotoGrid'
import MetaTags from '../components/MetaTags'


const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "photo-grid": PhotoGrid },
}).Compiler

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <MainLayout>
      <MetaTags title={post.frontmatter.title}
                description={post.frontmatter.description || post.frontmatter.subtitle || ''}
                pathname={post.frontmatter.path}
                article/>
      <h1 className="coverBand" id="content">
        <h2 className="overlay overlaySmaller">
          <div className="punchline">{post.frontmatter.title}</div>
        </h2>
      </h1>

      <div className="Page">
        <article className="card article" id="content">
          <header className="header" style={{ paddingTop: '1em', paddingBottom: '2em' }}>
          </header>
          <div className="content" itemProp="articleBody">
            {renderAst(post.htmlAst)}
          </div>
        </article>
      </div>


    </MainLayout>


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
