import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../components/MetaTags'
import './index.scss'
import flyerEN from './../pages/gallery/TheLiveDrawingProject_Brochure_EN.pdf';
import flyerFR from './../pages/gallery/TheLiveDrawingProject_Brochure_FR.pdf';
import {indexPageStrings} from '../locales/strings';
import {localLink} from '../locales/localeUtils'


export default function Index({ data, pageContext: { locale }, location }) {
  const { edges: posts } = data.allMarkdownRemark;
  const LOCAL = indexPageStrings[locale];

  const localesOptions = {  year: 'numeric', month: 'long', day: 'numeric' };
  const postGrid = ({node : post}) => {
    return (
      <div className="post" onClick={() => {
        navigate(post.frontmatter.path + '#content')
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
      <MetaTags title={'Home'}/>


      <div className={"FullPage"} style={{marginBottom: '10rem'}}>
        <h2 className="Subtitle"><strong>{LOCAL.comeDrawWithUs}</strong></h2>
        <a href="http://peinture.thelivedrawingproject.com">{LOCAL.clickHereToDraw}</a>
      </div>

      <div className="FullPage">
        <div className="CenteredLogo"/>
        <h1 style={{opacity:0}}>The Live Drawing Project</h1>
        <h2 className="Subtitle"><strong>{LOCAL.realtimeCollaborativeDrawing}</strong></h2>
      </div>

      <div className="ResponsiveIframe">
      <iframe title="showcasevideo" src="https://player.vimeo.com/video/311653956"frameBorder="0" allowFullScreen={true}/>
      </div>

      <div className="FullPageContainer">
        <h2 className="Punchline Accent">{LOCAL.letsDrawTogether}</h2>
      </div>

      <div className="Squares">

        <div className="Square">
          <div className="Icon">
            <div className="Phone"/>
          </div>
          <div className="Title">
            {LOCAL.drawOnYourPhone}
          </div>
          <div className="SubText">
            {LOCAL.drawOnYourPhoneSubtext}
          </div>
        </div>

        <div className="Square">
          <div className="Icon">
            <div className="Send"/>
          </div>
          <div className="Title">
            {LOCAL.shareYourDrawing}
          </div>
          <div className="SubText">
            {LOCAL.shareYourDrawingSubtext}
          </div>
        </div>

        <div className="Square">
          <div className="Icon">
            <div className="Drawings"/>
          </div>
          <div className="Title">
            {LOCAL.joinArtwork}
          </div>
          <div className="SubText">
            {LOCAL.joinArtworkSubtext}
          </div>
        </div>

        <div className="Square">
          <div className="Icon">
            <div className="Replay"/>
          </div>
          <div className="Title">
            {LOCAL.iterate}
          </div>
          <div className="SubText">
            {LOCAL.iterateSubtext}
          </div>
        </div>
      </div>

      <div className="FullPageContainer">
        <h2 className="Punchline Accent">{LOCAL.events}</h2>
      </div>


      <div className="home homePosts">
        <div className="postGrid">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .filter(post => post.node.frontmatter.language === locale)
            .filter(post => {return new Date() <= new Date(post.node.frontmatter.date)})
            .map(postGrid)
          }
        </div>


        <h2 className={"Punchline"}>{LOCAL.pastEvents}</h2>
        <div className="postGrid">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .filter(post => post.node.frontmatter.language === locale)
            .filter(post => {return new Date(post.node.frontmatter.date) < new Date()})
            .map(postGrid)
          }
        </div>

      </div>


      <div className="home homePosts">
        <div className="moreProjects">
          <Link to={localLink(locale, '/gallery')}>{LOCAL.gallery}</Link>
          <Link to={localLink(locale, '/bookings')}>{LOCAL.bookUs}</Link>
          <Link to={localLink(locale, '/contact')}>Contact</Link>
          <a href={ locale === 'fr' ? flyerFR : flyerEN}>{LOCAL.downloadBrochure}</a>
        </div>
      </div>
    </MainLayout>
  )
}

export const portfolioPostsQuery = graphql`
      query IndexQuery {
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


/*



 */
