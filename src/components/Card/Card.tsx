import { Link } from 'react-router-dom';
import { CardProps } from './Card.model';
import style from './Card.module.scss';

const Card = ({ children, link }: CardProps) => (
  <Link className={style.link} to={link}>
    <div className={style.card}>
      {children}
    </div>
  </Link>
);

export default Card;
