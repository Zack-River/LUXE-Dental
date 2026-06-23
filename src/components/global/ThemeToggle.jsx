import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle = () => {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2 rounded-full hover:bg-warm-100 dark:hover:bg-navy-800 transition-colors"
    >
      {isDark ? <Sun size={20} className="text-warm-50" /> : <Moon size={20} className="text-warm-900" />}
    </button>
  );
};
