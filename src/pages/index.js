import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../components/MetaTags'
import './index.scss'
import flyer from './../pages/gallery/flyer.pdf';
import {indexPageStrings} from '../locales/strings';

export default function Index({ data, pathContext: { locale }, location }) {
  const { edges: posts } = data.allMarkdownRemark;
  const LOCAL = indexPageStrings[locale.key];

  return (
    <MainLayout language={locale.key} location={location}>
      <MetaTags title={'Home'}/>

      <div className="FullPage">
        <div className="CenteredLogo"/>
        <h1 style={{opacity:0}}>The Live Drawing Project</h1>
        <h2 className="Subtitle"><strong>{LOCAL.realtimeCollaborativeDrawing}</strong></h2>
      </div>

      <div className="ResponsiveIframe">
      <iframe title="showcasevideo" src="https://player.vimeo.com/video/311653956"frameBorder="0"
              webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
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
        <h2 className="Punchline Accent">Use cases</h2>
        <div className="WordsCloud">
          <>{LOCAL.wordClouds.map(wordCloud => {return <p key={wordCloud}>{wordCloud}</p>})}</>
        </div>
      </div>

      <div className="FullPageContainer">
      <h2 className="Punchline Accent">{LOCAL.features}</h2>
      </div>


      <div className="FullPageContainer">
        <h3 className="Punchline White">{LOCAL.customizableTitle}</h3>
        <p className="Subtext">{LOCAL.customisableSubtext}</p>
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
        <h2 className="Punchline Accent">{LOCAL.events}</h2>
      </div>

      <div className="home homePosts">

        <div className="postGrid">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (

                <div className="post" onClick={() => {
                  navigate(post.frontmatter.path + '#content')
                }} key={post.id}>
                  <div className="postHeader" style={{
                    backgroundImage: 'url(' + post.frontmatter.image.childImageSharp.fixed.src + ')',
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

        <div className="moreProjects">
          <Link to="/contact">Contact</Link>
          <Link to="/gallery">Gallery</Link>
          <a href={flyer}>Download the brochure (FR)</a>
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
