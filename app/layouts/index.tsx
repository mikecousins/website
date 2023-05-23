import { Link } from '@remix-run/react';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => (
  <div className="flex flex-col text-white">
    <div className="max-w-4xl mx-auto flex flex-row w-full justify-end gap-4 text-xl font-mono p-4">
      <Link
        to="/"
        className="decoration-orange-500 underline-offset-4 hover:underline"
      >
        Home
      </Link>
      <Link
        to="/movies"
        className="decoration-orange-500 underline-offset-4 hover:underline"
      >
        Movies
      </Link>
    </div>
    <div className="max-w-4xl w-full mx-auto mt-4 dark:text-gray-100 dark:bg-black dark:bg-opacity-20 px-4">
      {children}
    </div>
  </div>
);

export default Layout;
