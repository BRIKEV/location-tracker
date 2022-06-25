import { ROUTES } from '../../constants';
import Card from '../../components/Card';
import Main from '../../layouts/Main';

const Home = () => (
  <Main>
    <Card link={ROUTES.TRIP}>
      carrera
    </Card>
  </Main>
);

export default Home;
