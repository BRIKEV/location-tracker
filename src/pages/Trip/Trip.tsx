import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../constants';
import Card from '../../components/Card';
import Main from '../../layouts/Main';

const Trip = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Main>
      <Card onClick={() => navigate(ROUTES.END_TRIP.replace(':id', id as string))}>
        {t('trip.end', 'Finalizar')}
      </Card>
      <hr />
      <Card type='secondary' onClick={() => navigate(ROUTES.HOME)}>
        {t('trip.cancel', 'cancelar')}
      </Card>
    </Main>
  );
};

export default Trip;
