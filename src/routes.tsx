import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ROUTES } from './constants';
import Home from './pages/Home';
import Trip from './pages/Trip';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path={ROUTES.TRIP} element={<Trip />} />
      <Route path={ROUTES.HOME} element={<Home />} />
    </Routes>
  </Router>
);

export default AppRoutes;
