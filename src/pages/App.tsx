import React, { Fragment, useState, useEffect } from 'react';
import Header from 'components/header/Header';
import Button from 'components/button/Button';
import Result from 'components/screen/Result';
import data from 'constants/mock';
import Bird from 'data/Bird';

import './App.scss';

const getRandomIndex = (len) => Math.floor(Math.random() * len);

const App = () => {

  const [score, setScore] = useState(0);
  const [showResult, setResult] = useState(false);
  let [category, setCategory] = useState(0);
  const [questions, setGroup] = useState(data.birdsData[category]);
  const [question, setQuestion] = useState<Bird>(questions[getRandomIndex(questions.length)]);
  const [answer, setAnswer] = useState<Bird | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const nextLevel = () => {
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

    if (!clicked(id) && !clicked(question.id)) {
      const isRight = question.id === id;
      if(isRight) {
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

  return (
    <Fragment>
      <Header total={score}/>
      <main className="main">
      {(() => {
        if(!showResult) {
          return (
            <Result score={score} total={5 * questions.length} onClick={clear} />
          );
        } else {
          return (
            <Fragment>
              <div>{data.categories[category]} - {category + 1}</div>
              <hr/>
              <div>
                <span>{question.id} - {question.name}</span>
              </div>
              <section className="question section__question">

              </section>
              <hr/>
              <section className="answer section__answer">
                <ul className="answer__list">
                  {questions.map((q)=> {
                    return (
                      <li className="answer__item" key={q.id} onClick={() => clickAnswer(q.id)} style={itemStyle(q.id)}>
                        <span>{q.id} - {q.name}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="answer__card"></div>
              </section>
              <hr/>
              {answerCard()}
              <Button onClick={nextLevel} disabled={!clicked(question.id)} title={'Next level'}/>
            </Fragment>
          );
        }
      })()}
      </main>
    </Fragment>
  );
};

export default App;
