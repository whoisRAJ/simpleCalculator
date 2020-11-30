import React from 'react';
import { operators, specialOperators } from '../../utils/constants'
export default ({ onButtonClick, buttonKey}) => {
  let handleClick = (e) => { onButtonClick(e.target.textContent) }  //it will click and target operators and specloperators
  let classNames = [
    'btn',
    operators.includes(buttonKey) ? 'btn--blue ' : '',
    specialOperators.includes(buttonKey) ? 'btn--white' : '',
    buttonKey === '=' ? 'btn--equal': ''
  ];


  return (
    <button
      name={buttonKey}
      className={ classNames.join(' ').trim()}
      onClick={handleClick}
    >
      { buttonKey }
    </button>
  );
}