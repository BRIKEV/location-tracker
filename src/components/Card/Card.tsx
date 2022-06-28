import { CardProps } from './Card.model';
import style from './Card.module.scss';

const Card = ({
  dataCy, children, type, onClick,
}: CardProps) => (
  <div
    className={`${style.card} ${type ? style[type] : ''}`}
    data-cy={dataCy}
    role="button"
    tabIndex={0}
    onClick={onClick}
    aria-hidden="true"
  >
    {children}
  </div>
);

export default Card;
