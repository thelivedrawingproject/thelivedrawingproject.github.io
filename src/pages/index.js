import { CSSObject } from '@emotion/react'
import React from 'react'
import { Link, graphql, navigate } from 'gatsby'

import { StaticImage, getImage } from "gatsby-plugin-image";
import MainLayout from '../layout/MainLayout'
import MetaTags from '../bits/MetaTags/MetaTags'
import './index.scss'
import './PhoneMockup.scss'
import './basics.scss'
import './SpecialAnnouncement.scss'
import './DrawingCount.scss'
import './ShowcasePage.scss'
import { indexPageStrings } from '../locales/strings'
import { PhotoGrid } from './../bits/PhotoGrid/PhotoGrid'
import BackgroundSlider from 'gatsby-image-background-slider'
import { SvgSlideshow } from '../components/svgSlideshow'
import flyerFR from './gallery/TheLiveDrawingProject_Brochure_FR.pdf'
import flyerEN from './gallery/TheLiveDrawingProject_Brochure_EN.pdf'
import PostGridFlat from '../bits/PostGridFlat/PostGridFlat'
import TldpLogo from '../bits/TldpLogo/TldpLogo'
import Gallery from '@browniebroke/gatsby-image-gallery';


const numberOfEventsToShow = 6
const icon = {
  hidden: {
    opacity: 1,
    pathLength: 0,
    fill: 'rgba(0,0,0,0',
    stroke: 'rgba(0,0,0,0)',
    strokeWidth: 2,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(0,0,0,0',
    stroke: 'white',
    strokeWidth: 2,
  },
}

/*
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

        */
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

  /*
   <div
            className={'ResponsiveContainer WelcomerCoverPhoto'}
            style={{
              background: `url(${data.imageChevagny.childImageSharp.fluid.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
          */
  return (
    <MainLayout language={locale} location={{ ...location }}>
      <MetaTags title={'Home'} />

      <div className={'ShowcasePage'}>
        <div className={'RollbackBackground'}>
          <BackgroundSlider
            query={data}
            initDelay={0} // delay before the first transition (if left at 0, the first image will be skipped initially)
            transition={1} // transition duration between images
            duration={6} // how long an image is shown
            style={{
              backgroundColor: '#6d8879',
            }}
          />
          <div className={'Inside'}>
            <div className="WelcomeCover">
              <div className={'Inside'}>
                <div className={'CoverLogo'}>
                  <TldpLogo />
                </div>
                <p>{LOCAL.mainDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={'ResponsiveContainer ModernGreenBack'}>
          <div className={'Inside'}>
            <div className="ShowcasePart">
              <div className={'PhoneMockupCSS'}>
                <div className={'device device-Left'}>
                  <div className="screen">
                    <SvgSlideshow></SvgSlideshow>
                  </div>
                  <div className="speaker"></div>
                  <div className="powerbutton"></div>
                  <div className="volumebutton"></div>
                  <div className="nav">
                    <div className="back" id="back"></div>
                    <div className="home"></div>
                    <div className="overview"></div>
                  </div>
                </div>
              </div>

              <div className={'Text Centered'}>
                <h2 style={{ color: 'white' }}>
                  {LOCAL.yourPhoneYourCanvasTitle}
                </h2>
                <p style={{ color: 'white' }}>
                  {LOCAL.yourPhoneYourCanvasDescription}
                </p>
              </div>
              <div className={'PhoneMockupCSS'}>
                <div className="device">
                  <div className="screen">
                    <SvgSlideshow></SvgSlideshow>
                  </div>
                  <div className="speaker"></div>
                  <div className="powerbutton"></div>
                  <div className="volumebutton"></div>
                  <div className="nav">
                    <div className="back" id="back"></div>
                    <div className="home"></div>
                    <div className="overview"></div>
                  </div>
                </div>
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
                  imageUrls={[
                    data.gridG.childImageSharp?.full?.images?.fallback?.src,
                    data.gridB.childImageSharp?.full?.images?.fallback?.src,
                    data.gridE.childImageSharp?.full?.images?.fallback?.src,
                    data.gridC.childImageSharp?.full?.images?.fallback?.src,
                    data.gridA.childImageSharp?.full?.images?.fallback?.src,
                    data.gridF.childImageSharp?.full?.images?.fallback?.src,
                    data.gridD.childImageSharp?.full?.images?.fallback?.src,
                    data.gridH.childImageSharp?.full?.images?.fallback?.src,
                    data.gridI.childImageSharp?.full?.images?.fallback?.src,
                  ]}
                  gatsbyThumbs={[
                    data.gridG.childImageSharp?.thumb,
                    data.gridB.childImageSharp?.thumb,
                    data.gridE.childImageSharp?.thumb,
                    data.gridC.childImageSharp?.thumb,
                    data.gridA.childImageSharp?.thumb,
                    data.gridF.childImageSharp?.thumb,
                    data.gridD.childImageSharp?.thumb,
                    data.gridH.childImageSharp?.thumb,
                    data.gridI.childImageSharp?.thumb,
                  ]}
                  useGatsbyThumbs={true}
                  // colWidth={1/3}
                  // mdColWidth={1/3}
                  className={'PaddingForNormalSize'}
                />
              </div>
              <div className="moreProjects">
                <Link to={'/gallery'}>{LOCAL.goToGallery}</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={'ResponsiveContainer'}>
          <div className={'Inside'}>
            <div className="ShowcasePart">
              <div className={'Text Centered'}>
                <h2 style={{ color: 'rgb(40,40,40)' }}>
                  {LOCAL.covidProofTitle}
                </h2>
                <p>{LOCAL.covidProofDescription}</p>
              </div>
              <div className={'GatsbyImageContainer'}>
                <StaticImage src={'gallery/showcase/remote.jpg'} alt="" layout={'constrained'} objectFit={'contain'}  placeholder={'blurred'} />
              </div>
            </div>
          </div>
        </div>

        <div className={'ResponsiveContainer DrawingCountBackground'}>
          <div className={'Inside'}>
            <div className="ShowcasePart DrawingCountPart Column">
              <div className={'Text Centered'}>
                <h2 className={'BCTitle'} style={{ color: 'white' }}>
                  {LOCAL.drawingCountTitle}
                </h2>
                <p className={'BCSubtitle'} style={{ color: 'white' }}>
                  {LOCAL.drawingCountSubtext}
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className={'Punchline'}>{LOCAL.events}</h2>
        <div className="home homePosts">
          <PostGridFlat
            posts={posts
              .filter((post) => post.node.frontmatter.title.length > 0)
              .filter((post) => post.node.frontmatter.language === locale)
              .filter((post, index) => {
                return index < numberOfEventsToShow
              })}
          />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '1rem',
            }}
          >
            <button
              id="showAllEventsButton"
              className={'greenButton'}
              style={{ marginTop: '2em' }}
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
            <PostGridFlat
              posts={posts
                .filter((post) => post.node.frontmatter.title.length > 0)
                .filter((post) => post.node.frontmatter.language === locale)
                .filter((post, index) => {
                  return numberOfEventsToShow <= index
                })}
            />
          </div>
        </div>
      </div>
      <div className="home homePosts">
        <div className="moreProjects">
          <Link to={'/booking'}>{LOCAL.goToAbout}</Link>
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
    backgrounds: allFile(filter: { absolutePath: { regex: "/backgrounds/" } }) {
      nodes {
        relativePath
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    imagePhone: file(relativePath: { eq: "gallery/showcase/phone.jpg" }) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    imageChevagny: file(relativePath: { eq: "gallery/showcase/chev.jpg" }) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    imageArt: file(relativePath: { eq: "gallery/showcase/permanent.jpg" }) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    imageRemote: file(relativePath: { eq: "gallery/showcase/remote.jpg" }) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    gridA: file(relativePath: { eq: "gallery/showcase/cn.jpg" }) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    gridB: file(relativePath: { eq: "gallery/showcase/b.jpg" }) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    gridC: file(relativePath: { eq: "gallery/showcase/glow1.jpg" }) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    gridD: file(relativePath: { eq: "gallery/showcase/glow2.jpg" }) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    gridE: file(relativePath: { eq: "gallery/showcase/chev0.jpg" }) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    gridF: file(relativePath: { eq: "gallery/showcase/chev.jpg" }) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    gridG: file(relativePath: { eq: "2020-04-01-stayhome/26v_2_webw.jpg" }) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    gridH: file(
      relativePath: { eq: "2020-03-05-spraying-board/SprayingBoard_8.jpg" }
    ) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    gridI: file(relativePath: { eq: "2019-10-20-mur/CHRD-5.jpg" }) {
      childImageSharp {
        thumb: gatsbyImageData(
          width: 270
          height: 270
          placeholder: BLURRED
        )
        full: gatsbyImageData(layout: FULL_WIDTH)
      }
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
