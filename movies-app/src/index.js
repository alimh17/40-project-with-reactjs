import { createRoot } from "react-dom/client";
import App from "./App";

import "../public/style/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/scss/navigation";
import "swiper/css";
import { StrictMode } from "react";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
