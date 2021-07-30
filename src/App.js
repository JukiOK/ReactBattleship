import logo from './logo.svg';
import './App.scss';
import {useEffect, useState} from 'react';
import Ship from './components/Ship/Ship';
import Board from './components/Board/Board';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [selectedShip, setSelectedShip] = useState();
  const [shipsP1, setShipsP1] = useState([]);

  function handleSelectShip(type) {
    setSelectedShip(type);
  }

  function ship(value, id) {
    if(shipsP1.find(x => x.id === id)) {
      return null 
    } else {
      return (
        <div onClick={() => handleSelectShip(value)} data-testid={'ship-selected-' + value} className="ship-content">
          <Ship type={value} id={id}/>
        </div>
      )
    }    
  }

  function changeBoard(x, y, item) {
    console.log(x, y, item);
    let p1 = shipsP1.slice();
    let ship = p1.find(x => x.id == item.id);
    if(ship) {
      ship.x = x;
      ship.y = y;
    } else {
      p1.push({x, y, type: item.typeShip, id: item.id});
    }
    setShipsP1(p1);
  }

  return (
    <div className="page">
      <DndProvider backend={HTML5Backend}>
        <button>Start</button>
        <Board shipType={selectedShip} changeBoard={(x, y, item) => changeBoard(x, y, item)} shipsList={shipsP1}/>

        <div className="selection-ship-container">
          <div className="ships-container" >
            <div className="ships-row">
              {ship('boat', 1)}
              {ship('boat', 2)}
            </div>
            <div className="ships-row">
              {ship('destroyer', 3)}
              {ship('destroyer', 4)}
              {ship('destroyer', 5)}
            </div>
            <div className="ships-row">
              {ship('submarine', 6)}
              {ship('submarine', 7)}
              {ship('submarine', 8)}
            </div>
            <div className="ships-row">
              {ship('carrier', 9)}
            </div>
          </div>
          <button>Girar navio</button>
        </div>
      </DndProvider>

    </div>
  );
}

export default App;
