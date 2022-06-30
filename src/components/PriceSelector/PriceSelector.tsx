import { useState } from 'react';
import { PriceSelectorProps } from './PriceSelector.model';
import style from './PriceSelector.module.scss';

const numberRange = Array.from(Array(10).keys());
const numberList = [numberRange, numberRange, numberRange, numberRange];
const priceDefault = [0, 0, 0, 0];

const PriceSelector = ({ defaultValue = priceDefault, onChange }: PriceSelectorProps) => {
  const [values, setValues] = useState<number[]>(defaultValue);

  const handleSelection = (index: number, value: number) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
    onChange(+newValues.join(''));
  };

  return (
    <div className={style.container}>
      <div className={style.amount}>
        {values.slice(0, 2).map((value, index) => (
          <span key={`${value}-${index}`}>{value}</span>
        ))}
        <span>,</span>
        {values.slice(2, 4).map((value, index) => (
          <span key={`${value}-${index}`}>{value}</span>
        ))} €
      </div>
      <div data-cy="price-selector" className={style.listContainer}>
        {numberList.map((list, listKey) => (
          <ul key={listKey}>
            {list.map((number, numberKey) => (
              <li key={`${number}-${numberKey}`}>
                <button onClick={() => handleSelection(listKey, number)}>{number}</button>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PriceSelector;
