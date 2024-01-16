import { useRoutes } from 'react-router-dom';
import { Fractions1 } from './Fractions1';
import './Activities.css'
import { useEffect } from 'react';
import { FractionProvider } from '../../Contexts/FractionContext';

const ActivitiesRoutes = () => {
  let routes = useRoutes([
    { path: 'fractions1', element: <Fractions1 /> },
  ]);

  return routes;
};

function Activities() {

  useEffect(() => {
    document.title = 'Taddume | Actividades'
  }, []);

  return (
    <FractionProvider>
      <ActivitiesRoutes />
    </FractionProvider>
)}

export { Activities }