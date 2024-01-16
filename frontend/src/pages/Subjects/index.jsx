import { AuthData } from '../../Contexts/AuthContext';
import './Subjects.css'

function Subjects() {
  const { user } = AuthData();
  return (
    <>
      <div>Hola {user.email} !</div>
    </>
  );
}

export { Subjects }