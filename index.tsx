import React from "react";
import ReactDOM from "react-dom/client";
import { Button, ToggleButton } from "./src/main";
import { myThemeClass } from "./src/theme.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className={myThemeClass}>
      <Button type="primary">Click me</Button>
      <br />
      <br />
      <Button type="secondary">Click me too</Button>
      <br />
      <br />
      <ToggleButton>Toggle</ToggleButton>
    </div>
  );
}

export default App;
