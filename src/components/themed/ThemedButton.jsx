import React from 'react';
import { Button as MaterialButton } from '@material-tailwind/react'; // Renamed to avoid conflict

export const ThemedButton = ({ variant = 'filled', children, className = '', ...props }) => {
  let themeClasses = '';

  switch (variant) {
    case 'outlined':
      themeClasses = `border border-light-outline text-light-primary dark:border-dark-outline dark:text-dark-primary hover:bg-light-primary/10 dark:hover:bg-dark-primary/10`;
      break;
    case 'text':
      themeClasses = `text-light-primary dark:text-dark-primary hover:bg-light-primary/10 dark:hover:bg-dark-primary/10`;
      break;
    case 'filled': // Default
    default:
      themeClasses = `bg-light-primary text-light-onPrimary dark:bg-dark-primary dark:text-dark-onPrimary hover:bg-light-button-hover dark:hover:bg-dark-button-hover`;
      break;
  }

  // Important: Pass the original variant to MaterialButton, but control styling with classes
  return (
    <MaterialButton variant={variant} className={`${themeClasses} ${className}`.trim()} {...props}>
      {children}
    </MaterialButton>
  );
};
