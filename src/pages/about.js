import React from 'react'
import { graphql, Link, navigate } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../bits/MetaTags/MetaTags'
import './index.scss'
import { bookingPageStrings, indexPageStrings } from '../locales/strings'
import { localLink } from '../locales/localeUtils'
import flyerFR from './gallery/TheLiveDrawingProject_Brochure_FR.pdf'
import flyerEN from './gallery/TheLiveDrawingProject_Brochure_EN.pdf'




export default function AboutPage({ data, pageContext: { locale }, location }) {
  const { edges: posts } = data.allMarkdownRemark;

  const LOCAL = bookingPageStrings[locale];



  const postGrid = ({node : post}) => {
    const localesOptions = {  year: 'numeric', month: 'long', day: 'numeric' };
    return (
      <div className="post" onClick={() => {
        navigate(post.frontmatter.path)
      }} key={post.id} style={{ backgroundImage: 'url(' + post.frontmatter.image.childImageSharp.fixed.src + ')', }}>
        <div className="insideArea">
          <div className="textArea">
            <span className="postTitle">{post.frontmatter.title}</span>
            <span className="post-meta postTag">{post.frontmatter.subtitle}</span>
            <span className="post-meta postTag">{new Date(post.frontmatter.date).toLocaleDateString(locale, localesOptions)}</span>
          </div>
        </div>
      </div>
    )
  };

  return (
    <MainLayout language={locale} location={{ ...location }}>
      <MetaTags title={'About'}/>

      <div className={"ResponsiveContainer"}>
        <div className={"Inside"}>

      <div className="FullPageContainer" style={{marginBottom: '2em'}}>
        <h1 style={{opacity:0}}>About</h1>
        <h2 className="Quote">{LOCAL.bookingPunchline}</h2>
        <div style={{textAlign:'center', fontSize:'1.2em'}}>
          <p>{LOCAL.bookingSubtext}</p>
        </div>
        <div className="moreProjects" style={{marginBottom:'5em'}}>
          <a href={'mailto:livedrawingproject@protonmail.com'} className={"Quote"} style={{fontSize:'1.5em'}}>{LOCAL.reachUs}</a>
        </div>
      </div>

      <h2 className={"Punchline"}>{LOCAL.events}</h2>
          <div className="home homePosts">
          <div className="postGrid">
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .filter(post => post.node.frontmatter.language === locale)
              .map(postGrid)
            }
          </div>
          </div>


      <div className="FullPageContainer">
        <h2 className="Punchline Accent">{LOCAL.features}</h2>
      </div>


      <div className="FullPageContainer">
        <h3 className="Punchline White">{LOCAL.customisableTitle}</h3>
        <p className="Subtext">{LOCAL.customisableText}</p>
      </div>

      <div className="FullPageContainer">
        <h3 className="Punchline White">{LOCAL.usersTitle}</h3>
        <p className="Subtext">{LOCAL.usersSubtext}</p>
      </div>

      <div className="FullPageContainer">
        <h3 className="Punchline White">{LOCAL.userFriendlyTitle}</h3>
        <p className="Subtext">{LOCAL.userFriendlySubtext}</p>
      </div>

      <div className="FullPageContainer">
        <h3 className="Punchline White">{LOCAL.cellularNetworkTitle}</h3>
        <p className="Subtext">{LOCAL.cellularNetworkSubtext}</p>
      </div>

      <div className="FullPageContainer">
        <h3 className="Punchline White">{LOCAL.moderationTitle}</h3>
        <p className="Subtext">{LOCAL.moderationSubtext}</p>
      </div>


      <div className="home homePosts">
        <div className="moreProjects">
          <a href={"mailto:livedrawingproject@protonmail.com"}>{LOCAL.bookingContactUs}</a>
          <a href={ locale === 'fr' ? flyerFR : flyerEN}>{LOCAL.downloadBrochure}</a>
          <a href={ locale === 'fr' ? flyerEN : flyerFR}>{LOCAL.downloadBrochureOtherLanguage}</a>
        </div>
      </div>


          </div>
      </div>
    </MainLayout>
  )
}
export const aboutPageQuery = graphql`
      query aboutPageQuery {
          allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }
              filter: { frontmatter:  { category: { eq:"event"}}}
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

                              }
                          }
                      }
                  }
              }
          }
      }`