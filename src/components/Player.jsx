import Playerpng from '../assets/player.png';
import { useState, useEffect } from 'react';

const useAudio = (url) => {
  const [audio] = useState(
    new Audio('https://audio.jukehost.co.uk/8dxgmrmz9SZJOXHQtcnET3khvlaKVw1H')
  );
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);
  const autoplay = () => {
    setPlaying(true);
  };

  useEffect(() => {
    audio.volume = 0.5;
    audio.loop = true;
    audio.requireInteraction = false;
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    window.addEventListener('click', autoplay, { once: true });
    audio.addEventListener('ended', () => setPlaying(true));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(true));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className="player">
      <p>
        <span>heavy metal </span>
        <span> ice + alabaster</span>
        <span> 9mice, kai angel</span>
      </p>
      <button className="start" onClick={toggle}>
        <img src={Playerpng} alt="" className={playing ? 'play' : 'notplay'} />
      </button>
    </div>
  );
};

export default Player;
