import React from 'react';
import { Table as MaterialTable } from '@material-tailwind/react';

export const ThemedTable = ({ children, className = '', ...props }) => {
  // Base classes for the table container.
  // Specific styling for head, body, rows, cells will be applied by the user
  // or demonstrated in ThemeDemo.jsx using Tailwind utilities on those child components.
  const themeClasses = 'min-w-full bg-light-surface dark:bg-dark-surface';

  return (
    <MaterialTable className={`${themeClasses} ${className}`.trim()} {...props}>
      {children}
    </MaterialTable>
  );
};
