import { FunctionComponent, useContext } from 'react';
import clsx from 'clsx';
import { store } from '../providers/ThemeProvider';

const Layout: FunctionComponent = ({ children }) => {
  const { theme } = useContext(store);

  return (
    <div className={clsx(
      'flex h-screen transition-colors ease-in-out duration-1000',
      theme === 'light' ? 'text-gray-800 bg-gray-50' : ' text-gray-100 bg-gray-700'
    )}>
      <div className="p-2 mx-auto my-auto max-w-2xl">
        {children}
      </div>
    </div>
  );
};

export default Layout;