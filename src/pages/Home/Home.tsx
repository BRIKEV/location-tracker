import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import Card from '../../components/Card';
import Main from '../../layouts/Main';
import * as api from '../../repository/api';
import { getCurrentPosition } from '../../lib/location';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const newTrip = async () => {
    const position = await getCurrentPosition();
    const { id } = await api.newTrip(position);
    navigate(ROUTES.TRIP.replace(':id', id));
  };

  return (
    <Main>
      <Card dataCy="new-trip-button" onClick={newTrip}>
        {t('home.run', 'Carrera')}
      </Card>
    </Main>
  );
};

export default Home;
