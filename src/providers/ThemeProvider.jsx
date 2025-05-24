import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider as MaterialTailwindProvider } from '@material-tailwind/react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Efecto para cargar el tema guardado o detectar preferencia del sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Función para cambiar tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Configuración completa para Material Tailwind components
  const materialTailwindTheme = {
    // Configuración global
    global: {
      styles: {
        body: {
          fontFamily: '"Inter", sans-serif',
          backgroundColor: theme === 'light' ? 'bg-light-background' : 'bg-dark-background',
          color: theme === 'light' ? 'text-light-onSurface' : 'text-dark-onSurface',
        },
      },
    },
    
    // Botones
    button: {
      defaultProps: {
        variant: 'filled',
        size: 'md',
        color: theme === 'light' ? 'blue' : 'light-blue',
        className: 'normal-case font-medium',
      },
      styles: {
        base: {
          initial: {
            backgroundColor: theme === 'light' ? 'bg-light-button-base' : 'bg-dark-button-base',
            color: theme === 'light' ? 'text-light-button-text' : 'text-dark-button-text',
          },
          hover: {
            backgroundColor: theme === 'light' ? 'bg-light-button-hover' : 'bg-dark-button-hover',
          },
        },
        outlined: {
          initial: {
            borderColor: theme === 'light' ? 'border-light-button-outline' : 'border-dark-button-outline',
          },
        },
      },
      variants: {
        danger: {
          initial: {
            backgroundColor: theme === 'light' ? 'bg-red-600' : 'bg-red-700',
            color: 'text-white',
          },
        },
        success: {
          initial: {
            backgroundColor: theme === 'light' ? 'bg-green-600' : 'bg-green-700',
            color: 'text-white',
          },
        },
        warning: {
          initial: {
            backgroundColor: theme === 'light' ? 'bg-amber-500' : 'bg-amber-600',
            color: 'text-white',
          },
        },
      },
    },
    
    // Cards
    card: {
      defaultProps: {
        className: theme === 'light' 
          ? 'bg-light-card text-light-onSurface' 
          : 'bg-dark-card text-dark-onSurface',
      },
      styles: {
        base: {
          shadow: theme === 'light' ? 'shadow-md' : 'shadow-lg',
        },
      },
    },
    
    // Inputs/Forms
    input: {
      defaultProps: {
        color: theme === 'light' ? 'blue' : 'light-blue',
        variant: 'outlined',
        className: '!text-inherit',
      },
      styles: {
        base: {
          input: {
            color: theme === 'light' ? 'text-light-onSurface' : 'text-dark-onSurface',
          },
          label: {
            color: theme === 'light' ? 'text-light-secondary' : 'text-dark-secondary',
          },
        },
      },
    },
    
    // Tablas
    table: {
      defaultProps: {
        className: 'min-w-full',
      },
      styles: {
        base: {
          table: {
            backgroundColor: theme === 'light' ? 'bg-light-surface' : 'bg-dark-surface',
          },
          head: {
            th: {
              backgroundColor: theme === 'light' ? 'bg-light-primary' : 'bg-dark-primary',
              color: theme === 'light' ? 'text-light-onPrimary' : 'text-dark-onPrimary',
            },
          },
          body: {
            tr: {
              '&:nth-of-type(even)': {
                backgroundColor: theme === 'light' ? 'bg-light-surfaceVariant' : 'bg-dark-surfaceVariant',
              },
              '&:hover': {
                backgroundColor: theme === 'light' ? 'bg-light-hover' : 'bg-dark-hover',
              },
            },
            td: {
              color: theme === 'light' ? 'text-light-onSurface' : 'text-dark-onSurface',
            },
          },
        },
      },
    },
    
    // Alertas/Notificaciones
    alert: {
      defaultProps: {
        className: 'border-l-4',
      },
      styles: {
        base: {
          initial: {
            color: theme === 'light' ? 'text-light-onSurface' : 'text-dark-onSurface',
          },
        },
        variants: {
          filled: {
            success: {
              backgroundColor: theme === 'light' ? 'bg-green-50' : 'bg-green-900',
              color: theme === 'light' ? 'text-green-800' : 'text-green-100',
            },
            error: {
              backgroundColor: theme === 'light' ? 'bg-red-50' : 'bg-red-900',
              color: theme === 'light' ? 'text-red-800' : 'text-red-100',
            },
            warning: {
              backgroundColor: theme === 'light' ? 'bg-amber-50' : 'bg-amber-900',
              color: theme === 'light' ? 'text-amber-800' : 'text-amber-100',
            },
            info: {
              backgroundColor: theme === 'light' ? 'bg-blue-50' : 'bg-blue-900',
              color: theme === 'light' ? 'text-blue-800' : 'text-blue-100',
            },
          },
        },
      },
    },
    
    // Tabs
    tabs: {
      defaultProps: {
        className: theme === 'light' ? 'bg-light-surface' : 'bg-dark-surface',
      },
      styles: {
        base: {
          tab: {
            initial: {
              color: theme === 'light' ? 'text-light-secondary' : 'text-dark-secondary',
            },
            active: {
              color: theme === 'light' ? 'text-light-primary' : 'text-dark-primary',
            },
          },
        },
      },
    },
    
    // Tooltips
    tooltip: {
      styles: {
        base: {
          bg: theme === 'light' ? 'bg-light-surfaceVariant' : 'bg-dark-surfaceVariant',
          color: theme === 'light' ? 'text-light-onSurface' : 'text-dark-onSurface',
        },
      },
    },
  };

return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MaterialTailwindProvider>
        <div className={theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'}>
          {children}
        </div>
      </MaterialTailwindProvider>
    </ThemeContext.Provider>
  );
};
