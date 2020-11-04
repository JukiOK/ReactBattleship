import logo from './logo.svg';
import './App.scss';
import {useEffect} from 'react';
import Ship from './components/Ship/Ship';

function App() {

  return (
    <div className="page">
      <button>Start</button>
      <button>Girar navio</button>

      <div className="ships-container" >
        <Ship type={'boat'} />
        <Ship type={'boat'} />
        <Ship type={'destroyer'} />
        <Ship type={'destroyer'} />
        <Ship type={'destroyer'} />
        <Ship type={'submarine'} />
        <Ship type={'submarine'} />
        <Ship type={'submarine'} />
        <Ship type={'carrier'}/>
      </div>
    </div>
  );
}

export default App;
