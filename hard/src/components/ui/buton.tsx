import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = '',
    disabled = false,
    type = 'button',
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-lg text-white font-semibold bg-[#f6a00a] disabled:bg-gray-300 disabled:cursor-not-allowed  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-[#7E1891] duration-200${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
