import style from './Main.module.scss';

interface MainLayoutProps {
  children: React.ReactNode
  layout?: 'top' | 'center'
}

const Main = ({ children, layout }: MainLayoutProps) => (
  <div className={`${style.container} ${style[layout || 'top']}`}>
    {children}
  </div>
);

export default Main;
