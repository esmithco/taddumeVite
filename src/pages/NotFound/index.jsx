import { NavLink } from 'react-router-dom';
import './NotFound.css'

function NotFound() {
  return (
    <>
      <div className='NotFound-div'>Pagina en construcción.
        <NavLink to='/'>
            Ir al inicio.
          </NavLink>
      </div>
    </>
  );
}

export { NotFound }