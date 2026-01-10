import { Link } from 'react-router-dom';
import Line from '../page-elements/line';

function Home() {
  return (
    <div>
        <h1>Курс по основам контейнеризации с Docker</h1>

        <Line />

        <p>Данный курс состоит из следующих модулей:</p>

        <nav style={{
            marginTop: 20,
            marginBottom: 20,
            display: "flex",
            flexDirection: "column", // вертикальное направление
            alignItems: "center", // или "center" для центрирования
            gap: "15px" // расстояние между ссылками
        }}>
            <Link to="/module1">
                Модуль 1
            </Link>
            <Link to="/module1">
                Модуль 2
            </Link>
        </nav>
    </div>
  );
}

export default Home;