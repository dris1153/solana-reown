import React, { Children } from 'react';
import Link from 'next/link';
import { cn } from '~/utils/base';

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, fullWidth, ...props }) => {
  return (
    <button
      className={cn(
        // not change
        'group relative flex cursor-pointer items-center justify-center overflow-hidden',
        // can change
        'uppercase font-semibold gap-[4px] rounded-lg border-b-2 border-l-2 border-r-2 border-red-700 bg-gradient-to-tr from-red-600 to-red-500 px-4 py-2 text-white shadow-lg',
        //transitions
        'transition duration-100 ease-in-out',
        //when active
        'active:translate-y-0.5 active:border-red-600 active:shadow-none',
        {
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {/* effect hover */}
      <span className="absolute h-0 w-0 rounded-full bg-white opacity-10 transition-all duration-300 ease-out group-hover:h-[200%] group-hover:w-[200%]"></span>
      {children}
    </button>
  );
};

export default Button;
