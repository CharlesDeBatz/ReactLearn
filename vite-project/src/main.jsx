import { createRoot } from "react-dom/client";
import React from "react";
import {App} from "./app";

const root = document.getElementById("root");

const reactRoot = createRoot(root); // дерево react

reactRoot.render(<App />);