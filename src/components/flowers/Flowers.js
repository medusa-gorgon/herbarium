import Flower from './flower/Flower';
import flowers from '../../data/flowers.json';
import styles from './Flowers.module.css';
import { useState } from 'react';

const Flowers = () => {
  const [isShown, setIsShown] = useState(null);

  const toggleDesc = (id) => {
    if (isShown === null) {
      setIsShown(id);
    } else if (isShown !== null && isShown !== id) {
      setIsShown(id);
    } else if (isShown === id) {
      setIsShown(null);
    }
  };

  let numberOfFlowersShown = 3;

  const shownFlowers = flowers.slice(0, numberOfFlowersShown).sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      {shownFlowers.map((flower) => (
        <Flower
          key={flower.id}
          id={flower.id}
          name={flower.name}
          temperature={flower.temperature}
          humidity={flower.humidty}
          img={`${process.env.PUBLIC_URL}${flower.img}`}
          color={flower.color}
          description={flower.description}
          isShown={isShown}
          toggleDesc={toggleDesc}
        />
      ))}
      <div
        className={styles.display}
      >{`Displaying ${numberOfFlowersShown} out of total ${flowers.length} flowers`}</div>
    </div>
  );
};

export default Flowers;
