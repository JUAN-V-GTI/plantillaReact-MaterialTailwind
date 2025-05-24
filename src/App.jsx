import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import { ThemeDemo } from "./components/ThemeDemo";
import { ThemeProvider } from "./providers/ThemeProvider"; // Asegúrate de que la ruta es correcta


function App() {
  return (
    <ThemeProvider> {/* Envuelve todo con tu ThemeProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;