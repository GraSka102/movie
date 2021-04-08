export interface People {
    page: number;
    results: Person[];
    total_pages: number;
    total_results: number;
  }
  
// Models für listen 
 export interface Person {
    adult: boolean;
    gender: number;
    id: number;
    known_for: Knownfor[];
    known_for_department: string;
    name: string;
    popularity: number;
    profile_path: string;
  }

  export interface Knownfor {
    backdrop_path: string;
    first_air_date?: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    name?: string;
    origin_country?: string[];
    original_language: string;
    original_name?: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    adult?: boolean;
    original_title?: string;
    release_date?: string;
    title?: string;
    video?: boolean;
  }

//Models für Details

  export interface PersonInfo {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday: string;
    deathday?: any;
    gender: number;
    homepage?: any;
    id: number;
    imdb_id: string;
    known_for_department: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string;
    images: Images;

  }interface Images {
    profiles: Profile[];
  }
  
  interface Profile {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1?: any;
    vote_average: number;
    vote_count: number;
    width: number;
  }
  
 