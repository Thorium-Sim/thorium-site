import { h } from 'preact';
import { Router } from 'preact-router';
import Posts from 'async!../../routes/posts';
import Post from '../post';
import posts from '../../posts';
import style from './style';

export default ({ className }) => {
	const handleRoute = e => {
		const window = window || undefined;
		if (typeof window !== 'undefined') {
		  window.document.body.scrollTop = 0;
		}
		this.currentUrl = e.url;
	};
	return (<div className={className}>
		<div className={style.content}>
		  <Router onChange={handleRoute}>
		    <Posts path="/" />
		    {posts.map(p => <Post {...p} path={`/posts${p.path}`} />)}
		  </Router>
		</div>
	</div>);
};
