import { useEffect, useState } from 'react';
import { fetchTVMediaRatings } from '@/lib/tmdb';
import { MediaRating } from '@lib/interface';
import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import StarRating from '../StarRating';
import Tooltip from '../Tooltip/Tooltip';

interface MediaProps {
  media: MediaRating;
}

const Media: React.FC<MediaProps> = ({ media }) => {
  return (
    <Link
      href={`https://www.themoviedb.org/tv/${media.id}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative shadow dark:shadow-gray-600 p-2 rounded-2xl group transition-[opacity,transform] duration-100">
        <div className="w-48 h-72 relative rounded-2xl overflow-hidden">
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${media.posterPath}`}
            alt={`${media.title}`}
            className="h-full w-full group-hover:scale-105 transition-transform"
          />
          {media.isFavorite && (
            <div className="absolute top-1 right-0.5">
              <div className="bg-white dark:bg-gray-800 rounded-full p-1">
                <Tooltip tipChildren="Personal Favorite">
                  <div>
                    <AiFillHeart className="h-6 w-6 text-[#FF007F]" />
                  </div>
                </Tooltip>
              </div>
            </div>
          )}
        </div>
        <div className="mt-2 flex items-center justify-center">
          <StarRating rating={media.rating} />
        </div>
      </div>
    </Link>
  );
};

function LoadingTVShows() {
  return (
    <>
      {Array.from(Array(10).keys()).map((item) => (
        <div
          key={item}
          className="relative shadow dark:shadow-gray-600 p-2 rounded-2xl group transition-[opacity,transform] duration-100"
        >
          <div className="w-48 h-72 relative rounded-2xl overflow-hidden">
            <div className="bg-gray-200 dark:bg-darkSecondary h-full w-full rounded-lg animate-pulse"></div>
            <div className="absolute top-1 right-0.5">
              <div className="bg-white dark:bg-gray-800 rounded-full p-1">
                <div className="h-6 w-6 animate-pulse bg-gray-200 dark:bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center animate-pulse">
            <StarRating rating={0} />
          </div>
        </div>
      ))}
    </>
  );
}

const TVShowCard: React.FC = () => {
  const [mediaRatings, setMediaRatings] = useState<MediaRating[]>([]);

  useEffect(() => {
    const fetchMediaData = async () => {
      const tvRatings = await fetchTVMediaRatings();

      if (tvRatings) {
        setMediaRatings(tvRatings);
      }
    };

    fetchMediaData();
  }, []);

  return (
    <div className="flex items-center gap-2 md:gap-4 overflow-x-scroll mt-5 pb-5 horizontal-scrollbar">
      {mediaRatings.length > 0 ? (
        mediaRatings.map((media) => (
          <Media key={media.id} media={media} />
        ))
      ) : (
        <LoadingTVShows />
      )}
    </div>
  );
};

export default TVShowCard;
