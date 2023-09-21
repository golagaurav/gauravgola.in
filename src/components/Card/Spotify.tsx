import React from 'react';
import { SiSpotify } from 'react-icons/si';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { Song } from '@lib/types';

const Spotify = () => {
  const { data: currentSong } = useSWR('/api/now-playing', fetcher);

  return (
    <div>
      {currentSong?.isPlaying ? (
        <WhenPlaying song={currentSong} />
      ) : (
        <NotPlaying />
      )}
    </div>
  );
};

function NotPlaying() {
  return (
    <div className="flex items-center gap-2 flex-row-reverse sm:flex-row justify-between sm:justify-start">
      <SiSpotify className="w-6 h-6" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
        <div className="font-semibold md:text-lg text-black dark:text-white">
          Not Playing
        </div>
        <span className="hidden md:inline-flex">—</span>
        <p className="text-gray-500 text-xs sm:text-sm">Spotify</p>
      </div>
    </div>
  );
}

function WhenPlaying({ song }: { song: Song }) {
  return (
    <div className="flex flex-col gap-4">
      
      <h4 className="text-lg font-semibold dark:text-gray-300 animate-pulse">
        Now Listening . . .
      </h4>
        <iframe
          src={song.embedUrl}
          frameBorder="0"
          allowTransparency
          allow="encrypted-media"
          title="Spotify Player"
          className="w-full h-full md:h-[152px] -mb-16 md:-mb-0"
        ></iframe> 
    </div>
  );
}

export default Spotify;
