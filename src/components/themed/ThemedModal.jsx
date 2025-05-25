import React from 'react';
import {
  Dialog as MaterialDialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { ThemedButton } from './ThemedButton'; // Import our themed button

export const ThemedModal = ({
  open,
  handler,
  title,
  children,
  footerActions,
  className = '',
  size = 'md', // Default size
  ...props
}) => {
  const dialogClasses = `bg-light-surface dark:bg-dark-surface text-light-onSurface dark:text-dark-onSurface`;

  return (
    <MaterialDialog
      open={open}
      handler={handler}
      className={`${dialogClasses} ${className}`.trim()}
      size={size}
      {...props}
    >
      <DialogHeader className="text-light-onSurface dark:text-dark-onSurface">
        {title}
      </DialogHeader>
      <DialogBody className="text-light-onSurface dark:text-dark-onSurface">
        {children}
      </DialogBody>
      <DialogFooter className="gap-2">
        {footerActions ? (
          footerActions
        ) : (
          <ThemedButton variant="text" onClick={handler}>
            Close
          </ThemedButton>
        )}
      </DialogFooter>
    </MaterialDialog>
  );
};
