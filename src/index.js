import "./style";
import App from "./components/app";

if (location.protocol === "http:" && location.hostname !== "localhost") {
  window.location = `https://${location.host}${location.pathname}`;
}
export default App;
