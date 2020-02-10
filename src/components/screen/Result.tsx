import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import Button from 'components/button/Button';
import useAudio from 'data/useAudio';
import Sounds from 'data/Sounds';

import './Result.scss';

type ResultProps = {
  score: number,
  total: number,
  onClick: () => void;
}

const Result: FunctionComponent<ResultProps> = (props: ResultProps) => {
  const isWinner = props.total === props.score;

  useAudio(isWinner ? Sounds.success : Sounds.fail, true);

  const resultBlock = () => {
    return isWinner ?
      (
        <div>
          Good work! You scored maximum score possible points!!!
        </div>
      ) :
      (
        <div>
          Unfortunately, you didn't score maximum score possible points.
        </div>
      );
  }

  const className = classNames(
    'result__container',
    `result__container--${isWinner ? 'success' : 'fail'}`
  );

  return (
    <section className="result section-result">
      <div className={className}>
        Your score is <b>{props.score}</b> points out of <b>{props.total}</b> possible points.
        {resultBlock()}
      </div>
      <div className="result__button">
        <Button onClick={props.onClick} title={'Try again'}></Button>
      </div>
    </section>
  );
};

export default Result;
