import {useState, useEffect} from 'react';
import colors from '../../constants/colors.js';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../constants/ItemTypes';

require('./ship.scss');

function Ship(props) {
  const [{isDragging}, drag] = useDrag({
      item: {
        type: ItemTypes.SHIP,
      },
      collect: monitor => ({
        isDragging: !!monitor.isDragging()
      })
    })

  function ship() {
    let color;
    switch (props.type) {
      case 'boat':
        color = colors.yellow;
        return (
          <div className="ship-container" data-testid="ship-boat">
            <div className="ship" style={{backgroundColor: color}}>
            </div>
          </div>
        )

        break;
      case 'destroyer':
        color = colors.green;
        return (
          <div className="ship-container">
            {
              [1, 2].map((index) => (
                <div className="ship" style={{backgroundColor: color}} key={index}>
                </div>
              ))
            }
          </div>
        )
        break;
      case 'submarine':
        color = colors.blue;
        return (
          <div className="ship-container">
            {
              [1, 2, 3].map((index) => (
                <div className="ship" style={{backgroundColor: color}} key={index}>
                </div>
              ))
            }
          </div>
        )
        break;
      case 'carrier':
        color = colors.purple;
        return (
          <div className="ship-container">
            {
              [1, 2, 3, 4].map((index) => (
                <div className="ship" style={{backgroundColor: color}} key={index}>
                </div>
              ))
            }
          </div>
        )
        break;
      default:
        break;
    }
  }
  return (
    <div ref={drag}
      style={{opacity: isDragging ? 0.5 : 1,}}
    >
      {ship()}
    </div>
  )
}

export default Ship;
