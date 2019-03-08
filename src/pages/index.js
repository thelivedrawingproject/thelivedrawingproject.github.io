import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../components/MetaTags'
import './index.scss'
import flyer from './../pages/gallery/flyer.pdf';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <MainLayout>
      <MetaTags title={'Home'}/>

      <div className="FullPage">
        <div className="CenteredLogo"/>
        <h1 style={{opacity:0}}>The Live Drawing Project</h1>
        <h2 className="Subtitle"><strong>Realtime Collaborative Drawing</strong></h2>
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
            Draw on your phone
          </div>
          <div className="SubText">
            With your finger or with a stylus<br/>
            Following instructions... or your creativity !
          </div>
        </div>

        <div className="Square">
          <div className="Icon">
            <div className="Send"/>
          </div>
          <div className="Title">
            Share your drawing
          </div>
          <div className="SubText">
            At anytime, when you're ready, by the click of a button
          </div>
        </div>

        <div className="Square">
          <div className="Icon">
            <div className="Drawings"/>
          </div>
          <div className="Title">
            Join a collaborative artwork
          </div>
          <div className="SubText">
            Drawings from all users appear in realtime on a wide canvas.<br/>
          </div>
        </div>

        <div className="Square">
          <div className="Icon">
            <div className="Replay"/>
          </div>
          <div className="Title">
            Iterate
          </div>
          <div className="SubText">
            The artpiece keeps evolving all the time.
            You can draw as much as you want.<br/>Express yourself !
          </div>
        </div>
      </div>





      <div className="FullPageContainer">
        <h2 className="Punchline Accent">Use cases</h2>
        <div className="WordsCloud">
          <p>Art Exhibitions</p>
          <p>Event Animations</p>
          <p>Live Performances</p>
          <p>Drawing Battles</p>
          <p>Drawing Contests</p>
          <p>Free Expression</p>
          <p>Team Building</p>
          <p>Collective Thinking</p>
          <p>Creative Polls</p>
          <p>And much more !</p>
        </div>

      </div>

      <div className="FullPageContainer">
      <h2 className="Punchline Accent">Features</h2>
      </div>


      <div className="FullPageContainer">
        <h3 className="Punchline White">100% Customizable</h3>
        <p className="Subtext">From the physical installation to the visual style of the artpiece,
          everything can be customised prior to the event to meet your needs.<br/>
          <strong>We design custom experiences for every event we make.</strong></p>
      </div>

      <div className="FullPageContainer">
        <h3 className="Punchline White">Up to 100+ Users at the same time</h3>
        <p className="Subtext">With our <strong>cutting edge realtime technology</strong> we can handle hundreds of drawers simultaneously with no lag of any sort.</p>
      </div>

      <div className="FullPageContainer">
        <h3 className="Punchline White">User Friendly</h3>
        <p className="Subtext">Our tool has been designed with <strong>ease of use</strong> from the start.<br/>
          No need to install a dedicated app. It <strong>works for everyone</strong> seamlessly, on every Android and Apple devices, through the web browser.
        </p>
      </div>

      <div className="FullPageContainer">
        <h3 className="Punchline White">No cellular network ? No problem.</h3>
        <p className="Subtext">The Live Drawing Project can run through Internet or on a local Wi-Fi, depending on your needs.
        </p>
      </div>



      <div className="FullPageContainer">
        <h2 className="Punchline Accent">Events</h2>
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
          <a href={flyer}>Our Brochure (in French)</a>
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
