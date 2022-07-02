import { useState } from 'react';
import { PriceSelectorProps } from './PriceSelector.model';
import style from './PriceSelector.module.scss';

const numberRange = Array.from(Array(10).keys());
const numberList = [numberRange, numberRange, numberRange, [0, 5]];
const priceDefault = [0, 0, 0, 0];

const PriceSelector = ({ defaultValue = priceDefault, onChange }: PriceSelectorProps) => {
  const [values, setValues] = useState<number[]>(defaultValue);

  const handleSelection = (index: number, value: number) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
    onChange(newValues.join(''));
  };

  return (
    <div className={style.container}>
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
