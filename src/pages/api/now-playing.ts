import { NextApiRequest, NextApiResponse } from "next";
import { currentlyPlayingSong } from "../../lib/spotify";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await currentlyPlayingSong();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((artist: any) => artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;
  const embedUrl = getEmbedUrl(songUrl);

  // res.setHeader(
  //   "Cache-Control",
  //   "public, s-maxage=60, stale-while-revalidate=10"
  // );

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
    embedUrl,
  });
}

/**
 * Retrieves the embed URL for a Spotify track based on the track URL.
 * @param url The Spotify track URL
 * @returns The embed URL for the track
 */
const getEmbedUrl = (url: string): string => {
  const trackId = url.split("/").pop();
  return `https://open.spotify.com/embed/track/${trackId}`;
}
