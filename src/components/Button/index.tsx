import { Button as AriaButton } from "react-aria-components";
import { primaryButton, secondaryButton } from "./styles.css.ts";

export function Button(props: {
  type: "primary" | "secondary";
  children: React.ReactNode;
}) {
  const { type, ...restProps } = props;
  const buttonStyle = type === "primary" ? primaryButton : secondaryButton;
  return <AriaButton className={buttonStyle} {...restProps} />;
}
