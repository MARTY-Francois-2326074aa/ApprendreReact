import './App.css';
import data from './donnees.json';
import cross from './cross.png';
import { useState } from "react";

function Body({ dataState }) {
    return (
        <main>
            <section>
                <h2>Ma liste de taches</h2>
                <>
                    <Trierfiltrerboutons />
                    <Tableautaches data={dataState} />
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

function handleAjouterTache(dataState, setDataState) {
    const newTache = {
        id: dataState.taches.length + 1,
        title: 'Titre',
        description: 'Description',
        date_creation: new Date().toISOString().split('T')[0],
        date_echeance: new Date().toISOString().split('T')[0],
        etat: 'Nouveau',
        urgent: false
    };
    const updatedData = { ...dataState, taches: [...dataState.taches, newTache] };
    setDataState(updatedData);
}

function Tache({ id, data }) {
    const { title, description, date_creation, date_echeance, etat, urgent } = data.taches.find(tache => tache.id === id);
    return (
        <article className={'tache'}>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div>
                <p>{date_creation}</p>
                <p>{date_echeance}</p>
            </div>
            <div>
                <select defaultValue={etat}>
                    <option value="Nouveau">NOUVEAU</option>
                    <option value="En attente">EN ATTENTE</option>
                    <option value="Reussi">REUSSI</option>
                </select>
                <p>{urgent ? 'Urgent' : 'Non urgent'}</p>
            </div>
        </article>
    );
}

function Tableautaches({ data }) {
    return (
        <section className={'Tableautaches'}>
            {data.taches.map(tache => (
                <Tache key={tache.id} id={tache.id} data={data} />
            ))}
        </section>
    );
}

function Header({ dataState }) {
    return (
        <header className="App-header">
            <img src={cross} className="App-logo" alt="logo" />
            <h1>{`${dataState.taches.length} Taches`}</h1>
        </header>
    );
}

function Footer({ dataState, setDataState }) {
    return (
        <footer>
            <p onClick={() => handleAjouterTache(dataState, setDataState)}>Ajouter</p>
            <p>Tache</p>
            <p>Categorie</p>
        </footer>
    );
}

function App() {
    const [dataState, setDataState] = useState(data);

    return (
        <>
            <Header dataState={dataState} />
            <Body dataState={dataState} />
            <Footer dataState={dataState} setDataState={setDataState} />
        </>
    );
}

export default App;