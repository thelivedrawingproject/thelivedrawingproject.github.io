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
    'Une installation conçue à Lyon'
  ),
  StringEnFr(
    'noPersonalData',
    'This website does not steal your personal data.',
    'Ce site internet ne vole pas vos données personnelles.'
  ),

  StringEnFr('showMoreEvents', `Show more events`, `Plus d'événements`),
  StringEnFr(
    'title',
    'The Live Drawing Project - Realtime Collaborative Drawing',
    'The Live Drawing Project - Dessin Collaboratif en Live'
  ),

  StringEnFr(
    'mainDescription',

    <>Videoprojected collaborative drawing installations.</>,

    <>installations de dessin collaboratif vidéoprojeté.</>
  ),

  StringEnFr(
    'yourPhoneYourCanvasTitle',
    'Draw with your phone',
    'Dessine sur ton téléphone'
  ),

  StringEnFr(
    'yourPhoneYourCanvasDescription',

    <>
      Open our website to start drawing. There is nothing to download. It works
      on <strong>all devices</strong> instantly.
    </>,

    <>
      Ouvre notre site web pour dessiner. Il n'y a rien à installer. Ca marche
      sur <strong>tous les appareils</strong> instantanément.
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
      When you're ready, send your drawing. It appears{' '}
      <strong>instantly</strong> on the videoprojection. The collaborative
      canvas keeps evolving all the time. You can draw as much as you want.{' '}
      <strong>Express yourself!</strong>
    </>,

    <>
      Quand tu es prêt, envoie ton dessin. Il apparait{' '}
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
    'One tool, many possibilities!',
    'Un outil, plein de possibilités !'
  ),
  StringEnFr(
    'useCasesSubtitle',
    `We can conceive together an installation for your event.`,
    `Concevons ensemble une installation pour votre événement.`
  ),

  StringEnFr(
    'useCases',
    [
      <>
        Lights
        <br />
        Festival
      </>,
      <>
        Live
        <br />
        Performance
      </>,
      <>
        Art
        <br />
        Exhibition
      </>,
      <>
        Collaborative
        <br />
        Workshop
      </>,
      <>
        Collective
        <br />
        Thinking
      </>,
      <>
        Permanent
        <br />
        Insallation
      </>,
      <>
        Team Video
        <br />
        Games
      </>,
      <>
        Corporate
        <br />
        Event
      </>,
    ],
    [
      <>
        Festival
        <br />
        Lumières
      </>,
      <>
        Performance
        <br />
        Live
      </>,
      <>
        Exposition
        <br />
        Artistique
      </>,
      <>
        Atelier
        <br />
        Participatif
      </>,
      <>
        Intelligence
        <br />
        Collective
      </>,
      <>
        Installation
        <br />
        Permanente
      </>,
      <>
        Jeu vidéo
        <br />
        en équipe
      </>,
      <>
        Événement
        <br />
        Entreprise
      </>,
    ]
  ),

  StringEnFr('features', 'Features', 'Fonctionnalités'),
  StringEnFr('customisableTitle', '100% Customisable', '100% Personnalisable'),
  StringEnFr(
    'customisableText',
    <>
      From the physical installation to the visual style of the artpiece,
      everything can be customised prior to the event to meet your needs.
      <br />
      <strong>We design custom experiences for every event we make.</strong>
    </>,
    <>
      De l'installation physique au style visuel de l'oeuvre collaborative, tout
      peut être personnalisé en amont pour répondre à vos besoins.
      <br />
      <strong>
        Nous créons des expériences personnalisées pour chacun de nos
        événements.
      </strong>
    </>
  ),

  StringEnFr(
    'usersTitle',
    'Up to 100+ participants at the same time',
    "Jusqu'à 100+ participants en même temps"
  ),
  StringEnFr(
    'usersSubtext',
    <>
      With our <strong>cutting edge realtime technology</strong> we can handle
      hundreds of drawers simultaneously so everyone can participate without
      waiting.
    </>,
    <>
      Avec notre <strong>technologie temps-réel dernier cri</strong> nous
      pouvons gérer des centaines de participants en même temps, pour que tout
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
      La vidéoprojection peut avoir lieu{' '}
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
      We can together <strong>decentralise</strong> the videoprojection accross
      your community. <Link to="/stayhome">See our lockdown example</Link>
      <br />
    </>,
    <>
      <em>Restrictions de voyage ? </em>
      <br /> La videoprojection peut être installée et contrôlée
      <strong>entièrement à distance sans que nous venions sur site.</strong>
      <br />
      <br />
      <em>Restrictions de rassemblement ?</em>
      <br /> Nous <strong>diffusions</strong> l'événement sur les réseaux
      sociaux pour que votre public puisse aussi dessiner
      <strong>depuis la maison.</strong>
      <br />
      <br />
      <em>Confinement ?</em>
      <br />
      Faisons ensemble une <strong>vidéoprojection décentralisée</strong> avec
      votre communauté.{' '}
      <Link to="/fr/stayhome">Voir notre événement du confinement</Link>
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
      No need to install a dedicated app. It <strong>
        works for everyone
      </strong>{' '}
      seamlessly, on every device, through the web browser.
    </>,
    <>
      Notre outil de dessin est conçu avec <strong>la simplicité</strong> comme
      fer de lance.
      <br />
      Pas besoin d'installer d'application. The Live Drawing Project{' '}
      <strong>marche pour tout le monde</strong> sans effort, sur tous les
      appareils, via le navigateur internet.
    </>
  ),
  StringEnFr(
    'cellularNetworkTitle',
    'No cellular network ? No problem.',
    'Pas de réseau ? Pas de problème.'
  ),
  StringEnFr(
    'cellularNetworkSubtext',
    <>The Live Drawing Project can run online or offline.</>,
    <>The Live Drawing Project peut fonctionner via internet ou hors ligne.</>
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
      <br /> We're developping tools to make people{' '}
      <strong>draw together</strong>.
    </>,
    <>
      Nous sommes une équipe de scénographes, ingénieurs et artistes.
      <br /> Nous développons des outils pour <strong>dessiner ensemble</strong>
      .
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
