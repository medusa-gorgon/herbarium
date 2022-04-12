import logo from './logo.svg';
import './App.css';
import Flower from './components/flower/Flower';

function App() {
  return (
    <div className='App'>
      <h1>Your Herbarium</h1>
      <Flower name='Tulip' t='26.5°C' humidity='53.0%' img={process.env.PUBLIC_URL + 'images/tulip.png'} color='pink' />
    </div>
  );
}

export default App;
