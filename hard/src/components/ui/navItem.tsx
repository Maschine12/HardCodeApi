import React from 'react';

interface NavItemProps {
    href: string;
    text: string;
    isActive?: boolean;
    additionalClasses?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, isActive = false, additionalClasses = '' }) => {
    return (
        <li>
            <a
                href={href}
                className={`block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 ${isActive ? 'md:hover:bg-gray-100 aria-current="page"' : ''
                    } ${additionalClasses}`}
                aria-current={isActive ? 'page' : undefined}
            >
                {text}
            </a>
        </li>
    );
};

export default NavItem;
