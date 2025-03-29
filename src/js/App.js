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

    useEffect(() => {
        setShowPopup(true);
    }, []);

    const loadBackup = () => {
        setDataState(data);
        setShowPopup(false);
    };

    const startEmpty = () => {
        setDataState(emptyData);
        setShowPopup(false);
    };

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

    return (
        <>
            <Header dataState={dataState} />
            <Body dataState={dataState} setDataState={setDataState} />
            <Footer />
        </>
    );
}

export default App;