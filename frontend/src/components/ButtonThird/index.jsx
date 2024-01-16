import './ButtonThird.css';

function ButtonThird({ text, onClick }) { 
  return (
    <button className='ButtonThird' onClick={onClick}>
      {text}
    </button>
  );
}

export { ButtonThird };
