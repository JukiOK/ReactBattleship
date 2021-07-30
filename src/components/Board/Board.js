import React, { useState, useEffect } from 'react';
import Square from '../Square/Square';
import colors from '../../constants/colors.js';
import Ship from '../Ship/Ship';

require('./board.scss');

export default function Board(props) {

  const [type, setType] = useState('');
  const {shipsList, shipType, changeBoard} = props;

  useEffect(() => {
    setType(shipType);
  }, [shipType])

  return (
    <div className="board-container">
      {
        shipsList.map((ship) => {
          let posX = ship.x * 40;
          let posY = ship.y * 40;
          return (
            <div style={{position: 'absolute', top: posX, left: posY}}>
              <Ship type={ship.type} id={ship.id} key={ship.id} />
            </div>
          )
        })
      }
      {
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((indLine) => (
          <div key={indLine} style={{display: 'flex'}}>
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((indCol) => {                    
                return (
                  <Square key={indCol} x={indLine} y={indCol} changeBoard={(x, y, item) => changeBoard(x, y, item)}/>
                )
              })
            }
          </div>
        ))
      }
      
    </div>
  )
}
