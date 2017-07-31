import { h } from 'preact';
import Markdown from 'react-markdown';
import style from './style.scss';

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

export default ({ title, author, date, content }) =>
	<section>
		<h1 className={style.title}>
			{title}
		</h1>
		<p className={style.author}>
			{author}
		</p>
		<small>
			Posted on: {formatDate(date)}
		</small>
		<Markdown source={content} />
	</section>;
