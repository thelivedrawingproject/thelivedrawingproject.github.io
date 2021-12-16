import React from 'react';
import { Link, graphql } from 'gatsby';
import MainLayout from '../layout/MainLayout';
import SEO from '../bits/SEO/SEO';
import { indexPageStrings } from '../locales/strings';
import PostGridFlat from '../bits/PostGridFlatTLDP/PostGridFlat';
import './index.scss';
import './basics.scss';
import './ShowcasePage.scss';

const numberOfEventsToShow = 6;
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
};

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
                <Link to={onlineModeLink[langCode].path}>
                  {onlineModeLink[langCode].name}
                </Link>
              </div>
            </div>
          </div>
        </div>

        */
export default function Events({ data, pageContext: { langCode }, location }) {
  const LOCAL = indexPageStrings[langCode];
  const posts = data.allMdx.edges;
  const localesOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <MainLayout language={langCode} location={{ ...location }}>
      <SEO title={'Events'} langCode={langCode} />

      <div className={'ShowcasePage'}>
      


        <h2 className={'Punchline'}>{LOCAL.events}</h2>
        <div className="home homePosts">
          <PostGridFlat
            posts={posts
              .filter((post) => post.node.frontmatter.title.length > 0)
              .filter((post) => post.node.frontmatter.language === langCode)
              .filter((post, index) => {
                return index < numberOfEventsToShow;
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
                let t = document.getElementById('oldEvents');
                t.style.display = '';
                let d = document.getElementById('showAllEventsButton');
                d.style.display = 'none';
              }}
            >
              {LOCAL.showMoreEvents}
            </button>
          </div>
          <div className="postGrid" id="oldEvents" style={{ display: 'none' }}>
            <PostGridFlat
              posts={posts
                .filter((post) => post.node.frontmatter.title.length > 0)
                .filter((post) => post.node.frontmatter.language === langCode)
                .filter((post, index) => {
                  return numberOfEventsToShow <= index;
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
  );
}

export const eventPageQuery = graphql`
  query EventsQuery {
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
      ...modernGatImage
    }
    imageChevagny: file(relativePath: { eq: "gallery/showcase/chev.jpg" }) {
      ...modernGatImage
    }
    imageArt: file(relativePath: { eq: "gallery/showcase/permanent.jpg" }) {
      ...modernGatImage
    }
    imageRemote: file(relativePath: { eq: "gallery/showcase/remote.jpg" }) {
      ...modernGatImage
    }
    gridA: file(relativePath: { eq: "gallery/showcase/cn.jpg" }) {
      ...modernGatImage
    }
    gridB: file(relativePath: { eq: "gallery/showcase/b.jpg" }) {
      ...modernGatImage
    }
    gridC: file(relativePath: { eq: "gallery/showcase/glow1.jpg" }) {
      ...modernGatImage
    }
    gridD: file(relativePath: { eq: "gallery/showcase/glow2.jpg" }) {
      ...modernGatImage
    }
    gridE: file(relativePath: { eq: "gallery/showcase/chev0.jpg" }) {
      ...modernGatImage
    }
    gridF: file(relativePath: { eq: "gallery/showcase/chev.jpg" }) {
      ...modernGatImage
    }
    gridG: file(relativePath: { eq: "2020-04-01-stayhome/26v_2_webw.jpg" }) {
      ...modernGatImage
    }
    gridH: file(
      relativePath: { eq: "2020-03-05-spraying-board/SprayingBoard_8.jpg" }
    ) {
      ...modernGatImage
    }
    gridI: file(relativePath: { eq: "2019-10-20-mur/CHRD-5.jpg" }) {
      ...modernGatImage
    }
    allMdx(
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
            endDate(formatString: "MMMM DD, YYYY")
            path
            category
            subtitle
            language
            image {
              childImageSharp {
                gatsbyImageData(height: 500, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
