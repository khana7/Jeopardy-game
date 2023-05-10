import React, { useState, useEffect } from 'react';
import './Game.css';
import { NavLink } from 'react-router-dom';
import Statistics from '../../pages/Statistics/Statistics';

const Game = () => {
  const [playerName, setPlayerName] = useState('');
  const [started, setStarted] = useState(false);
  const [end, setEnded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [answered, setAnswered] = useState([]);
  const [score, setScore] = useState([]);

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    setPlayerName(name);
  };

  const handleStart = () => {
    setStarted(true);
  };

  
  const handleCheck = () => {
    if (selectedQuestion && selectedQuestion.answer === document.getElementsByName("name")[0].value) {
      // add points if answer is correct
      setAnswered([...answered, selectedQuestion]);
      setScore(score + selectedQuestion.value);
    } else {
      // subtract points if answer is incorrect
      setAnswered([...answered, { value: -1 * (selectedQuestion.value || 0) }]);
      setScore(score - (selectedQuestion.value || 0));
    }
    setSelectedQuestion(null);
  };


  const handleEnd = () => {
    setEnded(true);
  };


  const handleQuestionClick = async (category, value) => {
    const response = await fetch(`http://jservice.io/api/clues?category=${category.id}&value=${value}`);
    const data = await response.json();
    setSelectedQuestion(data[0]);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('http://jservice.io/api/categories?count=5');
      const data = await response.json();
      setCategories(data);
    };
    if (started) {
      fetchCategories();
    } else if (answered.length>0) {
      setAnswered(false);
    } else if (end) {
      fetchCategories();
    }
  }, [started, answered, end]);
  // <Statistics playerName={playerName} score={score} />

  


  return (
    <>
      {playerName ? (
        <div className='game__meeting'>
          Welcome, {playerName}!<br />
          <button className='game__btn' onClick={handleStart}>
            Start!
          </button>
        </div>
      ) : (
        <div className='game__wrapper'>
          <form onSubmit={handleSubmit}>
            <label>
              <div className='game__enter'>
                Enter your name to start the game:
                <br />
                <input className='game__input' type='text' name='name' />
              </div>
            </label>
            <br />
            <button className='game__submit' type='submit'>
              Submit
            </button>
          </form>
        </div>
      )}
      {started && categories.length > 0 && (
        <>
          {selectedQuestion && (
            <div className='game__overlay '>
              <div className='container'>
                <div className='game__modal'>
                  <div className='game__question'>{selectedQuestion.question}</div>
                  
                  <form>
                    <input className='game__answer-input' type='text' name='name' /></form>

                    <button className='game__check' onClick={handleCheck}>Check</button>
                  <div className='game__answer'>Answer: {selectedQuestion.answer}</div>
                  <button className='game__close' onClick={() => setSelectedQuestion(null)}>Close</button>
                </div>

              </div>
            </div>
          )} <Statistics playerName={playerName} score={score} />


          <div className='container'>
            <table className='game__table'>
              <thead >
                <tr>
                  {categories.map((category) => (
                    <th key={category.id} className={`game__category game__category-${category.id}`}>
                      {category.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from(Array(5).keys()).map((rowIndex) => (
                  <tr key={rowIndex}>
                    {categories.map((category) => (
                      <td key={`${category.id}_${rowIndex}`}>
                        <button className='game__questionBtn' onClick={() => handleQuestionClick(category, (rowIndex + 1) * 100)}>
                          {(rowIndex + 1) * 100}
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <NavLink to='/' className='game__btn-end' onClick={handleEnd}>
            End!
          </NavLink>

        </>
      )}
    </>
  );
};

export default Game;
