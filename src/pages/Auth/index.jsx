import { useRoutes } from 'react-router-dom';
import { LogIn } from './LogIn';
import { SignUp } from './SignUp';
import './Auth.css'

const AuthRoutes = () => {
  let routes = useRoutes([
    {path: 'login',element: <LogIn />},
    {path: 'signup',element: <SignUp />},
  ]);

  return routes;
};

function Auth() {
  return <AuthRoutes />;
}

export { Auth }