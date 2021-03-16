import React, { useState, useEffect } from 'react';
import Square from '../Square/Square';
import colors from '../../constants/colors.js';

require('./board.scss');

export default function Board(props) {

  const [type, setType] = useState('');
  const {shipsList, shipType} = props;

  useEffect(() => {
    setType(shipType);
  }, [shipType])

  const colorsObj = {
    'boat': colors.yellow,
    'destroyer': colors.green,
    'submarine': colors.blue,
    'carrier': colors.purple,
  }



  return (
    <div className="board-container">
      {
        [1,2,3,4,5,6,7,8,9,10].map((indLine) => (
          <div key={indLine} style={{display: 'flex'}}>
            {
              [1,2,3,4,5,6,7,8,9,10].map((indCol) => {
                  if(shipsList && shipsList[0].x === indLine && shipsList[0].y === indCol) {
                    return (
                      <Square key={indCol} color={colorsObj[type]}/>
                    )
                  } else {
                    return (
                      <Square key={indCol}/>
                    )
                  }
                }
              )
            }
          </div>
        ))
      }
    </div>
  )
}
