import type { Component } from "solid-js";
import { IconTypes } from "solid-icons";
import { animate } from "motion";
import { createSignal, JSX } from "solid-js";

import Editor from "./Editor";

import "./app.css";

const App: Component = () => {
  return <Editor initialIds={["1", "2", "3"]} />;
};

export default App;
