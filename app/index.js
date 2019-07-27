import document from "document";
import { startReact } from "./react.js";

let titleTouch = document.getElementById("title-touch");

titleTouch.onclick = function() {
  startReact();
};