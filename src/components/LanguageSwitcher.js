import React from 'react';
import PropTypes from 'prop-types'
import { Link, navigate } from 'gatsby'
import locales from '../locales/locales';

class LanguageSwitcher extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    // Compute current language from URL directly
    return (<>
        {this.props.availableLanguages.map(availableLanguage => {

          const baseUrl = this.props.currentUrl.replace(locales[this.props.currentLanguage].urlPrefix, '');
          return <Link to={locales[availableLanguage].urlPrefix + baseUrl}>{locales[availableLanguage].name}</Link>
        })
        }
      </>
    )
  }

}

LanguageSwitcher.propTypes = {
  currentLanguage: PropTypes.string.isRequired,
  availableLanguages: PropTypes.array.isRequired,
  currentUrl: PropTypes.string.isRequired
}


export default LanguageSwitcher;