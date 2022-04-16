import styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.titleBlock}>
      <h1 className={styles.title}>Your Herbarium</h1>
    </div>
  );
};

export default Title;
