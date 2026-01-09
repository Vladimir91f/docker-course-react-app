import { useState, useEffect } from 'react';
import './test-question.css';

const TestQuestion = ({ 
  question = "Вопрос не указан", 
  options = [] 
}) => {
  const [selected, setSelected] = useState([]);
  const [checked, setChecked] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);

  // Функция перемешивания массива (Fisher-Yates)
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Перемешиваем при первой загрузке и при каждом сбросе
  useEffect(() => {
    setShuffledOptions(shuffleArray(options));
  }, [options]); // зависимость от исходного массива options

  const toggle = (id) => {
    if (checked) return;
    setSelected(prev =>
      prev.includes(id)
        ? prev.filter(x => x !== id)
        : [...prev, id]
    );
  };

  const handleCheck = () => setChecked(true);

  const handleReset = () => {
    setSelected([]);
    setChecked(false);
    setShuffledOptions(shuffleArray(options)); // ← вот здесь происходит перемешивание
  };

  const isCorrect = () => {
    if (!options.length) return false;
    
    const correctIds = options
      .filter(opt => opt.correct)
      .map(opt => opt.id);
    
    return (
      selected.length === correctIds.length &&
      selected.every(id => correctIds.includes(id))
    );
  };

  return (
    <div className="test">
      <h2>{question}</h2>

      <div className="options">
        {shuffledOptions.map(opt => {
          const isSelected = selected.includes(opt.id);
          let status = '';

          if (checked) {
            if (opt.correct) status = 'correct';
            else if (isSelected) status = 'wrong';
          }

          return (
            <label key={opt.id} className={`option ${status}`}>
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => toggle(opt.id)}
                disabled={checked}
              />
              {opt.text}
            </label>
          );
        })}
      </div>

      {!checked ? (
        <button
          className="btn check"
          onClick={handleCheck}
          disabled={!selected.length}
        >
          Проверить
        </button>
      ) : isCorrect() ? (
        <h3 className="result good">
          Молодец! Так держать! 🎉
        </h3>
      ) : (
        <div className="result">
          <h3 className="message bad">Ответ не верный, попробуй еще раз 😔</h3>
          <button className="btn retry" onClick={handleReset}>
            Пройти заново
          </button>
        </div>
      )}
    </div>
  );
};

export default TestQuestion;