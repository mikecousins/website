import { useState, createContext, FC, PropsWithChildren } from 'react';

type Theme = 'light' | 'dark';

type ThemeContext = {
  toggleTheme: () => void;
};

export const store = createContext<ThemeContext>({
  toggleTheme: () => null,
});

const { Provider } = store;

const ThemeProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  return (
    <Provider
      value={{
        toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light'),
      }}
    >
      <div className={theme}>{children}</div>
    </Provider>
  );
};

export default ThemeProvider;
