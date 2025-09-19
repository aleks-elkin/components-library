import { ToggleButton as AriaToggleButton } from "react-aria-components";
import { tooggleButton } from "./styles.css.ts";

export function ToggleButton(props: { children: React.ReactNode }) {
  return <AriaToggleButton className={tooggleButton} {...props} />;
}
