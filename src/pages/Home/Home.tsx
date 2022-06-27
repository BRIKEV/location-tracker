import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../constants';
import Card from '../../components/Card';
import Main from '../../layouts/Main';

const Home = () => {
  const { t } = useTranslation();
  return (
    <Main>
      <Card link={ROUTES.TRIP.replace(':id', 'randomid')}>
        {t('home.run', 'Carrera')}
      </Card>
    </Main>
  );
};

export default Home;
