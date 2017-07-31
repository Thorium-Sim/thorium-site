import { h } from 'preact';
import style from './hexagon.scss';

export default ({ className }) => (<div className={style.hexagon}>
	<div className={style.hexagonin1}>
	  <div className={style.hexagonin2} />
	</div>
</div>);

