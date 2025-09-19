import { style } from "@vanilla-extract/css";
import { myThemeVars } from "../../theme.css";

export const tooggleButton = style({
  backgroundColor: myThemeVars.color.secondary,
  color: myThemeVars.color.primary,
  borderColor: myThemeVars.color.primary,
  borderRadius: myThemeVars.border.radius,
  padding: "0.5rem 1rem",
  selectors: {
    "&[data-selected]": {
      backgroundColor: myThemeVars.color.primary,
      color: myThemeVars.color.secondary,
    },
  },
});
