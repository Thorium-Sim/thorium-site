import { h } from 'preact';
import style from './style';

export default ({ className }) =>
	<div className={className}>
		<div className={style.content} />
	</div>;
