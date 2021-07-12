
  export interface Tv {
    backdrop_path: string;
    first_air_date: string;
    genre_ids: number[];
    id: number;
    name: string;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
  }
  
  export interface TvInfo {
    backdrop_path: string;
    created_by: Createdby[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    last_episode_to_air: Lastepisodetoair;
    name: string;
    next_episode_to_air: Nextepisodetoair;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Network[];
    production_countries: Productioncountry[];
    seasons: Season[];
    spoken_languages: Spokenlanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
    videos: Videos;
    images: Images;
    credits: Credits;
  }
  
  export interface Credits {
    cast: Cast[];
    crew: Crew[];
  }
  
  export interface Crew {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string;
    credit_id: string;
    department: string;
    job: string;
  }
  
  export interface Cast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    character: string;
    credit_id: string;
    order: number;
  }
  
  export interface Images {
    backdrops: any[];
    posters: any[];
  }
  
  export interface Videos {
    results: Result[];
  }
  
  export interface Result {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
  }
  
  export interface Spokenlanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
  export interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
  }
  
  export interface Productioncountry {
    iso_3166_1: string;
    name: string;
  }
  
  export interface Network {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
  }
  
  export interface Nextepisodetoair {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path?: any;
    vote_average: number;
    vote_count: number;
  }
  
  export interface Lastepisodetoair {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  }
  
  export interface Genre {
    id: number;
    name: string;
  }
  
  export interface Createdby {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path?: string;
  }
  
  
  