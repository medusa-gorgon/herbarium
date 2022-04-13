import logo from './logo.svg';
import './App.css';
import Flowers from './components/flowers/Flowers';
import Title from './components/Title';

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <Title />
        <Flowers />
      </div>
    </div>
  );
};

export default App;
