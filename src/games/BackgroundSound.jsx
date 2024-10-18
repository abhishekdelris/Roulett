import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const BackgroundSound = ({ soundFile }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = async () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
        audio.loop = true; // Ensure it loops when playing
      } catch (error) {
        console.error("Error playing audio: ", error);
      }
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.5; // Set volume level (0 to 1)

    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset the audio playback
    };
  }, [soundFile]);

  return (
    <div>
      <audio ref={audioRef} src={soundFile} />
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'} Sound
      </button>
    </div>
  );
};

BackgroundSound.propTypes = {
  soundFile: PropTypes.string.isRequired,
};

export default BackgroundSound;