import {Movie, MovieCast} from '../shared/types'
import { movieReviews } from '../shared/types';

export const movies : Movie[] = [
  {
    adult: false,
    backdrop_path: '/sRLC052ieEzkQs9dEtPMfFxYkej.jpg',
    genre_ids: [ 878 ],
    id: 1234,
    original_language: 'en',
    original_title: 'Rebel Moon - Part One: A Child of Fire',
    overview: 'When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.',
    popularity: 2136.3,
    poster_path: '/6epeijccmJlnfvFitfGyfT7njav.jpg',
    release_date: '2023-12-15',
    title: 'Rebel Moon - Part One: A Child of Fire',
    video: false,
    vote_average: 6.4,
    vote_count: 750
  },
];

export const movieCasts: MovieCast[] = [
  {
    movieId: 1234,
    actorName: "Joe Bloggs",
    roleName: "Male Character 1",
    roleDescription: "description of character 1",
  },
  {
    movieId: 1234,
    actorName: "Alice Broggs",
    roleName: "Female Character 1",
    roleDescription: "description of character 2",
  },
  {
    movieId: 1234,
    actorName: "Joe Cloggs",
    roleName: "Male Character 2",
    roleDescription: "description of character 3",
  },
  {
    movieId: 2345,
    actorName: "Joe Bloggs",
    roleName: "Male Character 1",
    roleDescription: "description of character 3",
  },
];

export const movieReview: movieReviews[] = [
{
  movieId: 1234,
  reviewerName: "Jane Doe",  
  reviewDate: "2023-03-17",
  content: "Great movie!",
  rating: 5,
}  
]; 
