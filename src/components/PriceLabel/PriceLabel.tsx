import { PriceLabelProps } from './PriceLabel.model';
import style from './PriceLabel.module.scss';

const priceDefault = ['0', '0', '0', '0'];

const PriceLabel = ({ values = priceDefault }: PriceLabelProps) => (
  <div className={style.amount} data-cy="price-label">
    {values.slice(0, 2).map((value, index) => (
      <span key={`${value}-${index}`}>{value}</span>
    ))}
    <span>,</span>
    {values.slice(2, 4).map((value, index) => (
      <span key={`${value}-${index}`}>{value}</span>
    ))} €
  </div>
);

export default PriceLabel;
