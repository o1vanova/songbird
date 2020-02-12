import React, { FunctionComponent } from 'react';
import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/lib/styles.css';
import './Player.scss';

interface PlayerProps {
  url: string,
}

const Player: FunctionComponent<PlayerProps> = (props: PlayerProps) => {

  return (
    <AudioPlayer
      src={props.url}
      autoPlay={false}
      loop={false}
      showJumpControls={false}
      showLoopControl={false}
      autoPlayAfterSrcChange={false}
    />
  );
};

export default Player;
