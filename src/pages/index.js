import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Img from 'gatsby-image'
import MainLayout from '../layout/MainLayout'
import MetaTags from '../bits/MetaTags/MetaTags'
import './index.scss'
import { indexPageStrings } from '../locales/strings'
import { PhotoGrid } from './../bits/PhotoGrid/PhotoGrid'
import BackgroundSlider from 'gatsby-image-background-slider'

const numberOfEventsToShow = 6

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
            <span className="postSubtitle">{post.frontmatter.subtitle} </span>
          </div>
        </div>
      </div>
    )
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
            duration={8} // how long an image is shown
            style={{
              backgroundColor: '#6d8879',
            }}
          />
          <div className={'Inside'}>
            <div className="WelcomeCover">
              <div className={'Inside'}>
                <div className={'CoverLogo'}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 189.4224 198.4252"
                  >
                    <g
                      id="b033bcea-250a-4236-8bec-3b9201489974"
                      data-name="TEXTE"
                      fill="white"
                    >
                      <path d="M38.08,132.0853h6.63c4.5239,0,7.4882,3.042,7.4882,7.7226S49.2342,147.53,44.71,147.53H41.1219v12.7149H38.08Zm3.042,12.87H44.32c3.042,0,4.836-1.6377,4.836-5.1475s-1.794-5.1484-4.836-5.1484H41.1219Z" />
                      <path d="M55.7855,132.0853h6.7861c4.5239,0,7.7222,2.6523,7.7222,7.293,0,3.1591-1.4038,5.8115-4.524,6.9033l4.7583,13.9629H67.33l-4.5244-13.3389-3.978.1563v13.1826h-3.042Zm3.042,12.3242h2.6518c4.3682,0,5.7725-1.7158,5.7725-4.875s-1.4043-4.875-5.7725-4.875H58.8275Z" />
                      <path d="M82.4617,160.6341c-4.7583,0-7.9565-3.9775-7.9565-14.4687s3.1982-14.47,7.9565-14.47,7.9561,3.9776,7.9561,14.47S87.22,160.6341,82.4617,160.6341Zm0-26.3642c-2.73,0-4.914,2.34-4.914,11.8955s2.1836,11.8955,4.914,11.8955,4.9141-2.3408,4.9141-11.8955S85.1917,134.27,82.4617,134.27Z" />
                      <path d="M100.4793,132.0853V153.224c0,5.7724-1.95,7.41-6.9419,7.41a9.4452,9.4452,0,0,1-1.56-.2334l.2338-2.6523a5.1791,5.1791,0,0,0,1.7549.3125c2.4575,0,3.4712-1.0537,3.4712-4.1348V132.0853Z" />
                      <path d="M118.4979,132.0853V134.66h-9.8287v9.5947h7.2544v2.5743h-7.2544V157.67h10.2964v2.5742H105.6273V132.0853Z" />
                      <path d="M134.4871,140.5882c-.39-4.4463-1.7939-6.3183-4.1733-6.3183-3.5493,0-5.1089,3.12-5.1089,11.8955s1.56,11.8955,5.1089,11.8955c2.8471,0,4.4853-1.95,4.563-7.1768h3.0424c-.0781,6.24-2.8081,9.75-7.6054,9.75-5.0313,0-8.1514-3.8213-8.1514-14.4687s3.12-14.47,8.1514-14.47c4.1733,0,6.7475,2.8858,7.2153,8.8926Z" />
                      <path d="M154.7278,132.0853V134.66h-5.7719v25.585h-3.042V134.66h-5.7725v-2.5742Z" />
                      <path d="M57.9905,94.2122c0-3.8886-1.728-6-7.1045-6H47.6219v12.001H50.886C56.2625,100.2132,57.9905,98.1009,57.9905,94.2122Z" />
                      <path d="M14.34,79.5235v46.2552H174.805V79.5235Zm11.97,40.179H19.8777V85.0433H26.31c7.2968,0,11.7134,4.0322,11.7134,17.33S33.6067,119.7025,26.31,119.7025Zm31.7768,0-5.5683-16.417-4.8965.1914v16.2256H43.8777V85.0433H52.23c5.5683,0,9.5049,3.2646,9.5049,8.9766,0,3.8886-1.7281,7.1533-5.5684,8.497l5.8565,17.1856Zm23.76,0L79.7825,109.43H70.95l-2.0644,10.2725H65.1414l7.6323-34.6592h5.1846l7.6328,34.6592Zm25.8242,0h-3.1685L99.03,92.4837h-.0957l-5.4727,27.2188H90.2933l-5.76-34.6592h3.4561l4.1284,27.0742h.0962l5.1846-27.0742h3.0722l5.3765,27.0742h.0957l3.84-27.0742H113.24Zm13.1016,0h-3.7442V85.0433h3.7442Zm24.7685,0h-4.0322L130.7562,89.556H130.66v30.1465h-3.7447V85.0433h5.857l8.9287,25.5381h.0957V85.0433h3.7446Zm14.8306-2.6885c3.5044,0,5.4243-1.92,5.4243-5.4727v-4.8955h-4.7041v-3.1689h8.4487v16.2256h-2.4l-.48-2.5918a7.4152,7.4152,0,0,1-6.2886,3.0722c-6.0967,0-9.937-4.705-9.937-17.8095s3.84-17.81,9.937-17.81c6.3847,0,8.6889,5.5684,9.1689,11.1367h-3.7446c-.2881-4.5127-1.6318-7.9687-5.4243-7.9687-4.1763,0-6.1924,3.7441-6.1924,14.6416S156.1956,117.014,160.3719,117.014Z" />
                      <path d="M25.638,88.2122H23.6219v28.3223H25.638c5.4727,0,8.6406-2.3047,8.6406-14.1611S31.1107,88.2122,25.638,88.2122Z" />
                      <polygon points="75.318 87.636 71.478 106.261 79.255 106.261 75.414 87.636 75.318 87.636" />
                      <path d="M42.8846,40.598v2.5742h-5.772v25.585h-3.042V43.1722H28.2982V40.598Z" />
                      <path d="M48.8118,40.598V52.7669H57.08V40.598h3.0425V68.7572H57.08V55.3412H48.8118v13.416H45.77V40.598Z" />
                      <path d="M78.14,40.598v2.5742H68.3118v9.5947h7.2544v2.5743H68.3118V66.1829H78.6082v2.5743H65.27V40.598Z" />
                      <path d="M87.7386,29.5778V75.8331h77.6106V29.5778Zm21.0732,39.1794H93.8348V34.098h3.7441V65.5892h11.2329Zm7.7266,0h-3.7446V34.098h3.7446Zm15.84,0h-3.4565L120.761,34.098h3.7442l6.0967,27.459h.0962l6.0961-27.459h3.7447Zm28.5113,0h-16.417V34.098h15.8413v3.1689H148.2166V49.0755h8.9287v3.168h-8.9287V65.5892H160.89Z" />
                    </g>
                  </svg>
                </div>
                <p>{LOCAL.mainDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={'ResponsiveContainer ModernGreenBack'}>
          <div className={'Inside'}>
            <div className="ShowcasePart">
              <div className={'Text Centered'}>
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
                    data.gridG.childImageSharp.fluid.src,
                    data.gridH.childImageSharp.fluid.src,
                    data.gridI.childImageSharp.fluid.src,
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
              <div className={'Text Centered'}>
                <h2 style={{ color: 'rgb(40,40,40)' }}>
                  {LOCAL.covidProofTitle}
                </h2>
                <p>{LOCAL.covidProofDescription}</p>
              </div>
              <div className={'ImageContainer'}>
                <Img fluid={data.imageRemote.childImageSharp.fluid} alt="" />
              </div>
            </div>
          </div>
        </div>

        <h2 className={'Punchline'}>{LOCAL.events}</h2>
        <div className="home homePosts">
          <div className="postGrid">
            {posts
              .filter((post) => post.node.frontmatter.title.length > 0)
              .filter((post) => post.node.frontmatter.language === locale)
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
              .filter((post) => post.node.frontmatter.title.length > 0)
              .filter((post) => post.node.frontmatter.language === locale)
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
      ...gatImage
    }
    imageChevagny: file(relativePath: { eq: "gallery/showcase/chev.jpg" }) {
      ...gatImage
    }
    imageArt: file(relativePath: { eq: "gallery/showcase/permanent.jpg" }) {
      ...gatImage
    }
    imageRemote: file(relativePath: { eq: "gallery/showcase/remote.jpg" }) {
      ...gatImage
    }
    gridA: file(relativePath: { eq: "gallery/showcase/cn.jpg" }) {
      ...gatImage
    }
    gridB: file(relativePath: { eq: "gallery/showcase/b.jpg" }) {
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
    gridG: file(relativePath: { eq: "2020-04-01-stayhome/26v_2_webw.jpg" }) {
      ...gatImage
    }
    gridH: file(
      relativePath: { eq: "2020-03-05-spraying-board/SprayingBoard_8.jpg" }
    ) {
      ...gatImage
    }
    gridI: file(relativePath: { eq: "2019-10-20-mur/CHRD-5.jpg" }) {
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
