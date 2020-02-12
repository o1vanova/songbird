import React, { Fragment, useState } from 'react';
import Header from 'components/header/Header';
import NavHeader from 'components/nav/NavHeader';
import Card from 'components/card/Card';
import List from 'components/list/List';
import ListItem from 'components/list/ListItem';
import Button from 'components/button/Button';
import Result from 'components/screen/Result';
import data from 'constants/mock';
import Bird from 'data/Bird';

import './App.scss';
import useAudio from 'data/useAudio';
import Sounds from 'data/Sounds';

const getRandomIndex = (len) => Math.floor(Math.random() * len);
const getSortItems = (items) => items.sort(() => Math.random() - 0.5);
const count = 5;

const App = () => {

  const [score, setScore] = useState(0);
  const [showResult, setResult] = useState(false);
  let [category, setCategory] = useState(0);
  const defaultQuestions = data.birdsData[0];
  const [questions, setGroup] = useState(defaultQuestions);
  const [question, setQuestion] = useState<Bird>(defaultQuestions[getRandomIndex(defaultQuestions.length)]);
  const [answer, setAnswer] = useState<Bird | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const soundError = useAudio(Sounds.error);
  const soundOk = useAudio(Sounds.ok);

  const nextLevel = () => {
    if (data.birdsData.length > category + 1) {
      setCategory(++category);
      const items = getSortItems(data.birdsData[category]);
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
        setScore(score + count - answers.length);
        soundOk();
      } else {
        soundError();
      }
      answers.push(id);
    }
  };

  const clicked = (id: number) => {
    return answers.includes(id);
  }

  const answerBlock = answer ? (
    <Card bird={answer} showName={true} showFullInfo={true} />
  ) : (
    <div className="card">Please, listen to the player and choose the name of the bird whose voice was sounded</div>
  );

  const clear = () => {
    setCategory(0);
    const items = getSortItems(data.birdsData[0]);
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
        if(showResult) {
          return (
            <Result score={score} total={count * questions.length} onClick={clear} />
          );
        } else {
          return (
            <Fragment>
              <NavHeader name={category}/>
              <section className="section-question">
                <Card bird={question} showName={clicked(question.id)} />
              </section>
              <section className="section-answer">
                <List>
                  {questions.map((q) => {
                    return (
                      <ListItem clicked={clicked(q.id)} clickedRight={question.id === q.id} name={q.name} key={q.id}
                        onClick={() => clickAnswer(q.id)}/>
                    );
                  })}
                </List>
                {answerBlock}
              </section>
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
