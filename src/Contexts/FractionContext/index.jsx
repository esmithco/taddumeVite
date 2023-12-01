import { useState, createContext, useEffect } from "react";
;
const FractionContext = createContext();

function FractionProvider({ children }) {
  const [buttonValue, setButtonValue] = useState(360);
  const [borderWith, setBorderWidth] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [circleColor, setCircleColor] = useState(false);
  const [activeTriangles, setActiveTriangles] = useState(new Array(buttonValue).fill(false));

  const changeColor = (index) => {
    const updatedActiveTriangles = [...activeTriangles];
    updatedActiveTriangles[index] = !updatedActiveTriangles[index];
    setActiveTriangles(updatedActiveTriangles);
  };

  // 150 = diametro / 2
  const handleButtonClick = (value) => {
    setButtonValue(360);
    setBorderWidth(0);
    setButtonWidth(0);
    setCircleColor(true);
  
    setTimeout(() => {
      const borderWidthValue = Math.tan((2 * Math.PI / value) / 2) * 149;
      const buttonWidthValue = Math.tan((Math.PI - (2 * Math.PI / value)) / 4) * 2 * borderWidthValue;
  
      setButtonValue(value);
      setBorderWidth(borderWidthValue);
      setButtonWidth(buttonWidthValue);
      setActiveTriangles(activeTriangles.fill(false));
      setCircleColor(true);
    }, 300); 
  };
  

  return (
    <FractionContext.Provider value={{
      buttonValue,
      handleButtonClick,
      borderWith,
      buttonWidth,
      changeColor,
      activeTriangles,
      circleColor,
    }}>
      {children}
    </FractionContext.Provider>
  )
};

export { FractionProvider, FractionContext };