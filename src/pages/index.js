import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../bits/MetaTags/MetaTags'
import './index.scss'
import flyerEN from './../pages/gallery/TheLiveDrawingProject_Brochure_EN.pdf'
import flyerFR from './../pages/gallery/TheLiveDrawingProject_Brochure_FR.pdf'
import { indexPageStrings } from '../locales/strings'
import { localLink } from '../locales/localeUtils'
import { PhotoGrid } from './../bits/PhotoGrid/PhotoGrid'

const AreWeInPerformanceMode = true
const eventName = 'Glow Downtown Calgary'
export default function Index({ data, pageContext: { locale }, location }) {
  const LOCAL = indexPageStrings[locale]
  const { edges: posts } = data.allMarkdownRemark
  const localesOptions = { year: 'numeric', month: 'long', day: 'numeric' }

  const postGrid = ({ node: post }) => {
    const localesOptions = { year: 'numeric', month: 'long', day: 'numeric' }
    return (
      <div
        className="post"
        onClick={() => {
          navigate(post.frontmatter.path)
        }}
        key={post.id}
        style={{
          backgroundImage:
            'url(' + post.frontmatter.image.childImageSharp.fixed.src + ')',
        }}
      >
        <div className="insideArea">
          <div className="textArea">
            <span className="postTitle">{post.frontmatter.title}</span>
            <span className="post-meta postTag">
              {post.frontmatter.subtitle}
            </span>
            <span className="post-meta postTag">
              {new Date(post.frontmatter.date).toLocaleDateString(
                locale,
                localesOptions
              )}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <MainLayout language={locale} location={{ ...location }}>
      <MetaTags title={'Home'} />

      <div className={'ShowcasePage'}>
        <h1 style={{ display: 'none' }}>{LOCAL.title}</h1>
        {AreWeInPerformanceMode && (
          <div className={'PerformanceMode'} id={'performanceOverlay'}>
            <div className="Logo" />
            <div style={{ textAlign: 'center', fontSize: '1.5em' }}>
              {LOCAL.currentlyHappening}
              <br />
              <br />
              <strong style={{ fontSize: '1.2em', color: '#85b94f' }}>
                {eventName}
              </strong>
            </div>
            <a href="https://glow.thelivedrawingproject.com" onClick={() => {}}>
              {LOCAL.clickHereToDraw}
            </a>
            <button
              onClick={() => {
                let t = document.getElementById('performanceOverlay')
                t.style.display = 'none'
                t.style.pointerEvents = 'none'
              }}
            >
              {LOCAL.goToWebsite}
            </button>
          </div>
        )}

        <div className={'RollbackBackground'}>
          <div
            className={'ResponsiveContainer WelcomerCoverPhoto'}
            style={{
              background: `url(${data.imageChevagny.childImageSharp.fluid.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className={'Inside'}>
              <div className="WelcomeCover">
                <div className={'Inside'}>
                  <h2>{LOCAL.letsDrawTogether}</h2>
                  <p>{LOCAL.mainDescription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={'ResponsiveContainer'}
          style={{ backgroundColor: '#aac989' }}
        >
          <div className={'Inside'}>
            <div className="ShowcasePart">
              <div className={'Text'}>
                <h2 style={{ color: 'white' }}>
                  {LOCAL.yourPhoneYourCanvasTitle}
                </h2>
                <p style={{ color: 'white' }}>
                  {LOCAL.yourPhoneYourCanvasDescription}
                </p>
              </div>
              <div className={'ImageContainer'}>
                <Img fluid={data.imagePhone.childImageSharp.fluid} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={'ResponsiveContainer'}
          style={{ backgroundColor: '#f4f4f4' }}
        >
          <div className={'Inside'}>
            <div className="ShowcasePart Column">
              <div className={'Text Centered'}>
                <h2>{LOCAL.joinCollabTitle}</h2>
                <p>{LOCAL.joinCollabDescription}</p>
              </div>

              <div className={'PhotogridContainer'}>
                <PhotoGrid
                  gatsbyImages={[
                    data.gridA.childImageSharp.fluid.src,
                    data.gridB.childImageSharp.fluid.src,
                    data.gridC.childImageSharp.fluid.src,
                    data.gridD.childImageSharp.fluid.src,
                    data.gridE.childImageSharp.fluid.src,
                    data.gridF.childImageSharp.fluid.src,
                  ]}
                  className={'PaddingForNormalSize'}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={'ResponsiveContainer'}>
          <div className={'Inside'}>
            <div className="ShowcasePart">
              <div className={'Text'}>
                <h2 style={{ color: 'rgb(40,40,40)' }}>
                  {LOCAL.permanentArtTitle}
                </h2>
                <p>{LOCAL.permanentArtDescription}</p>
              </div>
              <div className={'ImageContainer'}>
                <Img fluid={data.imageArt.childImageSharp.fluid} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={'ResponsiveContainer'}
          style={{ backgroundColor: '#aac989' }}
        >
          <div className={'Inside'}>
            <div className="ShowcasePart Column">
              <div className={'Text Centered'}>
                <h2 style={{ color: 'white' }}>{LOCAL.useCasesTitle}</h2>
              </div>
              <div className={'ImageContainer'}>
                <div className="WordsCloud">
                  <>
                    {LOCAL.useCases.map(wordCloud => {
                      return <p key={wordCloud}>{wordCloud}</p>
                    })}
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className={'Punchline'}>{LOCAL.events}</h2>
        <div className="home homePosts">
          <div className="postGrid">
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .filter(post => post.node.frontmatter.language === locale)
              .map(postGrid)}
          </div>
        </div>

        <div className="home homePosts">
          <div className="moreProjects">
            <Link to={'/about'}>{LOCAL.moreInfos}</Link>
            <Link to={'/gallery'}>{LOCAL.watchPhotos}</Link>
            <Link to={'/contact'}>{LOCAL.contactUs}</Link>
            <a href={locale === 'fr' ? flyerFR : flyerEN}>
              {LOCAL.downloadBrochure}
            </a>
            <a href={locale === 'fr' ? flyerEN : flyerFR}>
              {LOCAL.downloadBrochureOtherLanguage}
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export const gatImage = graphql`
  fragment gatImage on File {
    childImageSharp {
      fluid(maxHeight: 1400) {
        ...GatsbyImageSharpFluid
        src
      }
    }
  }
`

export const indexPageQuery = graphql`
  query IndexQuery {
    imagePhone: file(relativePath: { eq: "gallery/showcase/phone.jpg" }) {
      ...gatImage
    }
    imageChevagny: file(relativePath: { eq: "gallery/showcase/chev.jpg" }) {
      ...gatImage
    }
    imageArt: file(relativePath: { eq: "gallery/showcase/permanent.jpg" }) {
      ...gatImage
    }
    gridA: file(relativePath: { eq: "gallery/showcase/fl0.jpg" }) {
      ...gatImage
    }
    gridB: file(relativePath: { eq: "gallery/showcase/fl1.jpg" }) {
      ...gatImage
    }
    gridC: file(relativePath: { eq: "gallery/showcase/chev0.jpg" }) {
      ...gatImage
    }
    gridD: file(relativePath: { eq: "gallery/showcase/chev.jpg" }) {
      ...gatImage
    }
    gridE: file(relativePath: { eq: "gallery/pf/1.jpg" }) {
      ...gatImage
    }
    gridF: file(relativePath: { eq: "gallery/pf/b-12.jpg" }) {
      ...gatImage
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { category: { eq: "event" } } }
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
  }
`
