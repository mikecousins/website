import { MetaFunction } from '@remix-run/node';
import { movies } from '~/data/movies';
import { MovieRow } from '../../components/MovieRow';

export const meta: MetaFunction = () => {
  return {
    title: 'Mike Cousins - Movies',
    description: 'imdb Top 250 Movies',
  };
};

const Movies = () => (
  <div className="bg-slate-900">
    <div className="container mx-auto max-w-7xl py-8">
      <h1 className="text-2xl font-bold mb-4 text-white">
        IMDb Top 250 Movie Status
      </h1>
      <table
        className="min-w-full border-separate"
        style={{ borderSpacing: 0 }}
      >
        <thead className="bg-gray-900 text-white">
          <tr>
            <th
              scope="col"
              className="sticky top-0 z-10 border-b border-gray-900 bg-gray-700 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
            >
              #
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 border-b border-gray-900 bg-gray-700 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
            >
              Name
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 hidden border-b border-gray-900 bg-gray-700 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter sm:table-cell"
            >
              Resolution
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 hidden border-b border-gray-900 bg-gray-700 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter lg:table-cell"
            >
              Source
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 border-b border-gray-900 bg-gray-700 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter"
            >
              Remux
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 border-b border-gray-900 bg-gray-700 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter"
            >
              DV
            </th>
            <th
              scope="col"
              className="sticky top-0 z-10 border-b border-gray-900 bg-gray-700 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter"
            >
              Watched
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {movies.map((movie, index) => (
            <MovieRow {...movie} number={index + 1} key={movie.name} />
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Movies;
