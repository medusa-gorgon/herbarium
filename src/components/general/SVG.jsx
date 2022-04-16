import Sprite from '../../assets/sprite.svg';
import styles from './SVG.module.css';

const SVG = ({ id, color }) => {
  return (
    <div>
      <svg role='img' className={`${styles.svg} ${color}`}>
        <use xlinkHref={`${Sprite}#${id}`} />
      </svg>
    </div>
  );
};

export default SVG;
