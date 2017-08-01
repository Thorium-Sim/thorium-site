import { h } from 'preact';
import style from './style.scss';
import { Link } from 'preact-router/match';

export default ({ className }) => (<header className={`${style.header} ${className}`}>
	<Link href="/">
		<img draggable="false" src={require('./logo.png')} className={style.logo} />
		<h1>Thorium</h1>
	</Link>
	<h2><a href="https://twitter.com/thoriumsim"><em>@thoriumsim</em></a></h2>
</header>);
