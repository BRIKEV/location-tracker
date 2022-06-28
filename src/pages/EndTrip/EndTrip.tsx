import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { ROUTES } from '../../constants';
import Main from '../../layouts/Main';
import PriceSelector from '../../components/PriceSelector';
import Button from '../../components/Button';
import * as api from '../../repository/api';
import { getCurrentPosition } from '../../lib/location';

const EndTrip = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState<number | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const saveInfo = async () => {
    if (id && value) {
      const position = await getCurrentPosition();
      await api.endTrip(id, {
        ...position,
        price: value,
      });
      navigate(ROUTES.HOME);
    }
  };

  return (
    <Main>
      <h1>{t('endTrip.title', 'Añade el precio')}</h1>
      <PriceSelector onChange={setValue} />
      <div>
        <Button
          disabled={value === null}
          onClick={() => saveInfo()}
        >
          {t('endTrip.save', 'Guardar')}
        </Button>
        <Link to={ROUTES.HOME}>
          <Button
            type='light'
          >
            {t('endTrip.cancel', 'cancelar')}
          </Button>
        </Link>
      </div>
    </Main>
  );
};

export default EndTrip;
