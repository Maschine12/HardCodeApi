import React from 'react';

interface NavDropdownItemProps {
    href: string;
    text: string;
    icon?: React.ReactNode;
    isActive?: boolean;
    additionalClases?: string;
}

const NavDropdownItem: React.FC<NavDropdownItemProps> = ({ href, text, icon, isActive = false, additionalClases = "" }) => {
    return (
        <li>
            <a
                href={href}
                className={`block px-4 text-base py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 ${isActive ? 'md:hover:bg-gray-100 aria-current="page"' : ''} ${additionalClases} flex`}
            >
                {icon && <span className="mr-2">{icon}</span>} 
                {text}
            </a>
        </li>
    );
}

export default NavDropdownItem;
