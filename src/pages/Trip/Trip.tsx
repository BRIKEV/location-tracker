import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../constants';
import Card from '../../components/Card';
import Main from '../../layouts/Main';

const Trip = () => {
  const { t } = useTranslation();
  return (
    <Main>
      <Card link={ROUTES.END_TRIP.replace(':id', 'randomid')}>
        {t('trip.end', 'Finalizar')}
      </Card>
      <hr />
      <Card type='secondary' link={ROUTES.HOME}>
        {t('trip.cancel', 'cancelar')}
      </Card>
    </Main>
  );
};

export default Trip;
