import styles from './Flower.module.css';
import SVG from '../SVG';

function Flower({ name, t, humidity, img, color }) {
  return (
    <div className={`${styles.flower} ${color}`}>
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <div className='description'>
          <div className={styles.block}>
            <SVG id='temperature' color={color} />
            <span>{t}</span>
          </div>
          <div className={styles.block}>
            <SVG id='humidity' color={color} />
            <span>{humidity}</span>
          </div>
        </div>
        <div>
          <img className={styles.img} src={img} alt={name} />
        </div>
      </div>
    </div>
  );
}

export default Flower;
