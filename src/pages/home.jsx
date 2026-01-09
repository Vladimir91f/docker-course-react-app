import { Link } from 'react-router-dom';
import Line from '../page-elements/line';

function Home() {
  return (
    <div>
        <h1>Курс по основам контейнеризации с Docker</h1>
        <Line />
        <h3 style={{fontWeight: 'unset'}}>Данный курс состоит из следующих модулей:</h3>
        <nav style={{
            display: "flex",
            flexDirection: "column", // вертикальное направление
            alignItems: "center", // или "center" для центрирования
            gap: "15px" // расстояние между ссылками
        }}>
            <Link to="/module1" style={{ color: "#646cff" }}>
                <h3 style={{padding: 0, margin: 0, fontWeight: 'unset'}}>Модуль 1</h3>
            </Link>
            <Link to="/module1" style={{ color: "#646cff" }}>
                <h3 style={{padding: 0, margin: 0, fontWeight: 'unset'}}>Модуль 2</h3>
            </Link>
        </nav>
    </div>
  );
}

export default Home;