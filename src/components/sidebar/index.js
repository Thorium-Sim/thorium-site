import { h } from 'preact';
import style from './style.scss';

export default ({ className }) => (<aside className={className}>
	<p className={style.description}>Student. Husband. Spaceship enthusiast.</p>
	<p className={style.description}>I get my kicks building spaceship simulator control software with integration to hardware, lighting, sounds, video, etc. Fan of JavaScript and IoT.</p>
</aside>);
