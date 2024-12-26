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
                className={`block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#f56e0f]
                    ${isActive ? 'md:hover:bg-gray-100 aria-current="page"' : ''} ${additionalClasses}`}
                aria-current={isActive ? 'page' : undefined}
            >
                {text}
            </a>
        </li>
    );
};

export default NavItem;
