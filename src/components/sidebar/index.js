import { h } from 'preact';
import style from './style.scss';

export default ({ className }) => (<aside className={className}>
	<p className={style.description}>Next generation starship simulator controls.</p>
	<p className={style.description}>Made with ❤️ by Alex Anderson</p>
	<p><small><em>Want to see your name here? <a href="https://github.com/thorium-sim/thorium">Contribute!</a></em></small></p>
</aside>);
