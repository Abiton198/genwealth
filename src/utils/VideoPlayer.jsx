import React, { useState } from 'react';

const VideoPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(prevState => !prevState);
  };

  return (
    <div>
      <video
        src={src}
        controls  // This adds playback controls to the video player
        autoPlay={false}  // Set to true if you want the video to start playing automatically
        loop={false}      // Set to true if you want the video to loop
        muted={false}     // Set to true if you want the video muted
        onClick={togglePlay} // Toggle play/pause when the video is clicked
      />
    </div>
  );
};

export default VideoPlayer;
