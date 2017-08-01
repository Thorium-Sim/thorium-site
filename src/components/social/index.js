import { h } from 'preact';
import style from './style.scss';

const buttons = [
	{
		title: 'Twitter',
		icon: 'twitter',
		link: 'http://www.twitter.com/thoriumsim'
	},
	{
		title: 'Github',
		icon: 'github',
		link: 'https://github.com/thorium-sim/thorium'
	},
	{
		title: 'Webdev Guild',
		icon: 'code',
		link: 'https://github.com/alexanderson1993/webdev-guild'
	}
];

export default ({ className }) =>
	<div className={`${className} ${style.icons}`}>
		{buttons.map(b => <Icon {...b} />)}
	</div>;

const Icon = ({ title, icon, link }) => {
	const props = {
		href: link,
		target: '_blank',
		className: style.social,
		title
	};
	return (
		<a {...props}>
			<span className={`${style.icon} ${style[icon]}`} />
		</a>
	);
};
