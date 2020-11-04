import {useState, useEffect} from 'react';
import colors from '../../constants/colors.js';

require('./ship.scss');

function Ship(props) {
  let color;
  switch (props.type) {
    case 'boat':
      color = colors.yellow;
      break;
    case 'destroyer':
      color = colors.green;
      break;
    case 'submarine':
      color = colors.blue;
      break;
    case 'carrier':
      color = colors.purple;
    default:

  }
  return (
    <div className="ship" style={{backgroundColor: color}}>

    </div>
  )
}

export default Ship;
