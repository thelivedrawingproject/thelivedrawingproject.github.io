import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../bits/MetaTags/MetaTags'
import './index.scss'
import { indexPageStrings } from '../locales/strings'
import { PhotoGrid } from './../bits/PhotoGrid/PhotoGrid'

const numberOfEventsToShow = 6

export default function Index({ data, pageContext: { locale }, location }) {
  const LOCAL = indexPageStrings[locale]
  const { edges: posts } = data.allMarkdownRemark
  const localesOptions = { year: 'numeric', month: 'long', day: 'numeric' }

  const stayHomeLink = {
    en: { path: '/stayhome', name: LOCAL.announcementLinkName },
    fr: { path: '/fr/stayhome', name: LOCAL.announcementLinkName },
  }

  const onlineModeLink = {
    en: { path: '/online-mode', name: LOCAL.announcementLinkName },
    fr: { path: '/fr/online-mode', name: LOCAL.announcementLinkName },
  }
  const postGrid = ({ node: post }) => {
    const localesOptions = { year: 'numeric', month: 'long' }
    return (
      <div
        className="post"
        onClick={() => {
          navigate(post.frontmatter.path)
        }}
        key={post.id}
        style={{
          backgroundImage:
            'url(' + post.frontmatter.image.childImageSharp.fluid.src + ')',
        }}
      >
        <div className="insideArea">
          <div className="textArea">
            <span className="postTitle">{post.frontmatter.title}</span>
            <span className="postSubtitle">
              {post.frontmatter.subtitle}{' '}
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
        <div className={'ResponsiveContainer SpecialAnnouncementBackground'}>
          <div className={'Inside'}>
            <div className="ShowcasePart Column">
              <div className={'Text Centered SpecialAnnouncement'}>
                <h2
                  className={'SpecialAnnouncementTitle'}
                  style={{ color: 'white' }}
                >
                  {LOCAL.announcementTitle}
                </h2>
                <p
                  className={'SpecialAnnouncementSubtitle'}
                  style={{ color: 'white' }}
                >
                  {LOCAL.announcemenSubtitle}
                </p>
                <Link to={onlineModeLink[locale].path}>
                  {onlineModeLink[locale].name}
                </Link>
              </div>
            </div>
          </div>
        </div>

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

        <div className={'ResponsiveContainer ModernGreenBack'}>
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

        <div className={'ResponsiveContainer'}>
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

        <div className={'ResponsiveContainer BasicWhiteBack'}>
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

        <h2 className={'Punchline'}>{LOCAL.events}</h2>
        <div className="home homePosts">
          <div className="postGrid">
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .filter(post => post.node.frontmatter.language === locale)
              .map((post, index) => {
                if (index < numberOfEventsToShow) return postGrid(post)
              })}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
            }}
          >
            <button
              id="showAllEventsButton"
              onClick={() => {
                let t = document.getElementById('oldEvents')
                t.style.display = ''
                let d = document.getElementById('showAllEventsButton')
                d.style.display = 'none'
              }}
            >
              {LOCAL.showMoreEvents}
            </button>
          </div>
          <div className="postGrid" id="oldEvents" style={{ display: 'none' }}>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .filter(post => post.node.frontmatter.language === locale)
              .map((post, index) => {
                if (numberOfEventsToShow <= index) return postGrid(post)
              })}
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
    gridC: file(relativePath: { eq: "gallery/showcase/glow1.jpg" }) {
      ...gatImage
    }
    gridD: file(relativePath: { eq: "gallery/showcase/glow2.jpg" }) {
      ...gatImage
    }
    gridE: file(relativePath: { eq: "gallery/showcase/chev0.jpg" }) {
      ...gatImage
    }
    gridF: file(relativePath: { eq: "gallery/showcase/chev.jpg" }) {
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
                fluid(maxHeight: 500) {
                  # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                  ...GatsbyImageSharpFluid
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
