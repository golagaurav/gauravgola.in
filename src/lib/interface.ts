export interface MediaRating {
    mediaType: string;
    id: number;
    title: string;
    genres: string[];
    rating: number;
    posterPath: string;
    releaseYear: number;
    isFavorite: boolean;
  }
  
  export interface TMDBGenre {
    id: number;
    name: string;
  }
  
  export interface TMDBGenresResponse {
    genres: TMDBGenre[];
  }
  
  export interface TMDBMultiPageResponse<T> {
    page: number;
    results: T[];
    total_results: number;
    total_pages: number;
  }
  
  export interface TMDBv4ErrorResponse {
    status_message: string;
    error_message?: string;
    success: boolean;
    status_code: number;
  }
  
  export interface TMDBv3ErrorResponse {
    status_message: string;
    status_code: number;
  }
  
  export interface TMDBMediaRating {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    account_rating: {
      created_at: string;
      value: number;
    };
  }
  
  export interface TMDBFavoriteMedia {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  export interface MediaProps {
    media: MediaRating;
  }