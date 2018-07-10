import React from "react";
import ThemeContext, { themes } from "./ThemeContext";
import Content from "./Content";

export default class Context extends React.PureComponent {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark
      }));
    };

    this.state = {
      theme: {
        background: themes.dark,
      },
      toggleTheme: this.toggleTheme
    };
  }


  render() {
    return (
      <div>
        <h3> Context API </h3>
        {/*Better use this.state as value of ContextAPI, to reduce the unnecessary re-render*/}
        <ThemeContext.Provider value={this.state}>
          <Content/>
        </ThemeContext.Provider>
      </div>
    );
  }
}
