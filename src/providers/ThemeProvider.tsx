import React, { FunctionComponent, useState, createContext } from 'react';

type Theme = 'light' | 'dark';

type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
};

let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(matched)
	console.log('Currently in dark mode');
else
	console.log('Currently not in dark mode');

export const store = createContext<ThemeContext>({
  theme: matched ? 'dark' : 'light',
  toggleTheme: () => {}
});

const { Provider } = store;

const ThemeProvider: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(matched ? 'dark' : 'light');
  return (
    <Provider value={{ theme, toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')}}>
      {children}
    </Provider>
  );
}

export default ThemeProvider;