import { h } from "preact";
import { Router } from "preact-router";
import Posts from "async!./../routes/posts";
import Post from "./post";
import posts from "./../posts";
import Front from "async!./front";

// import Main from "async!./main";
// import Sidebar from "async!./sidebar";
// import Header from "async!./header";
// import Social from "async!./social";

import style from "./style.scss";

export default () => {
  const handleRoute = e => {
    const window = window || undefined;
    if (typeof window !== "undefined") {
      window.document.body.scrollTop = 0;
    }
    this.currentUrl = e.url;
  };
  return (
    <div className={style.app} id="app">
      <Router onChange={handleRoute}>
        <Front path="/" />
        <Posts path="/posts" />
        {posts.map(p => <Post {...p} path={`/posts${p.path}`} />)}
      </Router>
    </div>
  );
};


