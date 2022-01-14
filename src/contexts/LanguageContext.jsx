import { ThreeSixty } from "@material-ui/icons";
import React, { createContext } from "react";

export const LanguageContext = createContext();

export class LanguageProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { language: "french" };
    this.changeLanguage = this.changeLanguage.bind(this);
  }
  changeLanguage(evt) {
    this.setState({ language: evt.target.value });
  }
  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, changeLanguage: this.changeLanguage }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
