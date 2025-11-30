   import React from 'react';

   // Custom Button component with Tailwind styling
   // Supports variants (primary, secondary, danger) and sizes (small, medium, large)
   // Props: children (button text/content), onClick, variant, size, disabled, className (for extra styles)
   const Button = ({
     children,
     onClick,
     variant = 'primary', // Options: primary, secondary, danger
     size = 'medium', // Options: small, medium, large
     disabled = false,
     className = '',
     ...props
   }) => {
     // Base styles
     const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200';

     // Variant styles
     const variants = {
       primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
       secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
       danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
     };

     // Size styles
     const sizes = {
       small: 'px-3 py-1.5 text-sm',
       medium: 'px-4 py-2 text-base',
       large: 'px-6 py-3 text-lg',
     };

     // Disabled styles
     const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

     // Combine classes
     const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`;

     return (
       <button
         className={buttonClasses}
         onClick={disabled ? undefined : onClick}
         disabled={disabled}
         {...props}
       >
         {children}
       </button>
     );
   };

   export default Button;
   