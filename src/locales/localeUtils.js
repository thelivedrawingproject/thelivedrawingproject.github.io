import browserLang from 'browser-lang'
import { navigate } from 'gatsby-link'
import { defaultLanguage, supportedLanguages } from './locales';

export const localLink = (locale, bareboneLink) => {
  return supportedLanguages[locale].urlPrefix + bareboneLink;
}

export const languageAutoRedirect = (language, pathname) => {

  const supportedLanguagesKeys = Object.keys(supportedLanguages);

  // Skip build, Browsers only
  if (typeof window !== 'undefined')
  {

    if(language === defaultLanguage)
    {
      const userPreferedLanguage =
        window.localStorage.getItem('language') ||
        browserLang({
          languages: supportedLanguagesKeys,
          fallback: defaultLanguage,
        })

      if(userPreferedLanguage !== defaultLanguage)
      {
        const newUrl = `/${userPreferedLanguage.toLocaleLowerCase()}${pathname}`
        window.localStorage.setItem('language', userPreferedLanguage)
        navigate(newUrl);
      }
    }
  }
}