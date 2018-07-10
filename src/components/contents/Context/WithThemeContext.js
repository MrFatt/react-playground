import React from "react";
import ThemeContext from "./ThemeContext";

//HOC
export default Component => {
  return props => (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <Component
          {...props}
          style={{ backgroundColor: theme.background }}
          onClick={toggleTheme}
        />
      )}
    </ThemeContext.Consumer>
  );
};
