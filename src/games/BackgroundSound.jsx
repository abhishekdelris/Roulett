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
      <div onClick={handlePlayPause}>
      <svg width="18" height="18" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      {isPlaying ? 'Pause' : 'Play'}
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.0709679 5.7532C0.134086 5.81431 0.19827 5.85216 0.29206 5.85216H2.56999L4.68999 7.91637C4.87506 8.09657 5.1878 7.96532 5.1878 7.71533V0.284598C5.1878 0.0349513 4.87506 -0.0966452 4.68999 0.0835634L2.56962 2.14813H0.291695C0.130872 2.14813 0 2.27556 0 2.43215V5.5678C0 5.63655 0.0253235 5.70147 0.0709679 5.7532ZM6.36743 3.10536C6.69442 3.65917 6.69478 4.3407 6.36743 4.89456C6.33569 4.94837 6.26508 4.96435 6.21195 4.93032C5.7359 4.62338 5.88816 4.76123 6.01048 4.36505C6.11104 4.03867 6.07181 3.68312 5.90279 3.38695C5.83325 3.26473 6.03366 3.18487 6.21195 3.06994C6.26473 3.03557 6.3357 3.05189 6.36743 3.10536ZM7.35198 2.11063C7.31453 2.06202 7.24428 2.05369 7.19579 2.09153C7.03069 2.22069 6.83277 2.32243 6.92121 2.43805C7.45325 3.13317 7.59804 4.04841 7.29991 4.87061C6.96471 5.79458 6.64129 5.47407 7.19579 5.90809C7.24429 5.94594 7.31454 5.9376 7.35198 5.88899C8.21601 4.77062 8.21601 3.22936 7.35198 2.11063Z" fill="white"/>
</svg>
</div>
      
    </div>
  );
};

BackgroundSound.propTypes = {
  soundFile: PropTypes.string.isRequired,
};

export default BackgroundSound;