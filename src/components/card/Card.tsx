import React, { FunctionComponent } from 'react';
import Player from 'components/player/Player';
import Bird from 'data/Bird';

import './Card.scss';

interface CardProps {
  bird: Bird,
  showName?: boolean,
  showFullInfo?: boolean
}

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  const showName = props.showName || false;
  const showFullInfo = props.showFullInfo || false;
  const bird = props.bird;

  const name = showName ? bird.name : '*****';

  const imagePath = showName ? bird.image : './images/logo.png';

  const specie = showFullInfo ? (
    <div className="card__name--small">{bird.species}</div>
  ) : null;

  const description = showFullInfo ? (
    <div className="card__description">{bird.description}</div>
  ) : null;

  return (
    <div className="card">
      <div className="card__image">
        <img alt="icon" src={imagePath} />
      </div>
      <div className="card__content">
        <div className="card__name--large">{name}</div>
        {specie}
        <div className="card__player">
          <Player url={bird.audio} />
        </div>
        {description}
      </div>
    </div>
  );
};

export default Card;
