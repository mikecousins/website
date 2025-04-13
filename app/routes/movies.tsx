import { type MetaFunction } from 'react-router';
import { movies } from '~/data/movies';
import { MovieRow } from '~/components/MovieRow';
import { Layout } from '~/components/Layout';
import { Container } from '~/components/Container';

export const meta: MetaFunction = () => {
  return [
    {
      title: 'Mike Cousins - Movies',
    },
    { description: 'imdb Top 250 Movies' },
  ];
};

const Movies = () => {
  const watched = movies.filter((movie) => !!movie.watched).length;

  return (
    <Layout>
      <Container className="mt-16 sm:mt-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Mike&apos;s IMDb Top 250 Movie List
        </h1>
        <p className="mt-3 text-xl text-gray-300 sm:mt-4 font-mono">
          Bucket list endeavour to watch all of the best movies ever made.
        </p>
        <div className="my-8 font-mono text-4xl">Watched: {watched}/250</div>
        <div className="w-full border-separate border-spacing-0 font-mono">
          <div className="text-white flex">
            <div className="border-b border-gray-900 px-1 lg:px-3 py-3.5 text-left text-sm font-semibold backdrop-blur-sm backdrop-filter">
              #
            </div>
            <div className="flex-1 border-b border-gray-900 px-1 lg:px-3 py-3.5 text-left text-sm font-semibold backdrop-blur-sm backdrop-filter">
              Name
            </div>
            <div className="border-b border-gray-900 px-1 lg:px-3 py-3.5 text-left text-sm font-semibold backdrop-blur-sm backdrop-filter">
              Resolution
            </div>
          </div>
          {movies.map((movie, index) => (
            <MovieRow {...movie} number={index + 1} key={movie.name} />
          ))}
        </div>
      </Container>
    </Layout>
  );
};

export default Movies;
