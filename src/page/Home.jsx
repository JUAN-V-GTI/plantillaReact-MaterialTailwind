import {
  Button,
  Card,
  Typography,
  Tooltip,
  Switch
} from '@material-tailwind/react';

import { useTheme } from '../hooks/useTheme'; 

export default function Home() {
    const { theme, toggleTheme } = useTheme();
  return (
<div className="grid grid-cols-4 gap-4 min-h-screen p-4">
  {/* Header */}
  <div className="col-span-4">
    <div className="flex justify-between items-center">
      <Typography variant="h2">Demo de Componentes - Tema {theme}</Typography>
      <Switch 
        label="Modo oscuro" 
        checked={theme === 'dark'} 
        onChange={toggleTheme} 
      />
    </div>
  </div>

  {/* Sección de botones */}
  <div className="col-span-4">
    <Card className="p-6">
      <Typography variant="h4" className="mb-4">Botones</Typography>
      <div className="flex flex-wrap gap-4">
        <Button>Primario</Button>
        {/* Resto de botones... */}
      </div>
    </Card>
  </div>

  {/* Otras secciones */}
  <div className="col-span-1 bg-blue-100 p-4">Card 1</div>
  <div className="col-span-1 bg-blue-100 p-4">Card 2</div>
  <div className="col-span-1 bg-blue-100 p-4">Card 3</div>
  <div className="col-span-1 bg-blue-100 p-4">Notificaciones</div>
  
        <div >Card</div>
        <div className="row-start-3">Card</div>
        <div className="row-start-3">Card</div>
        <div className="col-span-2 row-start-4">Clientes+</div>
        <div className="col-span-2 col-start-3 row-start-4">Clientes-</div>
        <div className="col-span-4 row-start-5">Footer</div>

      </div>


 


  );


}
