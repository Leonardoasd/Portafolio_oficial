import './App.css';
import NavBar from "./Components/NavBar.js";
import Home from "./Screens/Home.js";
import Proyectos from "./Screens/Proyectos.js";
import Tecnologias from "./Screens/Tecnologias.js";
import AcercaDe from "./Screens/AcercaDe.js";
import Contacto from './Screens/Contacto.js';
import Footer from './Screens/Footer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Proyectos />
      <Tecnologias />
      <AcercaDe />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;
