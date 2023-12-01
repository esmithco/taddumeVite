import { useRoutes } from 'react-router-dom';
import { Fractions1 } from './Fractions1';
import './Activities.css'

const ActivitiesRoutes = () => {
  let routes = useRoutes([
    { path: 'fractions1', element: <Fractions1 /> },
  ]);

  return routes;
};

function Activities() {
  return <ActivitiesRoutes />;
}

export { Activities }