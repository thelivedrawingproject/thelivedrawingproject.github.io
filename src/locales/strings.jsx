import React from 'react'
import { Link } from 'gatsby'
const StringEnFr = (key, en, fr) => {
  return {
    en: {
      [key]: en,
    },

    fr: {
      [key]: fr,
    },
  }
}
const stringBuilderEnFr = (arrayOfStrings) => {
  const languageFilter = (languageKey) => {
    return {
      [languageKey]: arrayOfStrings
        .map((element) => {
          return element[languageKey]
        })
        .reduce((acc, x) => {
          for (let key in x) acc[key] = x[key]
          return acc
        }, {}),
    }
  }
  const en = languageFilter('en')
  const fr = languageFilter('fr')

  return { ...en, ...fr }
}

export const indexPageStrings = stringBuilderEnFr([
  StringEnFr(
    'announcementTitle',
    "Let's Exhibit online!",
    'Exposons en ligne !'
  ),
  StringEnFr(
    'drawingCountTitle',
    "245,000 drawings from all over the world",
    '245,000 dessins reçus du monde entier'
  ),
  StringEnFr(
    'drawingCountSubtext',
    <>We receive thousands of drawings at each event. More than 50,000 participants of all ages have already drawn with us.</>,
    <>Nous recevons à chaque événement des milliers de dessins. Plus de 50,000 participants de tous les âges ont déjà dessiné avec nous.</>
  ),
  StringEnFr(
    'announcemenSubtitle',
    <>
      <strong>Gather your audience today</strong> <br />
      with our online interactive installations adapted to social distancing.
    </>,
    <>
      <strong>Rassemblez votre public dès aujourd'hui </strong> <br />à l'aide
      de nos installations interactives en ligne adaptées au contraintes
      sanitaires.
    </>
  ),
  StringEnFr('announcementLinkName', 'Tell me more', `En savoir plus`),
  StringEnFr(
    'madeInLyon',
    'Proudly made in Lyon, France',
    'Une installation conçue à Lyon, France'
  ),
  StringEnFr(
    'noPersonalData',
    'This website does not steal your personal data.',
    'Ce site internet ne vole pas vos données personnelles.'
  ),

  StringEnFr('showMoreEvents', `Show more events`, `Plus d'événements`),
  StringEnFr(
    'title',
    'The Live Drawing Project - Interactive drawing projections.',
    'The Live Drawing Project - Videoprojections participatives de dessin.'
  ),

  StringEnFr(
    'mainDescription',

    <>Interactive Drawing Projections.</>,

    <>Vidéoprojections participatives de dessin.</>
  ),

  StringEnFr(
    'yourPhoneYourCanvasTitle',
    'Draw with your phone',
    'Dessine sur ton téléphone'
  ),

  StringEnFr(
    'yourPhoneYourCanvasDescription',

    <>
      Open our website and start drawing with your fingers.<br/> Everyone draw at the same time!
    </>,

    <>
      Ouvre notre site web et dessine avec les doigts. <br/>Tout le monde dessine en même temps !
    </>
  ),

  StringEnFr(
    'joinCollabTitle',
    'Join a collaborative artwork',
    'Rejoins une oeuvre collaborative'
  ),
  StringEnFr(
    'joinCollabDescription',
    <>
      Your drawing appears{' '}
      <strong>instantly</strong> on the videoprojection. The collaborative
      canvas keeps evolving all the time. You can draw as much as you want.{' '}
      <strong>Express yourself!</strong>
    </>,

    <>
      Ton dessin apparait{' '}
      <strong>instantanément</strong> sur la vidéoprojection. L'oeuvre
      collaborative évolue en permanence. Dessine autant que tu veux.{' '}
      <strong>Exprime toi !</strong>
    </>
  ),

  StringEnFr(
    'permanentArtTitle',
    'Be part of a permanent artpiece',
    "Prend part à une oeuvre d'art permanente"
  ),

  StringEnFr(
    'permanentArtDescription',
    <>
      We design prints with all the drawings we receive. Join a{' '}
      <strong>unique and collaborative</strong> work of art. From the postcard
      to the collage mural.
    </>,
    <>
      Nous créons des illustrations avec tous les dessins reçus. Rejoins une
      oeuvre graphique <strong>unique et collaborative</strong>. De la carte
      postale au collage mural.
    </>
  ),

  StringEnFr('covidProofTitle', 'Draw From Home', 'Dessine depuis chez toi'),

  StringEnFr(
    'covidProofDescription',
    <>
      <em>Can't go out?</em>
      <br /> Join the others on our livestream and send your drawings remotely!
    </>,
    <>
      <em>Tu ne peux pas sortir?</em>
      <br /> Rejoins les autres sur le livestream et envoie tes dessins à
      distance!
    </>
  ),

  StringEnFr('goToWebsite', '> Home', '> Accueil'),
  StringEnFr(
    'clickHereToDraw',
    'Click here to draw',
    'Clique ici pour dessiner'
  ),
  StringEnFr('clickToDraw', 'Click to draw', 'Clique pour dessiner'),
  StringEnFr(
    'downloadBrochure',
    'Download brochure (English)',
    'Télécharger la brochure (Français)'
  ),
  StringEnFr(
    'downloadBrochureOtherLanguage',
    'Download brochure (French)',
    'Télécharger la brochure (Anglais)'
  ),
  StringEnFr('letsDrawTogether', "Let's Draw Together", 'Dessinons ensemble'),
  StringEnFr('goToWebsite', 'Go to website', 'Aller au site web'),

  StringEnFr('contactUs', 'Contact us', 'Nous contacter'),
  StringEnFr(
    'watchPhotos',
    'Photo & Video gallery',
    'Galerie de photos et vidéos'
  ),
  StringEnFr('moreInfos', 'More about the project', "Plus d'informations"),
  StringEnFr(
    'currentlyHappening',
    `Let's draw together!`,
    'Dessinons ensemble !'
  ),
  StringEnFr('callUs', 'Call us', 'Appelez nous'),
  StringEnFr('events', 'Events', 'Évenements'),
])

export const notFoundPage = {
  en: {
    title: `NOT FOUND`,
    subtext: `There is nothing here !`,
  },

  fr: {
    title: `PAGE NON TROUVÉE`,
    subtext: `Il n'y a rien ici !`,
  },
}

export const bookingPageStrings = stringBuilderEnFr([
  StringEnFr(
    'useCasesTitle',
    'What we do',
    'Ce que nous faisons'
  ),
  StringEnFr(
    'useCasesSubtitle',
    `Another idea? Let's talk about it!`,
    `Une autre idée ? Parlons-en !`
  ),

  StringEnFr(
    'useCases',
    [
      <>
        Lights
        <br />
        Festivals
      </>,
       <>
       Art
       <br />
       Exhibitions
     </>,
           <>
           Drawing
           <br />
           Performances
         </>,
            <>
            Architectural
            <br />
            Mappings
          </>,
      <>
        Permanent
        <br />
        Installations
      </>,
      <>
        Drawing
        <br />
        Workshops
      </>,
            <>
            Mapping
            <br />
            Workshops 
          </>,
      <>
        Collective
        <br />
        Thinking
      </>,
      <>
        Rental
        <br />
        Offers
      </>,
    ],
    [
      <>
        Fêtes des
        <br />
        Lumières
      </>,
       <>
       Expositions
       <br />
       Artistiques
     </>,
           <>
           Performances
           <br />
           de dessin
         </>,
            <>
            Mapping
            <br />
            Architectural
          </>,
      <>
        Installations
        <br />
        Permanentes
      </>,
      <>
        Ateliers
        <br />
        de Dessin 
      </>,
            <>
            Ateliers
            <br />
            Videomapping 
          </>,
      <>
        Intelligence
        <br />
        Collective
      </>,

      <>
        Offres 
        <br />
        en location
      </>,

    ]
  ),

  StringEnFr('features', 'Features', 'Fonctionnalités'),
  StringEnFr('customisableTitle', 'Tailor-made', 'Sur Mesure'),
  StringEnFr(
    'customisableText',
    <>
      From the physical installation to the visual style of the artpiece,
      we design together the best installation to engage your audience.
      <br />
      <strong>We create custom experiences for every event we make.</strong>
    </>,
    <>
      De l'installation physique au style visuel de l'oeuvre collaborative, nous concevons ensemble la meilleure installation pour engager votre audience.
      <br />
      <strong>
        Nous créons des expériences personnalisées pour chacun de nos
        événements.
      </strong>
    </>
  ),

  StringEnFr('ourValues', 'Our Values', 'Nos Valeurs'),
  StringEnFr('inclusiveValueTitle', 'Inclusive for all audiences', 'Inclure tous les publics'),
  StringEnFr('inclusiveValueText', 'By designing installations in which participating is easy and accessible.', 'En concevant des installations où la participation est simple, accessible à tous.'),
    StringEnFr('unlockValueTitle', 'Unlock talents', 'Libérer les talents'),
    StringEnFr('unlockValueText', 'With an intuitive drawing interface where everyone takes pleasure to draw whatever the skills.', 'Avec une interface de dessin intuitive où chacun prend plaisir à dessiner, quel que soit son niveau.'),
    StringEnFr('connectValueTitle', 'Connect people', 'Créer du lien'),
    StringEnFr('connectValueText', `With a collective canvas where everyone react to others' drawings, creating surprise and the desire to surprise others.`,
    `Avec une fresque collective où chacun réagit aux dessins des autres, créant la surprise et l'envie de surprendre les autres.`),
    StringEnFr('tellValueTitle', 'Tell stories', 'Raconter des histoires'),
    StringEnFr('tellValueText', 'By drawing on engaging, fun and meaningful thematics, questioning the world we live in.', 'En dessinant sur des thématiques engageantes, amusantes et riches de sens, questionnant notre monde.'),
    StringEnFr('magicValueTitle', 'Create magical moments', 'Emerveiller'),
    StringEnFr('magicValueText','With real-time interactions, compositions to make each drawing stand out, and professional illustrators performing alongside the audience.','Avec une interaction temps-réel, des compositions qui subliment chaque dessin, et la participation de dessinateurs professionnels.'),
  StringEnFr(
    'usersTitle',
    'Up to 1000+ participants at the same time',
    "Jusqu'à 1000+ participants en même temps"
  ),
  StringEnFr(
    'usersSubtext',
    <>
      With our <strong>cutting edge realtime technology</strong> we can handle
      thousands of drawers simultaneously so everyone can participate without
      waiting.
    </>,
    <>
      Avec notre <strong>technologie temps-réel dernier cri</strong> nous
      pouvons gérer des milliers de participants en même temps, pour que tout
      le monde puisse participer sans attendre.
    </>
  ),

  // TODO: add cross-location idea directly here

  StringEnFr('multilocTitle', 'Multiple Locations', 'Lieux Multiples'),
  StringEnFr(
    'multilocSubtext',
    <>
      The videoprojection can happen{' '}
      <strong>in multiple locations simultaneously</strong>. Drawings travel
      between locations letting participants exhange through drawings.
    </>,
    <>
      La vidéoprojection peut être{' '}
      <strong>dans plusieurs lieux simultanément</strong>.<br /> Les dessins
      voyagent entre les lieux, permettant aux participants d'échanger par
      l'intermédiaire des dessins.
    </>
  ),

  StringEnFr('remoteTitle', 'Works Remotely', 'Fontionne à Distance'),
  StringEnFr(
    'remoteSubtext',
    <>
      <em>Travel Restrictions? </em>
      <br /> The videoprojection can be installed and operated{' '}
      <strong>entirely remotely without us coming on site.</strong>
      <br />
      <br />
      <em>Gathering restrictions?</em>
      <br /> We <strong>livestream</strong> the event and people can also{' '}
      <strong>draw from home.</strong>
      <br />
      <br />
      <em>Lockdown?</em>
      <br />
      Invite your community to <strong>videoproject from their window.</strong> <Link to="/stayhome">See our lockdown example</Link>
      <br />
    </>,
    <>
      <em>Restrictions de voyage ? </em>
      <br /> La videoprojection peut être installée et contrôlée{' '}
      <strong>entièrement à distance sans que nous venions sur site.</strong>
      <br />
      <br />
      <em>Restrictions de rassemblement ?</em>
      <br /> Nous <strong>diffusons en direct</strong> l'événement sur les
      réseaux sociaux pour que votre public puisse aussi dessiner{' '}
      <strong>depuis la maison.</strong>
      <br />
      <br />
      <em>Confinement ?</em>
      <br />
      Invitez votre communauté à <strong>projeter depuis chez eux.</strong> {' '}
      <Link to="/fr/stayhome">Voir notre événement du dernier confinement</Link>
      <br />
    </>
  ),

  StringEnFr('userFriendlyTitle', 'User Friendly', 'Simple à utiliser'),
  StringEnFr(
    'userFriendlySubtext',
    <>
      Our drawing tool has been designed with <strong>ease of use</strong> from
      the start.
      <br />
      No need to install a dedicated app. It  works seamlessly<strong>
     {' '}on every phone{' '}
      </strong>
      through the web browser.
    </>,
    <>
      Notre outil de dessin est conçu avec <strong>la simplicité</strong> comme
      fer de lance.
      <br />
      Pas besoin d'installer d'application. L'outil marche 
      <strong> sur tous les téléphones</strong> via le navigateur internet.
    </>
  ),
  StringEnFr(
    'cellularNetworkTitle',
    'No network ? No problem.',
    'Pas de réseau ? Pas de problème.'
  ),
  StringEnFr(
    'cellularNetworkSubtext',
    <>The Live Drawing Project can run online and also offline.</>,
    <>The Live Drawing Project peut fonctionner via internet mais aussi hors ligne.</>
  ),
  StringEnFr('moderationTitle', 'Moderation', 'Modération'),
  StringEnFr(
    'moderationSubtext',
    <>
      If needed, our <strong>moderation tools</strong> gives us the capacity to
      remove any inappropriate drawing instantly and block participants
      entirely.
    </>,
    <>
      Si besoin, nos <strong>outils de modération</strong> nous permettent de
      supprimer instantanément tout dessin inapproprié, et si nécessaire, de
      bloquer des participants de façon permanente.
    </>
  ),

  StringEnFr(
    'bookingPunchline',
    <em>
      Drawing is a way to <strong>express ourselves</strong> without barriers.
    </em>,
    <em>
      Le dessin est un moyen de <strong>nous exprimer</strong> sans barrières.
    </em>
  ),

  StringEnFr(
    'bookingSubtext',
    <>
      We are a team of scenographers, engineers and artists.
      <br /> We're developping <strong>interactive</strong> installations with the audience at the core.
      <br /> <br/> <br/>
      Let's talk about your project!
    </>,
    <>
      Nous sommes une équipe de scénographes, ingénieurs et artistes.
      <br /> Nous développons des installations <strong>participatives</strong> où le public est au centre.
      <br /> <br/> <br/>
      Parlons ensemble de votre projet !
    </>
  ),

  StringEnFr('reachUs', 'Reach Us', 'Contactez Nous'),
  StringEnFr('bookingContactUs', 'Contact Us', 'Nous contacter'),
  StringEnFr(
    'downloadBrochure',
    'Download brochure (English)',
    'Télécharger la brochure (Français)'
  ),
  StringEnFr(
    'downloadBrochureOtherLanguage',
    'Download brochure (French)',
    'Télécharger la brochure (Anglais)'
  ),
  StringEnFr('bookingCallUs', 'Call us', 'Appelez nous'),
  StringEnFr('clientsTitle', 'They trust us', 'Ils nous font confiance'),
])
