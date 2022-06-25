import style from './Main.module.scss';

interface MainLayoutProps {
  children: React.ReactNode
}

const Main = ({ children }: MainLayoutProps) => (
  <div className={style.container}>
    {children}
  </div>
);

export default Main;
