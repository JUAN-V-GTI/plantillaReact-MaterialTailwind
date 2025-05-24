import React from 'react';
import {
  Button,
  Card,
  Typography,
  Input,
  Select,
  Option,
  Checkbox,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeader,
  TableCell,
  Alert,
  Tabs,
  TabsHeader,
  Tab,
  TabPanel,
  TabsBody,
  Tooltip,
  Switch
} from '@material-tailwind/react';
import { useTheme } from "../hooks/useTheme";

export const ThemeDemo = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <Typography variant="h2" className="mb-2">
          Demo de Componentes - Tema {theme}
        </Typography>
        <Switch 
          label="Modo oscuro" 
          checked={theme === 'dark'} 
          onChange={toggleTheme} 
        />
      </div>

      {/* Sección de Botones */}
      <Card className="p-6">
        <Typography variant="h4" className="mb-4">Botones</Typography>
        <div className="flex flex-wrap gap-4">
          <Button>Primario</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
          <Button variant="danger">Error</Button>
          <Button variant="success">Éxito</Button>
          <Button variant="warning">Advertencia</Button>
          <Tooltip content="Este es un tooltip">
            <Button>Con Tooltip</Button>
          </Tooltip>
        </div>
      </Card>

      {/* Sección de Formularios */}
      <Card className="p-6">
        <Typography variant="h4" className="mb-4">Formularios</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input label="Correo electrónico" />
          <Input label="Contraseña" type="password" />
          <Select label="País">
            <Option>México</Option>
            <Option>Estados Unidos</Option>
            <Option>España</Option>
          </Select>
          <Checkbox label="Acepto los términos y condiciones" />
        </div>
      </Card>

      {/* Sección de Tablas */}
      <Card className="p-6">
        <Typography variant="h4" className="mb-4">Tablas</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Nombre</TableHeader>
              <TableHeader>Email</TableHeader>
              <TableHeader>Estado</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {[1, 2, 3].map((item) => (
              <TableRow key={item}>
                <TableCell>Usuario {item}</TableCell>
                <TableCell>usuario{item}@ejemplo.com</TableCell>
                <TableCell>
                  <Button variant="success" size="sm">Activo</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Sección de Alertas */}
      <Card className="p-6">
        <Typography variant="h4" className="mb-4">Alertas y Notificaciones</Typography>
        <div className="space-y-4">
          <Alert variant="filled" color="success">Operación completada con éxito</Alert>
          <Alert variant="filled" color="error">Error al procesar la solicitud</Alert>
          <Alert variant="filled" color="warning">Advertencia: Campos requeridos</Alert>
          <Alert variant="filled" color="info">Nuevo mensaje recibido</Alert>
        </div>
      </Card>

      {/* Sección de Tabs */}
      <Card className="p-6">
        <Typography variant="h4" className="mb-4">Pestañas (Tabs)</Typography>
        <Tabs value="1">
          <TabsHeader>
            <Tab value="1">Perfil</Tab>
            <Tab value="2">Configuración</Tab>
            <Tab value="3">Notificaciones</Tab>
          </TabsHeader>
          <TabsBody>
            <TabPanel value="1" className="p-4">
              Contenido del perfil del usuario
            </TabPanel>
            <TabPanel value="2" className="p-4">
              Configuraciones de la cuenta
            </TabPanel>
            <TabPanel value="3" className="p-4">
              Historial de notificaciones
            </TabPanel>
          </TabsBody>
        </Tabs>
      </Card>

      {/* Sección de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <Typography variant="h5" className="mb-2">Card Primaria</Typography>
          <Typography>Contenido de ejemplo para la card</Typography>
          <Button className="mt-4">Acción</Button>
        </Card>
        <Card className="p-6 bg-light-primaryContainer dark:bg-dark-primaryContainer">
          <Typography variant="h5" className="mb-2">Card Destacada</Typography>
          <Typography>Card con color de acento</Typography>
        </Card>
        <Card className="p-6">
          <Typography variant="h5" className="mb-2">Otra Card</Typography>
          <Typography>Más contenido de ejemplo</Typography>
        </Card>
      </div>
    </div>
  );
};