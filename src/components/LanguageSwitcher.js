import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import locales from '../locales/locales';
import './LanguageSwitcher.scss';

class LanguageSwitcher extends React.Component {

  render() {
    // Compute current language from URL directly
    return (<div className={"Container"}>
        {this.props.availableLanguages.map(availableLanguage => {

          const baseUrl = this.props.currentUrl
            .replace(locales[this.props.currentLanguage].urlPrefix, '') // Remove language prefix
            .replace('//', '/'); // Avoid possible double slash
          return <Link to={locales[availableLanguage].urlPrefix + baseUrl}>{locales[availableLanguage].name}</Link>
        })
        }
      </div>
    )
  }

}

LanguageSwitcher.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  availableLanguages: PropTypes.array.isRequired,
  currentUrl: PropTypes.string.isRequired
}

export default LanguageSwitcher;