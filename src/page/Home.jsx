import React, { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import {
  Switch, Typography, IconButton, Collapse, Navbar, MegaMenu, // Removed MaterialButton as it's not used directly
  List, ListItem, Menu, MenuHandler, MenuList, MenuItem, Card, CardBody, // Kept Card, CardBody for MT direct use if any
  // Table specific imports from MT
  TableHead, TableRow, TableHeader, TableBody, TableCell,
} from '@material-tailwind/react';
import {
  ChevronDownIcon, Bars3Icon, XMarkIcon, Square3Stack3DIcon,
  UserCircleIcon, Cog6ToothIcon, PowerIcon, RocketLaunchIcon
} from '@heroicons/react/24/outline';

// Our Themed Components
import { ThemedButton } from '../components/themed/ThemedButton';
import { ThemedCard } from '../components/themed/ThemedCard';
import { ThemedModal } from '../components/themed/ThemedModal';
import { ThemedTable } from '../components/themed/ThemedTable';
import { 
  ThemedMenu, 
  ThemedMenuHandler, 
  ThemedMenuList, 
  ThemedMenuItem 
} from '../components/themed/ThemedMenu';


// MegaMenu Nav List Content (Example)
const navListMenuItems = [
  { title: "Productos", description: "Descubre nuestros productos", icon: Square3Stack3DIcon },
  { title: "Servicios", description: "Soluciones a tu medida", icon: Cog6ToothIcon },
  { title: "Acerca de", description: "Conoce nuestra historia", icon: UserCircleIcon },
  { title: "Blog", description: "Lee nuestras últimas noticias", icon: RocketLaunchIcon}
];

function NavListMenu() {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const t = (light, dark) => theme === 'light' ? light : dark;

  const renderItems = navListMenuItems.map(({ icon, title, description }, key) => (
    <a href="#" key={key}>
      <MenuItem className={`flex items-center gap-3 rounded-lg ${t('hover:bg-light-hover focus:bg-light-hover text-light-onSurface', 'hover:bg-dark-hover focus:bg-dark-hover text-dark-onSurface')}`}>
        {React.createElement(icon, { strokeWidth: 2, className: `h-6 w-6 ${t('text-light-onSurface', 'text-dark-onSurface')}` })}
        <div>
          <Typography variant="h6" className={`flex items-center text-sm ${t('text-light-onSurface', 'text-dark-onSurface')}`}>
            {title}
          </Typography>
          <Typography variant="small" className={`text-xs font-normal ${t('text-light-secondary', 'text-dark-secondary')}`}>
            {description}
          </Typography>
        </div>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} offset={{ mainAxis: 20 }}>
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className={`flex items-center gap-2 py-2 pr-4 font-medium ${t('text-light-onSurface hover:bg-light-hover focus:bg-light-hover', 'text-dark-onSurface hover:bg-dark-hover focus:bg-dark-hover')}`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Recursos
              <ChevronDownIcon strokeWidth={2.5} className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""}`} />
              <ChevronDownIcon strokeWidth={2.5} className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""}`} />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className={`hidden max-w-screen-xl rounded-xl lg:block ${t('bg-light-surface text-light-onSurface border-light-outline', 'bg-dark-surface text-dark-onSurface border-dark-outline')} border`}>
          <ul className="grid grid-cols-2 gap-y-2 md:grid-cols-4 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList({theme}) { // Pass theme for t helper
  const t = (light, dark) => theme === 'light' ? light : dark;
  const surfaceTextClasses = t('text-light-onSurface', 'text-dark-onSurface');


  return (
    <List className={`mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 ${surfaceTextClasses}`}>
      <Typography as="a" href="#" variant="small" className={`font-medium p-2 ${t('hover:text-light-primary', 'hover:text-dark-primary')}`}>
        Inicio
      </Typography>
      <NavListMenu />
      <Typography as="a" href="#" variant="small" className={`font-medium p-2 ${t('hover:text-light-primary', 'hover:text-dark-primary')}`}>
        Contacto
      </Typography>
    </List>
  );
}


export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [openNav, setOpenNav] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const t = (light, dark) => theme === 'light' ? light : dark;

  const _surfaceTextClasses = t('text-light-onSurface', 'text-dark-onSurface');
  const _secondaryTextClasses = t('text-light-secondary', 'text-dark-secondary');


  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`min-h-screen p-4 ${t('bg-light-background', 'bg-dark-background')}`}>
      <Navbar className={`mx-auto max-w-screen-xl px-4 py-2 shadow-md mb-6 ${t('bg-light-surface border-light-outline', 'bg-dark-surface border-dark-outline')} border`}>
        <div className={`flex items-center justify-between ${_surfaceTextClasses}`}>
          <Typography as="a" href="#" variant="h6" className={`mr-4 cursor-pointer py-1.5 lg:ml-2 ${_surfaceTextClasses}`}>
            App Temática
          </Typography>
          <div className="hidden lg:block">
            <NavList theme={theme} /> {/* Pass theme to NavList */}
          </div>
          <div className="hidden gap-2 lg:flex items-center">
            <Switch
              label={
                <Typography as="span" className={`text-xs font-normal ${_surfaceTextClasses}`}>
                  Modo {theme === 'light' ? 'Oscuro' : 'Claro'}
                </Typography>
              }
              checked={theme === 'dark'}
              onChange={toggleTheme}
              crossOrigin={undefined} 
              className={t('checked:bg-light-primary', 'checked:bg-dark-primary')}
            />
            <ThemedButton variant="filled" size="sm">Acceder</ThemedButton>
          </div>
          <IconButton
            variant="text"
            color={theme === 'dark' ? 'white' : 'black'}
            onClick={() => setOpenNav(!openNav)}
            className="lg:hidden"
          >
            {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList theme={theme} /> {/* Pass theme to NavList */}
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden mt-2">
            <ThemedButton variant="outlined" size="sm" fullWidth>Acceder</ThemedButton>
            <div className="flex items-center ml-auto">
              <Typography as="span" className={`text-xs mr-1 ${_surfaceTextClasses}`}>
                {theme === 'light' ? 'Dark' : 'Light'}
              </Typography>
              <Switch
                checked={theme === 'dark'}
                onChange={toggleTheme}
                crossOrigin={undefined}
                className={t('checked:bg-light-primary', 'checked:bg-dark-primary')}
              />
            </div>
          </div>
        </Collapse>
      </Navbar>

      <div className="text-center my-8">
        <Typography variant="h2" className={_surfaceTextClasses}>
          Bienvenido a la App Temática
        </Typography>
        <Typography variant="paragraph" className={_secondaryTextClasses}>
          Explora los componentes con el tema actual: {theme}
        </Typography>
      </div>
      
      {/* Main content grid for component demonstrations */}
      <div className="mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <ThemedCard>
          <Typography variant="h5" className="mb-2">Botones Temáticos</Typography>
          <div className="flex flex-wrap gap-4">
            <ThemedButton variant="filled">Primario (Filled)</ThemedButton>
            <ThemedButton variant="outlined">Secundario (Outlined)</ThemedButton>
            <ThemedButton variant="text">De Texto (Text)</ThemedButton>
          </div>
        </ThemedCard>

        <ThemedCard>
          <Typography variant="h5" className="mb-2">Modal Temático</Typography>
          <ThemedButton variant="filled" onClick={() => setOpenModal(true)}>Abrir Modal</ThemedButton>
        </ThemedCard>

        {/* INSERTED ThemedTable DEMO */}
        <ThemedCard>
          <Typography variant="h5" className={`mb-4 ${_surfaceTextClasses}`}>Tabla Temática</Typography>
          <div className="overflow-x-auto">
            <ThemedTable>
              <TableHead>
                <TableRow>
                  <TableHeader className={`${tableHeadClasses} p-2`}>Nombre</TableHeader>
                  <TableHeader className={`${tableHeadClasses} p-2`}>Rol</TableHeader>
                  <TableHeader className={`${tableHeadClasses} p-2`}>Estado</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {[{name: 'Alice', role: 'Admin', status: 'Active'}, {name: 'Bob', role: 'Editor', status: 'Pending'}, {name: 'Charlie', role: 'Viewer', status: 'Inactive'}].map((user, index) => (
                  <TableRow key={index} className={`${index % 2 === 0 ? t('even:bg-light-surfaceVariant/40', 'even:bg-dark-surfaceVariant/40') : ''} ${t('hover:bg-light-hover', 'hover:bg-dark-hover')}`}>
                    <TableCell className={`p-2 border-b ${t('border-light-outline', 'border-dark-outline')} ${_surfaceTextClasses}`}>{user.name}</TableCell>
                    <TableCell className={`p-2 border-b ${t('border-light-outline', 'border-dark-outline')} ${_surfaceTextClasses}`}>{user.role}</TableCell>
                    <TableCell className={`p-2 border-b ${t('border-light-outline', 'border-dark-outline')} ${_surfaceTextClasses}`}>
                      <ThemedButton size="sm" variant={user.status === 'Active' ? 'filled' : 'outlined'}>
                        {user.status}
                      </ThemedButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </ThemedTable>
          </div>
        </ThemedCard>

        {/* INSERTED ThemedMenu DEMO */}
        <ThemedCard>
          <Typography variant="h5" className={`mb-4 ${_surfaceTextClasses}`}>Menú Desplegable Temático</Typography>
          <ThemedMenu>
            <ThemedMenuHandler>
              <ThemedButton variant="outlined">Abrir Menú</ThemedButton>
            </ThemedMenuHandler>
            <ThemedMenuList> {/* ThemedMenuList already applies its own theme classes */}
              <ThemedMenuItem onClick={() => alert('Perfil clickeado')}>Ver Perfil</ThemedMenuItem>
              <ThemedMenuItem onClick={() => alert('Configuración clickeada')}>Configuración</ThemedMenuItem>
              <ThemedMenuItem className={`text-red-500 dark:text-red-400 ${t('hover:bg-red-500/10', 'hover:bg-red-500/10')}`}>Cerrar Sesión</ThemedMenuItem>
            </ThemedMenuList>
          </ThemedMenu>
        </ThemedCard>
      </div>
      
      <ThemedModal
        open={openModal}
        handler={() => setOpenModal(false)}
        title="Ventana Modal Temática"
        footerActions={
            <>
              <ThemedButton variant="text" onClick={() => setOpenModal(false)} className="mr-2">Cancelar</ThemedButton>
              <ThemedButton variant="filled" onClick={() => setOpenModal(false)}>Confirmar</ThemedButton>
            </>
        }
      >
        <Typography className={_surfaceTextClasses}> 
          Este es el contenido del modal. Utiliza los colores del tema actual.
          Los botones en el pie de página también deben seguir el tema.
        </Typography>
      </ThemedModal>
    </div>
  );
}
