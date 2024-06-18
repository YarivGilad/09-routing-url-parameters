import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "./styles/reset.css.ts";
import { App } from "./view/app.tsx";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
