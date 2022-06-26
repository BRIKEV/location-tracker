import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ROUTES } from '../../constants';
import Main from '../../layouts/Main';
import PriceSelector from '../../components/PriceSelector';
import style from './EndTrip.module.scss';

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
      <button
        className={`${style.btn} ${style.primary}`}
        disabled={value === null}
        onClick={() => saveInfo()}
      >
        Guardar
      </button>
      <Link to={ROUTES.HOME}>
        <button
          className={`${style.btn} ${style.light}`}
        >
          cancelar
        </button>
      </Link>
    </div>
  </Main>
  );
};

export default EndTrip;
