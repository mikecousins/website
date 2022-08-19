import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { store } from '../providers/ThemeProvider';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const { toggleTheme } = useContext(store);

  return (
    <span
      role="checkbox"
      tabIndex={0}
      aria-checked="false"
      aria-label="Theme Toggle"
      className="bg-gray-200 dark:bg-indigo-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:shadow-outline float-right"
      onClick={toggleTheme}
    >
      <span
        aria-hidden="true"
        className="translate-x-0 dark:translate-x-5 relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
      >
        <span className="opacity-100 ease-in duration-200 dark:opacity-0 dark:ease-out dark:duration-100 absolute inset-0 h-full w-full flex items-center justify-center transition-opacity">
          <FontAwesomeIcon icon={faSun} className="h-3 w-3 text-gray-400" />
        </span>
        <span className="opacity-0 ease-out duration-100 dark:opacity-100 dark:ease-in absolute inset-0 h-full w-full flex items-center justify-center transition-opacity">
          <FontAwesomeIcon icon={faMoon} className="h-3 w-3 text-indigo-600" />
        </span>
      </span>
    </span>
  );
};

export default ThemeToggle;
