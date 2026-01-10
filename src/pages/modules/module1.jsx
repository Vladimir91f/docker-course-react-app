import { Link } from 'react-router-dom';
import Line from '../../page-elements/line';
import TestQuestion from '../../page-elements/test-question';

function Module1() {
    return (
        <>
            <h1>Модуль 1</h1>

            <Line />

            <p>Описание модуля 1</p>

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

            <Link to="/">
                ← Вернуться на главную
            </Link>
        </>
    );
}

export default Module1;
