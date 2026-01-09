import { Link } from 'react-router-dom';
import Line from '../../page-elements/line';
import TestQuestion from '../../page-elements/test-question';

function Module1() {
    return (
        <span>
            <h1>Модуль 1</h1>
            <Line />
            <h3 style={{fontWeight: 'unset'}}>Описание модуля 1</h3>

            <TestQuestion
                question="Какие из этих городов являются столицами стран?"
                options={[
                    { id: 1, text: "Париж",      correct: true  },
                    { id: 2, text: "Мадрид",     correct: true  },
                    { id: 3, text: "Барселона",  correct: false },
                    { id: 4, text: "Лиссабон",   correct: true  },
                    { id: 5, text: "Валенсия",   correct: false },
                ]}
            />

            <div style={{ marginTop: "30px" }}>
                <Link to="/" style={{ color: "#646cff", textDecoration: "none" }}>
                    <h3 style={{padding: 0, margin: 0, fontWeight: 'unset'}}>← Вернуться на главную</h3>
                </Link>
            </div>
        </span>
    );
}

export default Module1;
