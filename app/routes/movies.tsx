import { V2_MetaFunction } from '@remix-run/node';
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
  const collected = movies.filter((movie) => !!movie.resolution).length;
  const perfect = movies.filter(
    (movie) =>
      movie.resolution === '4k' &&
      movie.source === 'UHD BD' &&
      movie.remux &&
      movie.dolbyVision
  ).length;

  return (
    <Layout>
      <div className="container mx-auto max-w-7xl py-8">
        <div className="pt-12 sm:pt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                Mike&apos;s IMDb Top 250 Movie Status
              </h2>
              <p className="mt-3 text-xl text-gray-300 sm:mt-4">
                Bucket list endeavour to watch all of the best movies ever made.
              </p>
            </div>
          </div>
          <div className="mt-10 pb-12 sm:pb-16">
            <div className="relative">
              <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                  <dl className="sm:grid sm:grid-cols-3">
                    <div className="flex flex-col border-b border-gray-900 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-300">
                        Watched
                      </dt>
                      <dd className="order-1 text-5xl font-bold tracking-tight text-orange-600">
                        {watched}
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-900 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-300">
                        Collected
                      </dt>
                      <dd className="order-1 text-5xl font-bold tracking-tight text-orange-600">
                        {collected}
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-900 p-6 text-center sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-300">
                        Perfect Quality
                      </dt>
                      <dd className="order-1 text-5xl font-bold tracking-tight text-orange-600">
                        {perfect}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table
          className="min-w-full border-separate"
          style={{ borderSpacing: 0 }}
        >
          <thead className="text-white">
            <tr>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-900 px-1 lg:px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter"
              >
                #
              </th>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-900 px-1 lg:px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter"
              >
                Name
              </th>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-900 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter hidden lg:table-cell"
              >
                Resolution
              </th>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-900 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter hidden lg:table-cell"
              >
                Source
              </th>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-900 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter hidden lg:table-cell"
              >
                Remux
              </th>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-900 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter hidden lg:table-cell"
              >
                DV
              </th>
              <th
                scope="col"
                className="sticky top-0 z-10 border-b border-gray-900 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter hidden lg:table-cell"
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
    </Layout>
  );
};

export default Movies;
