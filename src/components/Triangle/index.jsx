import { useContext, useState } from 'react';
import { FractionContext } from '../../Contexts/FractionContext';
import './Triangle.css'

function Triangle() {
  const {
    buttonValue,
    borderWith,
    buttonWidth,
    changeColor,
    activeTriangles,
    circleColor,
  } = useContext(FractionContext);

  const angles = Array.from({
    length: buttonValue 
  },
    (_, index) => index * (360 / buttonValue)
  );

  return (
    <>
      <div className='circle' style={{backgroundColor: circleColor ? 'var(--dark-blue)' : 'white'}}>
        {angles.map((angle, index) => (
          <div
            key={index}
            id={`triangle-${index}`}
            className='container-cono5'
            style={{
              borderWidth: `var(--height) ${borderWith}px 0 ${borderWith}px`,
              transform: `rotate(${angle}deg)`,
              borderTopColor: activeTriangles[index] ? 'var(--yellow)' : 'white',
            }}
          ></div>
        ))}

        {angles.map((angle, index) => (
          <div
            key={index}
            className='container'
            style={{
              transform: `rotate(${angle}deg)`,
            }}
          >
            <button
              className='container-button5'
              style={{
                width: `${buttonWidth}px`,
                height: `${buttonWidth}px`,
              }}
              onClick={() => changeColor(index)}
            >
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export { Triangle }