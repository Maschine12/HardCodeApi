import { Sun, Moon } from 'lucide-react';

function ThemeSwitcher({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
    return (
        <div className="flex items-center space-x-3">
            <Sun className="w-5 h-5 text-yellow-500" />
            <label htmlFor="theme-toggle" className="relative inline-block w-12 h-6">
                <input
                    id="theme-toggle"
                    type="checkbox"
                    className="sr-only"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />
                <span className="block w-full h-full bg-gray-200 rounded-full cursor-pointer dark:bg-gray-600"></span>
                <span
                    className="absolute left-0 top-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300"
                    style={{ transform: theme === 'dark' ? 'translateX(100%)' : 'translateX(0)' }}
                ></span>
            </label>
            <Moon className="w-5 h-5 text-gray-500" />
        </div>
    );
}

export default ThemeSwitcher;
