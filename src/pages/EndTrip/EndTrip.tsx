import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES } from '../../constants';
import Main from '../../layouts/Main';
import PriceSelector from '../../components/PriceSelector';
import Button from '../../components/Button';

const EndTrip = () => {
  const [value, setValue] = useState<number | null>(null);
  const saveInfo = () => {
    console.log(value);
  };

  return (
  <Main>
    <h1>Añade el precio</h1>
    <PriceSelector onChange={setValue} />
    <div>
      <Button
        disabled={value === null}
        onClick={() => saveInfo()}
      >
        Guardar
      </Button>
      <Link to={ROUTES.HOME}>
        <Button
          type='light'
        >
          cancelar
        </Button>
      </Link>
    </div>
  </Main>
  );
};

export default EndTrip;
