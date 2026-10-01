import { useApp } from '../context/AppContext.jsx';

export function useTheme() {
  const { theme, setTheme, toggleTheme } = useApp();
  return { theme, setTheme, toggleTheme };
}
