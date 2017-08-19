import { h } from "preact";
import style from "./style.scss";

export default () =>
  <footer className={style.footer}>
    <span className={style.copyright}>
      © 2017 &nbsp;<a href="https://fyreworks.us">Fyreworks LLC.</a>
    </span>
    <span className={style.bar}> | </span>
    <span className={style.attribution}>Made with ❤️ by Alex Anderson</span>
  </footer>;
