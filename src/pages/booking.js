import React from 'react';
import { Link } from 'gatsby';
import MainLayout from '../layout/MainLayout';
import SEO from '../bits/SEO/SEO';
import './index.scss';
import './basics.scss';
import './WordsCloud.scss';
import './ShowcasePage.scss';
import { bookingPageStrings, bookingPageUseCases } from '../locales/strings';
import flyerFR from './gallery/TheLiveDrawingProject_Brochure_FR.pdf';
import flyerEN from './gallery/TheLiveDrawingProject_Brochure_EN.pdf';

import techSheetEN from './gallery/LiveDrawingProject_TechnicalSheet.pdf';
import techSheetFR from './gallery/LiveDrawingProject_FicheTechnique.pdf';
import { StaticImage } from 'gatsby-plugin-image';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AllInclusiveOutlinedIcon from '@mui/icons-material/AllInclusiveOutlined';
import TouchAppOutlinedIcon from '@mui/icons-material/TouchAppOutlined';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SignalCellularOffOutlinedIcon from '@mui/icons-material/SignalCellularOffOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';


const iconContainerStyle = {display: 'flex', flexDirection: 'column', flexAlign: 'center', justifyContent: 'center', alignItems: "center" };
export default function AboutPage({
  data,
  pageContext: { langCode },
  location,
}) {
  const LOCAL = bookingPageStrings[langCode];
  const LOCAL_USE_CASES = bookingPageUseCases[langCode]['useCases'];

  return (
    <MainLayout language={langCode} location={{ ...location }}>
      <SEO title={'BOOKING'} langCode={langCode} />

      <div className={'ResponsiveContainer'}>
        <div className={'Inside'}>
          <div className="ShowcasePart">
            <h1 style={{ opacity: 0 }}>Booking</h1>
            <h2 className="Quote">{LOCAL.bookingPunchline}</h2>
            <div className={'Text Centered'}>
              <h2 style={{ color: 'white' }}>
                {LOCAL.yourPhoneYourCanvasTitle}
              </h2>
              <p style={{ color: 'white' }}>
                {LOCAL.yourPhoneYourCanvasDescription}
              </p>
            </div>
            <div className={'GatsbyImageContainer'}>
              <StaticImage
                src={'gallery/cag/web-12.jpg'}
                alt="L'équipe Live Drawing qui contrôle une projection"
                layout={'constrained'}
                objectFit={'cover'}
                placeholder={'blurred'}
              />
            </div>
            <div
              style={{
                textAlign: 'center',
                fontSize: '1.5em',
                lineHeight: 1.4,
              }}
            >
              <p>{LOCAL.bookingSubtext}</p>
            </div>
            <div className="moreProjects" style={{ marginBottom: '5em' }}>
              <Link
                to={'/contact'}
                className={'Quote'}
                style={{ fontSize: '1.5em' }}
              >
                {LOCAL.reachUs}

              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={'ShowcasePage'}>
        <div className={'ResponsiveContainer'}>
          <div className={'Inside'}>
            <div className="ShowcasePart Column">
              <h3 className="Punchline White Strong">{LOCAL.useCasesTitle}</h3>

              <div className="WordsCloud">
                <>
                  {LOCAL_USE_CASES.map((wordCloud) => {
                    return <p key={wordCloud}>{wordCloud}</p>;
                  })}
                </>
              </div>
              <p className="Subtext">
              <Link to={'/contact'} className={'Quote'}
                style={{ fontSize: '1.5em' }}>
              <em >{LOCAL.useCasesSubtitle}</em>
              </Link>
              </p>
             

            </div>
          </div>
        </div>
      </div>


      <div className={'ShowcasePage'}>
      <div className="FullPageContainer">
            <h2 className="Punchline White Strong">{LOCAL.features}</h2>
          </div>

        <div className={'Inside'} style={{
          display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start'
    }}>
         

         <div className="ThirdPageContainer">
            <h3 className="Punchline White" style={iconContainerStyle}><AllInclusiveOutlinedIcon fontSize="large"/><span style={{marginTop: '1em'}}>{LOCAL.usersTitle}</span></h3>
            <p className="Subtext">{LOCAL.usersSubtext}</p>
          </div>

          <div className="ThirdPageContainer" >
            <h3 className="Punchline White" style={iconContainerStyle}>     
            <LanguageOutlinedIcon fontSize="large"/>
            <span style={{marginTop: '1em'}}>{LOCAL.remoteTitle}</span>
            </h3>
            <p className="Subtext">{LOCAL.remoteSubtext}</p>
          </div>



 

                    
          <div className="ThirdPageContainer">
            <h3 className="Punchline White" style={iconContainerStyle}><EmojiPeopleOutlinedIcon fontSize="large"/><span style={{marginTop: '1em'}}>{LOCAL.mediationTitle}</span></h3>
            <p className="Subtext">{LOCAL.mediationSubtext}</p>
          </div>
          
          <div className="ThirdPageContainer">
            <h3 className="Punchline White" style={iconContainerStyle}><AutoFixHighOutlinedIcon fontSize="large"/><span style={{marginTop: '1em'}}>{LOCAL.performerTitle}</span></h3>
            <p className="Subtext">{LOCAL.performerSubtext}</p>
          </div>

          <div className="ThirdPageContainer">
            <h3 className="Punchline White" style={iconContainerStyle}><TouchAppOutlinedIcon fontSize="large"/><span style={{marginTop: '1em'}}>{LOCAL.userFriendlyTitle}</span></h3>
            <p className="Subtext">{LOCAL.userFriendlySubtext}</p>
          </div>
          <div className="ThirdPageContainer">
            <h3 className="Punchline White" style={iconContainerStyle}><BuildOutlinedIcon fontSize="large"/><span style={{marginTop: '1em'}}>{LOCAL.techFriendlyTitle}</span></h3>
            <p className="Subtext">{LOCAL.techFriendlySubtext}</p>
            <div className="TechSheetLinks">
            <a href={techSheetFR}>
                {'Fiche Technique (FR)'}
              </a>
              <br/>
              <a href={techSheetEN}>
                {'Technical Sheet (EN)'}
              </a>
              </div>
          </div>

          <div className="ThirdPageContainer">
            <h3 className="Punchline White" style={iconContainerStyle}><AddLocationAltOutlinedIcon fontSize="large"/><span style={{marginTop: '1em'}}>{LOCAL.multilocTitle}</span></h3>
            <p className="Subtext">{LOCAL.multilocSubtext}</p>
          </div>

          <div className="ThirdPageContainer">
            <h3 className="Punchline White" style={iconContainerStyle}><LockOutlinedIcon fontSize="large"/><span style={{marginTop: '1em'}}>{LOCAL.moderationTitle}</span></h3>
            <p className="Subtext">{LOCAL.moderationSubtext}</p>
          </div>

          <div className="ThirdPageContainer">
         
         <h3 className="Punchline White" style={iconContainerStyle}>
         <DiamondOutlinedIcon fontSize="large"/>
         <span style={{marginTop: '1em'}}>{LOCAL.customisableTitle} </span></h3>
         <p className="Subtext">{LOCAL.customisableText}</p>
       </div>

          <div className="ThirdPageContainer">
            <h3 className="Punchline White" style={iconContainerStyle}><SignalCellularOffOutlinedIcon fontSize="large"/><span style={{marginTop: '1em'}}>{LOCAL.cellularNetworkTitle}</span></h3>
            <p className="Subtext">{LOCAL.cellularNetworkSubtext}</p>
          </div>

</div>
          <br />
          <br />
          <br />

          <div className={'ShowcasePage'}>
            <div className={'ResponsiveContainer'}>
              <div className={'Inside'}>
                <div className="ShowcasePart Column">
                  <div>
                    <h2 className="Punchline White Strong">
                      {LOCAL.clientsTitle}
                    </h2>
                  </div>
                  <div className={''}>
                    <div className={'ClientsLogo'}>
                      <a
                        className={'InstitutFrancais'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://www.institutfrancais.com'}
                      />
                      <a
                        className={'Lima'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://www.alianzafrancesa.org.pe/'}
                      />
                      <a
                        className={'Embassy'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://ie.ambafrance.org/'}
                      />
                      <a
                        className={'Cci'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://www.centreculturelirlandais.com/'}
                      />

                       <a
                        className={'Ste'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://www.saint-etienne.fr/'}
                      />
                       <a
                        className={'Troyes'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://www.ville-troyes.fr/'}
                      />
                       <a
                        className={'DesBlocs'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://www.desblocs.be/'}
                      />

<a
                        className={'LaMotte'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://www.mairie-lamotteservolex.fr/'}
                      />


                      <a
                        className={'Chrd'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'http://www.chrd.lyon.fr/chrd/sections/fr/musee/'}
                      />
                      <a
                        className={'Cpl'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://copenhagenlightfestival.org'}
                      />

                      <a
                        className={'Glow'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://glowyyc.com'}
                      />

                      <a
                        className={'Bonifacio'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={
                          'https://www.bonifacio.fr/agenda-manifestation/festi-lumi/'
                        }
                      />
                      <a
                        className={'Aadn'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://aadn.org/'}
                      />
                      <a
                        className={'Pf'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'http://www.peinturefraichefestival.fr/'}
                      />

                      <a
                        className={'Superposition'}
                        target="_blank"
                        rel="noreferrer noopener"
                        href={'https://superposition-lyon.com/'}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={'ShowcasePage'}>
        <div className={'ResponsiveContainer'}>
          <div className={'Inside'}>
            <div className="ShowcasePart Column">
              <h3 className="Punchline White Strong">{LOCAL.ourValues}</h3>

              <div className="FullPageContainer">
                <h3 className="Punchline White">{LOCAL.inclusiveValueTitle}</h3>
                <p className="Subtext">{LOCAL.inclusiveValueText}</p>
              </div>

              <div className="FullPageContainer">
                <h3 className="Punchline White"> {LOCAL.unlockValueTitle}</h3>
                <p className="Subtext">{LOCAL.unlockValueText}</p>
              </div>

              <div className="FullPageContainer">
                <h3 className="Punchline White">{LOCAL.connectValueTitle}</h3>
                <p className="Subtext">{LOCAL.connectValueText}</p>
              </div>

              <div className="FullPageContainer">
                <h3 className="Punchline White">{LOCAL.tellValueTitle}</h3>
                <p className="Subtext">{LOCAL.tellValueText}</p>
              </div>

              <div className="FullPageContainer">
                <h3 className="Punchline White">{LOCAL.magicValueTitle}</h3>
                <p className="Subtext">{LOCAL.magicValueText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

          <div className="home homePosts">
            <div className="moreProjects">
              <Link to={'/contact'}>{LOCAL.bookingContactUs}</Link>
              <a href={langCode === 'fr' ? flyerFR : flyerEN}>
                {LOCAL.downloadBrochure}
              </a>
              <a href={langCode === 'fr' ? flyerEN : flyerFR}>
                {LOCAL.downloadBrochureOtherLanguage}
              </a>
            </div>
          </div>
        </div>

    </MainLayout>
  );
}
