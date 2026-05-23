import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import * as Popover from '@radix-ui/react-popover';
import { type Movie } from '~/data/movies';

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
  <div className="flex border-b border-ink-800/60 text-sm">
    <div className="tabular-nums whitespace-nowrap px-2 py-3 text-ink-500 sm:px-4">
      {number.toString().padStart(3, '0')}
    </div>
    <div className="flex-1 truncate whitespace-nowrap px-2 py-3 sm:px-4">
      <a
        href={`https://www.imdb.com/title/tt${imdb}`}
        className={clsx(
          'underline-offset-2 transition-colors hover:underline',
          watched
            ? 'text-ink-50 decoration-flare-500'
            : 'text-ink-500 decoration-ink-700'
        )}
      >
        {name}
      </a>
    </div>
    <div className="whitespace-nowrap px-2 py-3 sm:px-4">
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            className={clsx(
              'text-xs underline-offset-2 transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-flare-400 focus-visible:outline-offset-2',
              watched
                ? 'text-flare-400 decoration-flare-500'
                : 'text-ink-500 decoration-ink-700'
            )}
          >
            {resolution || '—'}
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="rounded-md border border-ink-700 bg-ink-900 p-4 font-mono text-xs text-ink-100 shadow-lg"
            style={{
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, monospace',
            }}
            sideOffset={5}
          >
            <div className="flex flex-col gap-2">
              <div className="text-ink-400">
                <span className="small-caps text-flare-400">res</span>{' '}
                <span className="text-ink-50">{resolution || '—'}</span>
              </div>
              <div className="text-ink-400">
                <span className="small-caps text-flare-400">src</span>{' '}
                <span className="text-ink-50">{source || '—'}</span>
              </div>
              <div className="text-ink-400">
                <span className="small-caps text-flare-400">remux</span>{' '}
                {remux ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-flare-400"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faX}
                    className="text-ink-600"
                  />
                )}
              </div>
              <div className="text-ink-400">
                <span className="small-caps text-flare-400">dovi</span>{' '}
                {dolbyVision ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-flare-400"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faX}
                    className="text-ink-600"
                  />
                )}
              </div>
            </div>
            <Popover.Arrow className="fill-ink-700" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  </div>
);
