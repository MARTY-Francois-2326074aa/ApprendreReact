import '../css/App.css';
import data from '../json/donnees.json';
import {useState, useEffect} from "react";
import {Body} from './Body';
import {Footer} from './Footer';
import {Header} from "./Header";

function App() {
    const emptyData = {
        taches: [],
        categories: [],
        relations: []
    };
    
    const [dataState, setDataState] = useState(null);
    const [showPopup, setShowPopup] = useState(true);

    // Afficher la popup au démarrage
    useEffect(() => {
        setShowPopup(true);
    }, []);

    // Charger les données du backup
    const loadBackup = () => {
        setDataState(data);
        setShowPopup(false);
    };

    // Repartir de zéro (aucune donnée)
    const startEmpty = () => {
        setDataState(emptyData);
        setShowPopup(false);
    };

    // Si les données ne sont pas encore choisies, afficher uniquement la popup
    if (dataState === null) {
        return (
            <div className="startup-container">
                {showPopup && (
                    <div className="startup-popup">
                        <h2>Bienvenue</h2>
                        <p>Comment souhaitez-vous démarrer?</p>
                        <div className="popup-buttons">
                            <button onClick={loadBackup}>
                                Charger le backup
                            </button>
                            <button onClick={startEmpty}>
                                Repartir de zéro
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    // Afficher l'application normale une fois les données chargées
    return (
        <>
            <Header dataState={dataState} />
            <Body dataState={dataState} setDataState={setDataState} />
            <Footer />
        </>
    );
}

export default App;