import { h } from 'preact';

import Main from 'async!./main';
import Sidebar from 'async!./sidebar';
import Header from 'async!./header';
import Social from 'async!./social';

import style from './style.scss';

export default () =>
  <div className={style.app} id="app">
    <Header className={style.header} />
    <Sidebar className={style.sidebar} />
    <Social className={style.social} />
    <Main className={style.main} />
  </div>;
