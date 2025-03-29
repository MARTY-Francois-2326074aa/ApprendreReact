import { useState } from 'react';

// Composant pour le tri des catégories
export function TriCategories({ dataState, setDataState }) {
    const [menuOuvert, setMenuOuvert] = useState(false);

    const trierParNom = () => {
        const triedData = {
            ...dataState,
            categories: [...dataState.categories].sort((a, b) => a.title.localeCompare(b.title))
        };
        setDataState(triedData);
        setMenuOuvert(false);
    };

    return (
        <div className="tri-menu">
            <button onClick={() => setMenuOuvert(!menuOuvert)} className="bouton-principal">
                Trier
            </button>
            {menuOuvert && (
                <div className="menu-options">
                    <button onClick={trierParNom}>Par nom</button>
                </div>
            )}
        </div>
    );
}

// Composant pour le filtrage des catégories
export function FiltreCategories({ dataState, setDataState }) {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [filtresActifs, setFiltresActifs] = useState({
        actif: null // null = tous, true = actifs, false = inactifs
    });

    const appliquerFiltres = () => {
        // Filtres combinés sur les catégories
        let categoriesFiltrees = [...dataState.categories];
        
        // Filtre par état actif/inactif
        if (filtresActifs.actif !== null) {
            categoriesFiltrees = categoriesFiltrees.filter(cat => 
                cat.actif === filtresActifs.actif
            );
        }
        
        // Mettre à jour l'affichage avec les catégories filtrées
        setDataState({
            ...dataState,
            categoriesFiltrees: categoriesFiltrees
        });
        
        setMenuOuvert(false);
    };

    const toggleActif = (valeur) => {
        setFiltresActifs(prev => ({
            ...prev,
            actif: prev.actif === valeur ? null : valeur
        }));
    };

    const reinitialiserFiltres = () => {
        setFiltresActifs({
            actif: null
        });
        
        // Réinitialiser l'affichage
        setDataState({
            ...dataState,
            categoriesFiltrees: undefined
        });
        
        setMenuOuvert(false);
    };

    return (
        <div className="filtre-menu">
            <button onClick={() => setMenuOuvert(!menuOuvert)} className="bouton-principal">
                Filtrer
            </button>
            {menuOuvert && (
                <div className="menu-filtres">
                    <div className="section-filtre">
                        <h4>Statut</h4>
                        <div className="options-filtre">
                            <label className="option-checkbox">
                                <input 
                                    type="checkbox" 
                                    checked={filtresActifs.actif === true}
                                    onChange={() => toggleActif(true)}
                                />
                                <span>Actives</span>
                            </label>
                            <label className="option-checkbox">
                                <input 
                                    type="checkbox" 
                                    checked={filtresActifs.actif === false}
                                    onChange={() => toggleActif(false)}
                                />
                                <span>Inactives</span>
                            </label>
                        </div>
                    </div>
                    
                    <div className="actions-filtre">
                        <button onClick={appliquerFiltres} className="btn-appliquer">
                            Appliquer
                        </button>
                        <button onClick={reinitialiserFiltres} className="btn-reinitialiser">
                            Réinitialiser
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
} 