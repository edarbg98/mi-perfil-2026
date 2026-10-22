import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./pagina/login/login";
import Seguridad from "./seguridad/seguridad";
import Inicio from "./pagina/inicio/inicio";
import About from "./pagina/about/about";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={"/inicio"}>Inicio</Link>
        <Link to={"/about"}>Acerca de mi</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/login" element={<Login />} />

        <Route element={<Seguridad permiso={true} />}>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
