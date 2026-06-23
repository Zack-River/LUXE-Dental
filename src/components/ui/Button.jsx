import React from 'react';
import { cn } from '../../utils/cn';

const variants = {
  primary: 'bg-primary-400 hover:bg-primary-500 text-white shadow-sm',
  secondary: 'bg-warm-100 dark:bg-navy-800 hover:bg-warm-200 text-warm-900 dark:text-warm-50',
  outline: 'border border-primary-400 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20',
  ghost: 'text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-full',
  md: 'px-6 py-3 text-base rounded-full',
  lg: 'px-8 py-4 text-lg rounded-full',
};

export const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  as,
  children, 
  ...props 
}, ref) => {
  const Component = as || 'button';
  return (
    <Component
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center transition-all duration-150 interactive focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
});

Button.displayName = 'Button';
