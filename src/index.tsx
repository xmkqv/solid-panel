/* @refresh reload */
import { render } from "solid-js/web";

import App from "./App";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

import { BiLogosUnity } from "solid-icons/bi";

const options = [
  {
    name: "Option 1",
    icon: BiLogosUnity,
    onClick: (e: MouseEvent) => console.log("Option 1 clicked"),
  },
  {
    name: "Two",
    onClick: (e: MouseEvent) => console.log("Option 2 clicked"),
  },
];

render(
  () => (
    <App
      options={options}
      style={{ left: "100px", top: "100px", width: "100px", height: "100px" }}
    />
  ),
  root!
);
