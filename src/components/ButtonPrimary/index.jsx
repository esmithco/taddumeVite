import "./ButtonPrimary.css";

function ButtonPrimary({ text, onClick }) { 
  return (
    <button className="ButtonPrimary" onClick={onClick}>
      {text}
    </button>
  );
}

export { ButtonPrimary };
