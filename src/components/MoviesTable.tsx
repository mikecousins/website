import { type Movie } from '~/data/movies';
import { MovieRow } from './MovieRow';

export const MoviesTable = ({ movies }: { movies: Movie[] }) => (
  <>
    {movies.map((movie, index) => (
      <MovieRow {...movie} number={index + 1} key={movie.name} />
    ))}
  </>
);
