import { createContext } from "react";

export const themes = {
  light: {
    background:"#eeeeee",
  },
  dark: {
    background:"#222222",
  }
};

export default createContext({
  background: themes.dark,
  toggleTheme: () => {}
});
