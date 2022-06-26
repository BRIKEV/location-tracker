import { ROUTES } from '../../constants';
import Card from '../../components/Card';
import Main from '../../layouts/Main';

const Trip = () => (
  <Main>
    <Card link={ROUTES.END_TRIP}>
      Finalizar
    </Card>
    <hr />
    <Card link={ROUTES.HOME}>
      cancelar
    </Card>
  </Main>
);

export default Trip;
