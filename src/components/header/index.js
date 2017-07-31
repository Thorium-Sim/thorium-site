import { h } from 'preact';
import style from './style.scss';
import Hexagon from './hexagon';

export default ({ className }) => (<header className={`${style.header} ${className}`}>
	<Hexagon />
	<h1>R. Alex Anderson</h1>
</header>);
