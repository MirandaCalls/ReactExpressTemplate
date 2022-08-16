import * as React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return <p>Hello World!</p>;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
