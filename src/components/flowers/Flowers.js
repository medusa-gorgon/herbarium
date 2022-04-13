import Flower from './flower/Flower';
import flowers from '../../data/flowers.json';
import { useState } from 'react';

const Flowers = () => {
  const [isShown, setIsShown] = useState(null);
  return (
    <div>
      {flowers.map((flower) => (
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
    </div>
  );
};

export default Flowers;
