import { FC, PropsWithChildren, useContext } from 'react';
import clsx from 'clsx';
import { store } from '../providers/ThemeProvider';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const { theme } = useContext(store);

  return (
    <div
      className={clsx(
        'flex h-screen transition-colors ease-in-out duration-1000',
        theme === 'light'
          ? 'bg-gradient-to-r from-cyan-100 to-blue-100'
          : 'bg-gradient-to-r from-cyan-900 to-blue-900'
      )}
    >
      <div
        className={clsx(
          'p-4 mx-auto my-auto max-w-2xl rounded-xl transition-colors ease-in-out duration-1000 bg-opacity-20',
          theme === 'light'
            ? 'text-gray-800 bg-white'
            : 'text-gray-100 bg-black'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
