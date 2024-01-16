import { useRoutes } from 'react-router-dom';
import { AboutUs } from './AboutUs';
import { MVision } from './MVision';
import { News } from './News'
import './Us.css';

const UsRoutes = () => {
  let routes = useRoutes([
    {path: 'aboutus',element: <AboutUs />},
    {path: 'mvision',element: <MVision />},
    {path: 'news',element: <News />},
  ]);

  return routes;
};

function Us() {
  return <UsRoutes />;
}

export { Us }