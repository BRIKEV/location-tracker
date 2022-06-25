import style from './Home.module.scss';
import Card from '../../components/Card';

const Home = () => (
  <div className={style.container}>
    <Card link="/init">
      carrera
    </Card>
  </div>
);

export default Home;
