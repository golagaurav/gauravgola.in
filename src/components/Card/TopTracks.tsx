import React from 'react';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { SpotifyTrack } from '@lib/types';
import AnimatedText from '@components/FramerMotion/AnimatedText';
import AnimatedHeading from '../FramerMotion/AnimatedHeading';
import { opacityVariant } from '@/content/FramerMotionVariants';

const Tracks = () => {
  const { data: topTracks } = useSWR("/api/stats/tracks", fetcher);

  return (
    <div className="font-barlow mt-5">
      <AnimatedHeading
        variants={opacityVariant}
        className="text-3xl sm:text-4xl capitalize font-bold text-neutral-900 dark:text-neutral-200"
      >
        My Top Streamed Songs
      </AnimatedHeading>

      <AnimatedText
        variants={opacityVariant}
        className="mt-4 text-gray-700 dark:text-gray-300"
      >
        <span className="font-semibold">
          {topTracks ? (
            topTracks[0].title
          ) : (
            <span className="bg-white dark:bg-darkSecondary h-6 w-20"></span>
          )}
        </span>{" "}
        is the most streamed song of mine in the last 4 weeks. Here are my top tracks on Spotify, updated daily.
      </AnimatedText>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {topTracks &&
          topTracks.map((track: SpotifyTrack) => (
            <iframe
              key={track.embedUrl}
              style={{ top: 0, left: 0, border: 0 }}
              src={track.embedUrl}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="w-full h-[352px]"
            ></iframe>
          ))}
      </div>
    </div>
  );
};

export default Tracks;
