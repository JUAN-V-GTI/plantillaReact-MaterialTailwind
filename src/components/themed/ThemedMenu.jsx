import React from 'react';
import {
  Menu as MaterialMenu,
  MenuHandler as MaterialMenuHandler,
  MenuList as MaterialMenuList,
  MenuItem as MaterialMenuItem,
} from '@material-tailwind/react';

// Pass through Menu and MenuHandler as they don't need direct styling
export const ThemedMenu = MaterialMenu;
export const ThemedMenuHandler = MaterialMenuHandler;

export const ThemedMenuList = React.forwardRef(({ children, className = '', ...props }, ref) => {
  const themeClasses = 'bg-light-surface dark:bg-dark-surface text-light-onSurface dark:text-dark-onSurface border border-light-outline dark:border-dark-outline shadow-lg';
  return (
    <MaterialMenuList ref={ref} className={`${themeClasses} ${className}`.trim()} {...props}>
      {children}
    </MaterialMenuList>
  );
});

export const ThemedMenuItem = React.forwardRef(({ children, className = '', ...props }, ref) => {
  const themeClasses = 'text-light-onSurface dark:text-dark-onSurface hover:bg-light-hover focus:bg-light-hover dark:hover:bg-dark-hover dark:focus:bg-dark-hover hover:text-light-onSurface focus:text-light-onSurface dark:hover:text-dark-onSurface dark:focus:text-dark-onSurface';
  return (
    <MaterialMenuItem ref={ref} className={`${themeClasses} ${className}`.trim()} {...props}>
      {children}
    </MaterialMenuItem>
  );
});

// It's good practice to set display names for forwarded refs, useful in React DevTools
ThemedMenuList.displayName = 'ThemedMenuList';
ThemedMenuItem.displayName = 'ThemedMenuItem';
