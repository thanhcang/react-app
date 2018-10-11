import React from 'react';
import { render } from 'react-dom';

const DEFAULT_THEME = 'light';
export const ThemeContext = React.createContext();
const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends React.Component {
  toggleTheme = evt => {
    this.setState({ theme: evt.target.checked ? 'night' : 'day' });
  };

  state = {
    theme: DEFAULT_THEME,
    toggleTheme: this.toggleTheme
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
