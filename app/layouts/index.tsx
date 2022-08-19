import { FC, PropsWithChildren, useContext } from 'react';

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => (
  <div className="flex h-screen transition-colors ease-in-out duration-1000 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900">
    <div className="p-4 mx-auto my-auto max-w-2xl rounded-xl transition-colors ease-in-out duration-1000 bg-opacity-20 text-gray-800 bg-white dark:text-gray-100 dark:bg-black dark:bg-opacity-20">
      {children}
    </div>
  </div>
);

export default Layout;
