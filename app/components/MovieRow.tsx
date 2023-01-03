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
  <tr className="bg-gray-800 text-white">
    <td className="whitespace-nowrap border-b border-gray-700 py-4 px-4 text-sm font-medium">
      {number}
    </td>
    <td className="whitespace-nowrap border-b border-gray-700 py-4 px-4 text-sm font-medium text-ellipsis">
      <a
        href={`https://www.imdb.com/title/tt${imdb}`}
        className={clsx(
          watched
            ? resolution
              ? 'text-white'
              : 'text-blue-600'
            : resolution
            ? 'text-orange-600'
            : 'text-red-600',
          'hover:underline'
        )}
      >
        {name}
      </a>
    </td>
    <td className="whitespace-nowrap border-b border-gray-700 px-3 py-4 text-sm">
      {resolution}
    </td>
    <td className="whitespace-nowrap border-b border-gray-700 px-3 py-4 text-sm">
      {source}
    </td>
    <td className="whitespace-nowrap border-b border-gray-700 px-3 py-4 text-sm">
      {remux && <FontAwesomeIcon icon={faCheck} />}
      {remux === false && (
        <FontAwesomeIcon icon={faX} className="text-red-900" />
      )}
    </td>
    <td className="whitespace-nowrap border-b border-gray-700 px-3 py-4 text-sm">
      {dolbyVision && <FontAwesomeIcon icon={faCheck} />}
      {dolbyVision === false && (
        <FontAwesomeIcon icon={faX} className="text-red-900" />
      )}
    </td>
    <td className="whitespace-nowrap border-b border-gray-700 px-3 py-4 text-sm">
      {watched ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faX} className="text-red-900" />
      )}
    </td>
  </tr>
);
