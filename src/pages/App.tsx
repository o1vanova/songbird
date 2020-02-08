import React, { Fragment, useState } from 'react';
import Header from 'components/header/Header';
import data from 'constants/mock';

import './App.scss';

interface Bird  {
  id: number,
  name: string,
  species: string,
  description: string,
  image: string,
  audio: string
}

const getRandomIndex = (len) => Math.floor(Math.random() * len);

const App = () => {

  let [score, setScore] = useState(0);
  let [showResult, setResult] = useState(false);
  let [category, setCategory] = useState(0);
  let [questions, setGroup] = useState(data.birdsData[category]);
  let [question, setQuestion] = useState<Bird>(questions[getRandomIndex(questions.length)]);
  let [answer, setAnswer] = useState<Bird | null>(null);
  let [answers, setAnswers] = useState<number[]>([]);

  const nextLevel = () => {
    if (!answers.includes(question.id)) {
      return;
    }

    if (data.birdsData.length > category + 1) {
      setCategory(++category);
      const items = data.birdsData[category].sort(() => Math.random() - 0.5);
      setGroup(items);
      setQuestion(items[getRandomIndex(items.length)]);
      setAnswer(null);
      setAnswers([]);
    } else {
      setResult(true);
    }
  }

  const clickAnswer = (id: number) => {
    const item = questions.find((q) => q.id === id) ?? null;
    setAnswer(item);

    if (!clicked(id) && !answers.includes(question.id)) {
      if(question.id === id) {
        setScore(score + 5 - answers.length);
      }
      answers.push(id);
    }
  };

  const clicked = (id: number) => {
    return answers.includes(id);
  }

  const clickedRight = (id: number) => {
    return question.id === id;
  }

  const itemStyle = (id: number) => {
    if (!clicked(id)) {
      return {};
    } else {
      return {backgroundColor: clickedRight(id) ? 'green' : 'red'};
    }
  }

  const btnStyle = () => {
    return answers.includes(question.id) ? {opacity: '1'} : {opacity: '0.2', pointer: 'default'};
  }

  const answerCard = () => {
    if (answer) {
      return (
        <div>
          <div>{answer.id}</div>
          <div>{answer.name} {answer.species}</div>
          <div>{answer.description}</div>
        </div>
      );
    }
    return (
      <div>послушать плеер и выбрать название птицы, чей голос прозвучал</div>
    );
  }

  const clear = () => {
    setCategory(0);
    const items = data.birdsData[0].sort(() => Math.random() - 0.5);
    setGroup(items);
    setQuestion(items[getRandomIndex(items.length)]);
    setAnswer(null);
    setAnswers([]);
    setScore(0);
    setResult(false);
  }

  const resultBlock = () => {
    return 5 * questions.length === score ?
      (
        <div>
          набрано максимально возможное количество баллов,
          выводится поздравление и уведомление об окончании игры
          <hr/>
          <button onClick={clear}>пройти викторину ещё раз</button>
        </div>
      ) :
      (
        <div>
          максимально возможное количество баллов не набрано
          <hr/>
          <button onClick={clear}>пройти викторину ещё раз</button>
        </div>
      );
  }

  return !showResult ? (
      <Fragment>
        <Header total={score}/>
        <main className="main">
          <div>{data.categories[category]} - {category + 1}</div>
          <hr/>
          <div>
            <span>{question.id} - {question.name}</span>
          </div>
          <hr/>
          {questions.map((q)=> {
            return (
              <div key={q.id} onClick={() => clickAnswer(q.id)} style={itemStyle(q.id)}>
                <span>{q.id} - {q.name}</span>
              </div>
            );
          })}
          <hr/>
          {answerCard()}
          <hr/>
          <button onClick={nextLevel} style={btnStyle()}>next level</button>
        </main>
      </Fragment>
  ) :
  (
    <div>
      <div>Вы набрали {score} баллов из {questions.length * 5} возможных</div>
      {resultBlock()}
    </div>
  );
};

export default App;
