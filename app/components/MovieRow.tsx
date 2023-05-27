import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import * as Popover from '@radix-ui/react-popover';
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
  <tr className="bg-black text-white">
    <td className="whitespace-nowrap border-b border-gray-700 py-4 px-1 lg:px-3 text-sm font-medium">
      {number}
    </td>
    <td className="whitespace-nowrap border-b border-gray-700 py-4 px-1 lg:px-3 text-sm font-medium truncate max-w-xs">
      <a
        href={`https://www.imdb.com/title/tt${imdb}`}
        className={clsx(
          watched
            ? 'text-white decoration-orange-500'
            : 'text-red-600 decoration-red-500',
          'hover:underline underline-offset-2'
        )}
      >
        {name}
      </a>
    </td>
    <td className="whitespace-nowrap border-b border-gray-700 px-3 py-4 text-sm">
      <Popover.Root>
        <Popover.Trigger asChild>
          <button>{resolution}</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="bg-gray-950 text-white p-4 font-mono text-sm"
            sideOffset={5}
          >
            <div className="flex flex-col gap-2">
              <div>Resolution: {resolution}</div>
              <div>Source: {source}</div>
              <div>
                Remux:{' '}
                {remux ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faX} className="text-red-900" />
                )}
              </div>
              <div>
                Dolby Vision:{' '}
                {dolbyVision ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faX} className="text-red-900" />
                )}
              </div>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </td>
  </tr>
);
