import './App.css';
import data from './donnees.json';

function Body() {
    return (
        <main>
            <section>
                <h2>Ma liste de taches</h2>
                <>
                    <Trierfiltrerboutons />
                    <Tableautaches />
                </>
            </section>
        </main>
    );
}

function Trierfiltrerboutons() {
    return (
        <section className={'Trierfiltrerboutons'}>
            <button>Trier</button>
            <button>Filtrer</button>
        </section>
    );
}

function Tache({id}) {
    const {title, description, date_creation, date_echeance, etat, urgent} = data[id];
    return (
        <article>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{date_creation}</p>
            <p>{date_echeance}</p>
            <select>
                <option value="NOUVEAU">NOUVEAU</option>
                <option value="EN ATTENTE">EN ATTENTE</option>
                <option value="REUSSI">REUSSI</option>
            </select>
            <p>{urgent}</p>
        </article>
    );
}

function Tableautaches() {
    return (
        <section className={'Tableautaches'}>
            <Tache id={0} />
            <Tache id={1} />
            <Tache id={2} />
        </section>
    );
}

function Header() {
    return (
        <header className="App-header">
            <button>Croix</button>
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
            <Body />
            <Footer />
        </>
    );
}

export default App;
