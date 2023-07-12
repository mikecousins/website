import { type V2_MetaFunction } from '@remix-run/node';
import { movies } from '~/data/movies';
import { MovieRow } from '~/components/MovieRow';
import Layout from '~/layouts';

export const meta: V2_MetaFunction = () => {
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
      <div className="container mx-auto max-w-7xl py-8">
        <div className="pt-12 sm:pt-16">
          <h2 className="text-6xl tracking-tight text-gray-100 font-serif">
            Mike&apos;s IMDb Top 250 Movie List
          </h2>
          <p className="mt-3 text-xl text-gray-300 sm:mt-4 font-mono">
            Bucket list endeavour to watch all of the best movies ever made.
          </p>
        </div>
        <div className="my-8 font-mono text-4xl">Watched: {watched}/250</div>
        <div className="w-full border-separate border-spacing-0 font-mono">
          <div className="text-white flex">
              <div
                className="border-b border-gray-900 px-1 lg:px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter"
              >
                #
              </div>
              <div
                className="flex-1 border-b border-gray-900 px-1 lg:px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter"
              >
                Name
              </div>
              <div
                className="border-b border-gray-900 px-1 lg:px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter"
              >
                Resolution
              </div>
          </div>
            {movies.map((movie, index) => (
              <MovieRow {...movie} number={index + 1} key={movie.name} />
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Movies;
