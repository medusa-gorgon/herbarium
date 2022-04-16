import Flower from './flower/Flower';
import flowers from '../../data/flowers.json';
import styles from './Flowers.module.css';
import { useState } from 'react';

const Flowers = () => {
  const [isShown, setIsShown] = useState(null);
  let numberOfFlowers = 3;
  return (
    <div>
      {flowers.slice(0, numberOfFlowers).map((flower) => (
        <Flower
          key={flower.id}
          id={flower.id}
          name={flower.name}
          temperature={flower.temperature}
          humidity={flower.humidty}
          img={process.env.PUBLIC_URL + flower.img}
          color={flower.color}
          description={flower.description}
          isShown={isShown}
          setIsShown={setIsShown}
        />
      ))}
      <div className={styles.display}>{`Displaying ${numberOfFlowers} out of total ${flowers.length} flowers`}</div>
    </div>
  );
};

export default Flowers;
