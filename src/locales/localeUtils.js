
import loc from './locales';

export const localLink = (locale, bareboneLink) => {
  return loc[locale].urlPrefix + bareboneLink;
}