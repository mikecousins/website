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
  <>
    <h1 className="text-2xl font-bold mb-4">IMDb Top 250 Movie Status</h1>
    <table className="min-w-full border-separate" style={{ borderSpacing: 0 }}>
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
          >
            #
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
          >
            Name
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
          >
            Resolution
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
          >
            Source
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
          >
            Remux
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
          >
            DV
          </th>
          <th
            scope="col"
            className="sticky top-0 z-10 border-b border-gray-300 bg-gray-50 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
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
  </>
);

export default Movies;
