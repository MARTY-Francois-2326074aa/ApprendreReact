import { useState } from 'react';

// Composant pour le tri des tâches
export function TriTaches({ dataState, setDataState }) {
    const [menuOuvert, setMenuOuvert] = useState(false);

    const trierParNom = () => {
        const triedData = {
            ...dataState,
            taches: [...dataState.taches].sort((a, b) => a.title.localeCompare(b.title))
        };
        setDataState(triedData);
        setMenuOuvert(false);
    };

    const trierParDateCreation = () => {
        const triedData = {
            ...dataState,
            taches: [...dataState.taches].sort((a, b) => a.date_creation.localeCompare(b.date_creation))
        };
        setDataState(triedData);
        setMenuOuvert(false);
    };

    const trierParDateEcheance = () => {
        const triedData = {
            ...dataState,
            taches: [...dataState.taches].sort((a, b) => a.date_echeance.localeCompare(b.date_echeance))
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
                    <button onClick={trierParDateCreation}>Par date de création</button>
                    <button onClick={trierParDateEcheance}>Par date d'échéance</button>
                </div>
            )}
        </div>
    );
}

// Composant pour le filtrage des tâches
export function FiltreTaches({ dataState, setDataState }) {
    const [menuOuvert, setMenuOuvert] = useState(false);
    const [filtresActifs, setFiltresActifs] = useState({
        categories: [],
        etats: [],
        urgent: null,
        termine: null
    });

    // Récupération des catégories disponibles
    const categories = dataState.categories || [];
    
    // États possibles
    const etats = ["Nouveau", "En attente", "Reussi"];

    const appliquerFiltres = () => {
        // Filtres combinés sur les tâches
        let tachesFiltrees = [...dataState.taches];
        
        // Filtre par catégories
        if (filtresActifs.categories.length > 0) {
            tachesFiltrees = tachesFiltrees.filter(tache => {
                // Trouver les relations pour cette tâche
                const relationsCategories = dataState.relations
                    .filter(relation => relation.tache === tache.id)
                    .map(relation => relation.categorie);
                
                // Vérifier si une des catégories filtrées est liée à cette tâche
                return filtresActifs.categories.some(catId => 
                    relationsCategories.includes(catId)
                );
            });
        }
        
        // Filtre par états
        if (filtresActifs.etats.length > 0) {
            tachesFiltrees = tachesFiltrees.filter(tache => 
                filtresActifs.etats.includes(tache.etat)
            );
        }
        
        // Filtre par urgence
        if (filtresActifs.urgent !== null) {
            tachesFiltrees = tachesFiltrees.filter(tache => 
                tache.urgent === filtresActifs.urgent
            );
        }
        
        // Filtre par état terminé/non-terminé (Reussi/pas Reussi)
        if (filtresActifs.termine !== null) {
            tachesFiltrees = tachesFiltrees.filter(tache => 
                (tache.etat === "Reussi") === filtresActifs.termine
            );
        }
        
        // Mettre à jour l'affichage avec les tâches filtrées
        // Note: Nous ne modifions pas dataState directement pour garder les données originales
        // Cette fonction pourrait être modifiée selon la structure de votre application
        setDataState({
            ...dataState,
            tachesFiltrees: tachesFiltrees // Propriété temporaire pour afficher les tâches filtrées
        });
        
        setMenuOuvert(false);
    };

    const toggleCategorie = (catId) => {
        setFiltresActifs(prev => {
            const newCategories = prev.categories.includes(catId)
                ? prev.categories.filter(id => id !== catId)
                : [...prev.categories, catId];
            
            return { ...prev, categories: newCategories };
        });
    };

    const toggleEtat = (etat) => {
        setFiltresActifs(prev => {
            const newEtats = prev.etats.includes(etat)
                ? prev.etats.filter(e => e !== etat)
                : [...prev.etats, etat];
            
            return { ...prev, etats: newEtats };
        });
    };

    const toggleUrgent = (valeur) => {
        setFiltresActifs(prev => ({
            ...prev,
            urgent: prev.urgent === valeur ? null : valeur
        }));
    };

    const toggleTermine = (valeur) => {
        setFiltresActifs(prev => ({
            ...prev,
            termine: prev.termine === valeur ? null : valeur
        }));
    };

    const reinitialiserFiltres = () => {
        setFiltresActifs({
            categories: [],
            etats: [],
            urgent: null,
            termine: null
        });
        
        // Réinitialiser l'affichage
        setDataState({
            ...dataState,
            tachesFiltrees: undefined
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
                        <h4>Catégories</h4>
                        <div className="options-filtre">
                            {categories.map(cat => (
                                <label key={cat.id} className="option-checkbox">
                                    <input 
                                        type="checkbox" 
                                        checked={filtresActifs.categories.includes(cat.id)}
                                        onChange={() => toggleCategorie(cat.id)}
                                    />
                                    <span style={{ color: cat.color }}>{cat.title}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    
                    <div className="section-filtre">
                        <h4>États</h4>
                        <div className="options-filtre">
                            {etats.map(etat => (
                                <label key={etat} className="option-checkbox">
                                    <input 
                                        type="checkbox" 
                                        checked={filtresActifs.etats.includes(etat)}
                                        onChange={() => toggleEtat(etat)}
                                    />
                                    <span>{etat}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    
                    <div className="section-filtre">
                        <h4>Urgence</h4>
                        <div className="options-filtre">
                            <label className="option-checkbox">
                                <input 
                                    type="checkbox" 
                                    checked={filtresActifs.urgent === true}
                                    onChange={() => toggleUrgent(true)}
                                />
                                <span>Urgent</span>
                            </label>
                            <label className="option-checkbox">
                                <input 
                                    type="checkbox" 
                                    checked={filtresActifs.urgent === false}
                                    onChange={() => toggleUrgent(false)}
                                />
                                <span>Non urgent</span>
                            </label>
                        </div>
                    </div>
                    
                    <div className="section-filtre">
                        <h4>Statut</h4>
                        <div className="options-filtre">
                            <label className="option-checkbox">
                                <input 
                                    type="checkbox" 
                                    checked={filtresActifs.termine === true}
                                    onChange={() => toggleTermine(true)}
                                />
                                <span>Terminé</span>
                            </label>
                            <label className="option-checkbox">
                                <input 
                                    type="checkbox" 
                                    checked={filtresActifs.termine === false}
                                    onChange={() => toggleTermine(false)}
                                />
                                <span>Non terminé</span>
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