import './App.css';
import data from './donnees.json';
import cross from './cross.png';
import { useState } from "react";


function Body({ dataState , setDataState }) {
    return (
        <main>
            <section className={'BodyTaches'}>
                <h2>Ma liste de taches</h2>
                <>
                    <Trierfiltrerboutons dataState={dataState} setDataState={setDataState} />
                    <Tableautaches data={dataState} />
                </>
            </section>
            <section className={'BodyCategories'}>

            </section>
        </main>
    );
}

function Trierfiltrerboutons({ dataState, setDataState }) {
    return (
        <section className={'Trierfiltrerboutons'}>
            <button>Trier</button>
            <button onClick={() => handleAjouterTache(dataState, setDataState)}>Ajout</button>
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

function Tabs( nomTab ) {
    const BodyTaches = document.querySelector('.BodyTaches');
    const BodyCategories = document.querySelector('.BodyCategories');

    if (nomTab === "Taches") {
        BodyTaches.classList.remove('hidden');
        BodyCategories.classList.add('hidden');
    } else {
        BodyTaches.classList.add('hidden');
        BodyCategories.classList.remove('hidden');
    }
}

function Header({ dataState }) {
    return (
        <header className="App-header">
            <img src={cross} className="App-logo" alt="logo" />
            <h1>{`${dataState.taches.length} Taches`}</h1>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <p onClick={() => Tabs("Taches")}>Liste des taches</p>
            <p onClick={() => Tabs("Categorie")}>Categorie</p>
        </footer>
    );
}

function App() {
    const [dataState, setDataState] = useState(data);

    return (
        <>
            <Header dataState={dataState} />
            <Body dataState={dataState} setDataState={setDataState} />
            <Footer />
        </>
    );
}

export default App;