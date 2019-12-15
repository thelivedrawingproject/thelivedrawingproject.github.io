import React from 'react'



const StringEnFr = (key, en, fr) => {
  return {

    en: {
      [key]: en
    },

    fr: {
      [key]: fr
    },
  }
};
const stringBuilderEnFr = (arrayOfStrings) => {


  const languageFilter = (languageKey) => {
    return {[languageKey]: arrayOfStrings.map(element => {return element[languageKey]}).reduce( (acc, x) => {
        for (let key in x) acc[key] = x[key];
        return acc;
      }, {})
    }
  }
  const en = languageFilter('en')
  const fr = languageFilter('fr')

  return {...en, ...fr };

}

export const indexPageStrings = stringBuilderEnFr(
  [
    StringEnFr('title', 'The Live Drawing Project - Realtime Collaborative Drawing', 'The Live Drawing Project - Dessin Collaboratif en Live'),

    StringEnFr('mainDescription',

      <>The Live Drawing Project is a collaborative drawing installation where everyone can draw <strong>together</strong> at the same time <strong>
        for fun, for art, to share and discover</strong>.</>,

      <>Le Live Drawing Project est une installation de dessin collaborative où l'on peut dessiner <strong>tous ensemble</strong> en même temps
        pour <strong>s'amuser, créer, partager et découvrir</strong>.</>),


    StringEnFr('yourPhoneYourCanvasTitle',
      "Your Phone, your Canvas", "Ton téléphone, ta toile"),

    StringEnFr('yourPhoneYourCanvasDescription',

      <>Load our web page to start drawing. There is nothing to install. It works on <strong>all devices</strong> instantly, with or without internet.</>,

      <>Charge notre page web pour dessiner. Il n'y a rien à installer. ça marche sur <strong>tous les appareils</strong> instantanément, avec ou sans internet.</>,

    ),

    StringEnFr('joinCollabTitle', 'Join a collaborative artwork', 'Rejoins une oeuvre collaborative'),
    StringEnFr('joinCollabDescription',
      <>When you're ready, send your drawing. It appears <strong>instantly</strong> on the collaborative canvas. The
        artpiece keeps evolving all the time. You can draw as much as you want. <strong>Express yourself !</strong></>,

      <>Quand tu es prêt, envoie ton dessin. Il apparait <strong>instantanément</strong> sur le tableau collaboratif.
        L'oeuvre d'art évolue en permanence. Dessine autant que tu veux. <strong>Exprime toi !</strong></>

    ),

    StringEnFr('permanentArtTitle', 'Be part of a permanent artpiece', "Prend part à une oeuvre d'art permanente"),

    StringEnFr('permanentArtDescription',
      <>We design prints with all the drawings we receive. Join a <strong>unique and collaborative</strong> work of art. From the postcard to the collage mural.</>,
      <>Nous créons des illustrations avec tous les dessins reçus. Rejoins une oeuvre graphique <strong>unique et collaborative</strong>. De la carte postale au collage mural.</>),

    StringEnFr('goToWebsite', '> Home', '> Accueil'),
    StringEnFr('clickHereToDraw', 'Click here to draw', 'Clique ici pour dessiner'),
    StringEnFr('downloadBrochure', 'Download brochure (English)', "Télécharger la brochure (Français)"),
    StringEnFr('downloadBrochureOtherLanguage', 'Download brochure (French)', "Télécharger la brochure (Anglais)"),
    StringEnFr('letsDrawTogether', "Let's Draw Together", "Dessinons ensemble"),
    StringEnFr('goToWebsite', "Go to website", "Aller au site web"),

    StringEnFr('useCasesTitle', 'One tool, many possibilities', 'Un outil, plein de possibilités'),
    StringEnFr('useCases',
      [
        "Art exhibitions",
        "Event Animations",
        "Live Performances",
        "Workshops for children and grown-ups",
        "Collective Thinking",
        "Light Festivals",
        "Interactive Shop Windows",
        "Team Video Games",
        "And much more !"
      ], [
        "Expositions Artistiques",
        "Animations",
        "Performances en Live",
        "Ateliers pour petits et grands",
        "Intelligence Collective",
        "Festivals de Lumières",
        "Vitrines interactives",
        "Jeux vidéos en équipe",
        "Et bien plus !"
      ]),


    StringEnFr('clientsTitle', 'They trust us', 'Ils nous font confiance'),
    StringEnFr('contactUs', 'Contact us', 'Nous contacter'),
    StringEnFr('watchPhotos', "Photo & Video gallery", "Gallerie de photos et vidéos"),
      StringEnFr('moreInfos', "More about the project", "Plus d'informations"),
      StringEnFr('currentlyHappening', 'Curently Happening', 'En ce moment'),
      StringEnFr('callUs', 'Call us', 'Appelez nous')
  ]
)


export const notFoundPage = {

  en: {
    title:`NOT FOUND`,
    subtext:`There is nothing here !`
  },

  fr: {
    title:`PAGE NON TROUVÉE`,
    subtext:`Il n'y a rien ici !`
  }
}

export const bookingPageStrings = stringBuilderEnFr(
  [
    StringEnFr('features', "Features", 'Fonctionnalités'),
    StringEnFr("customisableTitle", "100% Customisable", '100% Personnalisable'),
    StringEnFr("customisableText", <>From the physical installation to the visual style of the artpiece,
        everything can be customised prior to the event to meet your needs.<br/>
        <strong>We design custom experiences for every event we make.</strong></>,
      <>De l'installation physique au style visuel de l'oeuvre collaborative,
        tout peut être personnalisé en amont pour répondre à vos besoins.<br/>
        <strong>Nous créons des expériences personnalisées pour chacun de nos événements.</strong></>),

    StringEnFr("usersTitle", "Up to 100+ Users at the same time", "Jusqu'à 100+ Utilisateurs en même temps"),
    StringEnFr("usersSubtext", <>With our <strong>cutting edge realtime technology</strong> we can handle hundreds of drawers simultaneously with no lag of any sort.</>,
      <>Avec notre <strong>technologie temps-réel dernier cri</strong> nous pouvons gérer des centaines d'utilisateurs en même temps sans ralentissements.</>),
    StringEnFr("userFriendlyTitle","User Friendly", "Simple à utiliser"),
    StringEnFr("userFriendlySubtext",
      <>Our tool has been designed with <strong>ease of use</strong> from the start.<br/>
        No need to install a dedicated app. It <strong>works for everyone</strong> seamlessly, on every Android and Apple devices, through the web browser.</>,
      <>Notre outil est conçu avec <strong>la simplicité</strong> comme fer de lance.<br/>
        Pas besoin d'installer d'application. The Live Drawing Project <strong>marche pour tout le monde</strong> sans effort, sur tous les appareils Android et Apple, via le navigateur internet.</>,
    ),
    StringEnFr("cellularNetworkTitle", "No cellular network ? No problem.", "Pas de réseau ? Pas de problème."),
    StringEnFr("cellularNetworkSubtext", <>The Live Drawing Project can run online or offline, depending on your needs.</>,
      <>The Live Drawing Project peut fonctionner via Internet ou hors ligne, en fonction de vos besoins.</>),
    StringEnFr("moderationTitle", "Keep control", "Gardez le contrôle"),
    StringEnFr("moderationSubtext", <>Collaborative creation can lead to inappropriate behaviours.<br/>
        Our <strong>moderation tools</strong> gives us the capacity to remove any inappropriate drawing instantly, and if needed to blacklist users entirely.</>,
      <>La création collaborative peut pousser certains à des comportement inappropriés.<br/>
        Nos <strong>outils de modération</strong> nous permettent de supprimer instantanément tout dessin inapproprié, et si nécessaire, de bloquer des utilisateurs de façon permanente.</>,),
    
    StringEnFr("bookingPunchline", <em>Let's create something <strong>together</strong></em>,<em>Créons quelque chose <strong>ensemble</strong></em>),

    StringEnFr('bookingSubtext', <>Drawing is a way to <strong>express ourselves</strong> without barriers.<br/>
      We're a team of scenographers, engineers and artists willing to make people <strong>draw together</strong>.
    </>, <>Le dessin est un moyen de <strong>nous exprimer</strong> sans barrières.<br/>
      Nous sommes une équipe de scénographes, ingénieurs et artistes. Nous développons des outils pour <strong>dessiner ensemble</strong>.
    </> ),

    StringEnFr("events", "Events", "Évenements"),
    StringEnFr("reachUs", "Reach Us", "Contactez Nous"),
    StringEnFr('bookingContactUs', 'Contact Us', 'Nous contacter'),
    StringEnFr('downloadBrochure', 'Download brochure (English)', "Télécharger la brochure (Français)"),
    StringEnFr('downloadBrochureOtherLanguage', 'Download brochure (French)', "Télécharger la brochure (Anglais)"),
    StringEnFr('bookingCallUs', 'Call us', 'Appelez nous')
  ]
);
