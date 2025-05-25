import React from 'react';
import { Card as MaterialCard } from '@material-tailwind/react'; // Renamed to avoid conflict

export const ThemedCard = ({ children, className = '', ...props }) => {
  const themeClasses = 'bg-light-card text-light-onSurface dark:bg-dark-card dark:text-dark-onSurface shadow-md p-6';

  return (
    <MaterialCard className={`${themeClasses} ${className}`.trim()} {...props}>
      {children}
    </MaterialCard>
  );
};
