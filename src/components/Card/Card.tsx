import { CardProps } from './Card.model';
import style from './Card.module.scss';

const Card = ({ children, type, onClick }: CardProps) => (
  <div
    className={`${style.card} ${type ? style[type] : ''}`}
    role="button"
    tabIndex={0}
    onClick={onClick}
    aria-hidden="true"
  >
    {children}
  </div>
);

export default Card;
