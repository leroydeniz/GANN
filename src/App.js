import './assets/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Router from './Router';

function App() {
  return (
    <div className="App">

      {/* Importar el header */}
      <Header />

      {/* Importar el archivo de rutas */}
      <Router/>


      {/* Importar el footer */}
      <Footer />
    </div>
  );
}

export default App;
