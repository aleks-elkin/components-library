import { createTheme } from "@vanilla-extract/css";

export const [myThemeClass, myThemeVars] = createTheme({
  color: {
    primary: "#00615F",
    secondary: "#C8D0D0",
  },
  border: {
    radius: "1rem",
  },
});
