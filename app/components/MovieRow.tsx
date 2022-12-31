import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Movie } from '~/data/movies';

export const MovieRow = ({
  number,
  name,
  resolution,
  source,
  remux,
  watched,
  imdb,
}: Movie & { number: number }) => (
  <tr>
    <td className="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
      {number}
    </td>
    <td className="whitespace-nowrap border-b border-gray-200 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
      {name}
    </td>
    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
      {resolution}
    </td>
    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
      {source}
    </td>
    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
      {remux ? 'Yes' : 'No'}
    </td>
    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
      {watched ? 'Yes' : 'No'}
    </td>
    <td className="whitespace-nowrap border-b border-gray-200 px-3 py-4 text-sm text-gray-500">
      <a href={`https://www.imdb.com/title/tt${imdb}`}>
        <FontAwesomeIcon icon={faImdb} />
      </a>
    </td>
  </tr>
);
