import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.scss";

export default ({top = 0}) =>
  <nav className={style.nav} style={{transform: `translateY(${top}px)`}}>
    <div className={style.container}>
      <Link href="/">
        <img src="/assets/logo.png" className={style.logo} draggable="false" />
      </Link>
      <Link href="/">
        <h1>Thorium</h1>
      </Link>
      <div className={style.spacer} />
      <Link href="/">
        <h2>Download</h2>
      </Link>
      <Link href="/posts/">
        <h2>Updates</h2>
      </Link>
    </div>
  </nav>;
