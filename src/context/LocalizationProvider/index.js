import React from 'react';
import { DEFAULT_LOCALE } from '../../i18n';

// export const LocalizationContext = React.createContext();

export const LocalizationContext = React.createContext({
  language: DEFAULT_LOCALE, // default language is Swahili
  changeLanguage: () => null
});

class LocalizationProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: DEFAULT_LOCALE,
      changeLanguage: this.changeLanguage
    };
    // this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage = newValue => {
    this.setState({ language: newValue });
  };

  render() {
    return (
      <LocalizationContext.Provider value={this.state}>
        {this.props.children}
      </LocalizationContext.Provider>
    );
  }
}

export default LocalizationProvider;
