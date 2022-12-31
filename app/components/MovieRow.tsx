import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { Movie } from '~/data/movies';

export const MovieRow = ({
  number,
  name,
  resolution,
  source,
  remux,
  dolbyVision,
  watched,
  imdb,
}: Movie & { number: number }) => (
  <tr
    className={clsx(
      watched
        ? resolution
          ? 'bg-green-50'
          : 'bg-blue-50'
        : resolution
        ? 'bg-yellow-50'
        : 'bg-red-50'
    )}
  >
    <td className="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
      {number}
    </td>
    <td className="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
      <a
        href={`https://www.imdb.com/title/tt${imdb}`}
        className="hover:underline"
      >
        {name}
      </a>
    </td>
    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
      {resolution}
    </td>
    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
      {source}
    </td>
    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
      {remux && <FontAwesomeIcon icon={faCheck} />}
      {remux === false && <FontAwesomeIcon icon={faX} />}
    </td>
    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
      {dolbyVision && <FontAwesomeIcon icon={faCheck} />}
      {dolbyVision === false && <FontAwesomeIcon icon={faX} />}
    </td>
    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
      {watched ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faX} />
      )}
    </td>
  </tr>
);
