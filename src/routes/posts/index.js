import { h } from 'preact';
import style from './style.scss';
import posts from '../../posts';
import Nav from '../../components/nav';

import { Link } from 'preact-router/match';

function formatDate(date) {
	if (!date.getDate) {
		date = new Date(date);
	}
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'June',
		'July',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec'
	];
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	return monthNames[monthIndex] + ' ' + day + ', ' + year;
}

export default () =>
	<section>
		<Nav />
		<div className={style.container}>
		<h1>Posts</h1>
		{posts.map(p => <Post {...p} />)}
		</div>
		<div className={style.background} />
	</section>;

const Post = ({ title, author, date, path, exerpt }) =>
	<Link className={style.title} href={`/posts${path}`}>
		<div className={style.post}>
			<h3 className={style.title}>
				{title}
			</h3>
			<p className={style.author}>
				{author}
			</p>
			<small>
				Posted on: {formatDate(date)}
			</small>
		</div>
	</Link>;
