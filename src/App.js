import logo from './logo.svg';
import './App.scss';
import {useEffect, useState} from 'react';
import Ship from './components/Ship/Ship';
import Board from './components/Board/Board';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [selectedShip, setSelectedShip] = useState();

  function handleSelectShip(type) {
    setSelectedShip(type);
  }

  function ship(value) {
    return (
      <div onClick={() => handleSelectShip(value)} data-testid={'ship-selected-' + value} className="ship-content">
        <Ship type={value} />
      </div>
    )
  }

  return (
    <div className="page">
      <DndProvider backend={HTML5Backend}>
        <button>Start</button>
        <Board shipType={selectedShip}/>

        <div className="selection-ship-container">
          <div className="ships-container" >
            <div className="ships-row">
              {ship('boat')}
              {ship('boat')}
            </div>
            <div className="ships-row">
              {ship('destroyer')}
              {ship('destroyer')}
              {ship('destroyer')}
            </div>
            <div className="ships-row">
              {ship('submarine')}
              {ship('submarine')}
              {ship('submarine')}
            </div>
            <div className="ships-row">
              {ship('carrier')}
            </div>
          </div>
          <button>Girar navio</button>
        </div>
      </DndProvider>

    </div>
  );
}

export default App;
