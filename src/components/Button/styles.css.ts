import { style } from "@vanilla-extract/css";
import { myThemeVars } from "../../theme.css";

export const primaryButton = style({
  backgroundColor: myThemeVars.color.primary,
  color: myThemeVars.color.secondary,
  borderColor: myThemeVars.color.primary,
  borderRadius: myThemeVars.border.radius,
  padding: "0.5rem 1rem",
});

export const secondaryButton = style({
  backgroundColor: myThemeVars.color.secondary,
  color: myThemeVars.color.primary,
  borderColor: myThemeVars.color.secondary,
  borderRadius: myThemeVars.border.radius,
  padding: "0.5rem 1rem",
});
