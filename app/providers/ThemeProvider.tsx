import { FunctionComponent, useState, createContext } from 'react';

type Theme = 'light' | 'dark';

type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

export const store = createContext<ThemeContext>({
  theme: 'light',
  toggleTheme: () => {},
});

const { Provider } = store;

const ThemeProvider: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
      }}
    >
      {children}
    </Provider>
  );
};

export default ThemeProvider;
