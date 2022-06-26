import { ButtonProps } from './Button.model';
import style from './Button.module.scss';

const Button = ({ children, type = 'primary', ...rest }: ButtonProps) => (
  <button
    className={`${style.btn} ${style[type]}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
