import { useState, useEffect } from 'react';

export default () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saveTheme = window.localStorage.getItem('theme');
    if (saveTheme) setTheme(saveTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = (theme === 'light') ? 'dark' : 'light';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
  };

  return [theme, toggleTheme];
};
