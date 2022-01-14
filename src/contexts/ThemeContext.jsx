import React, { createContext } from "react";

export const ThemeContext = createContext();

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDarkMode: true };
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, tastesLickChicken: true }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
