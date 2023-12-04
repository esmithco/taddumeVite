import { useRoutes, HashRouter as BrowserRouter } from 'react-router-dom';
import { FractionProvider } from '../../Contexts/FractionContext';
import { Home } from '../Home';
import { Curiosities } from '../Curiosities';
import { Activities } from '../Activities';
import { Subjects } from '../Subjects';
import { Us } from '../Us';
import { Auth } from '../Auth';
import { NotFound } from '../NotFound';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/curiosities', element: <Curiosities /> },
    { path: '/activities/*', element: <Activities /> },
    { path: '/subjects', element: <Subjects /> },
    { path: '/us/*', element: <Us /> },
    { path: '/auth/*', element: <Auth /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <BrowserRouter basename='taddume.com/'>
      <FractionProvider>
        <AppRoutes />
      </FractionProvider>
    </BrowserRouter>
  );
}

export { App }