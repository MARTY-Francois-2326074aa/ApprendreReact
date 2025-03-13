import logo from './garen.gif';
import './App.css';

function Header() {
  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Taches</h1>
      </header>
  );
}

function Footer() {
  return (
      <footer>
        <p>Ajouter</p>
        <p>Tache</p>
        <p>Categorie</p>
      </footer>
  );
}

function App() {
  return (
      <>
        <Header />
        <Footer />
      </>
  );
}

export default App;
