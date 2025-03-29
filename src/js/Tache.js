export function Tache({ id, data, setDataState }) {
    const { title, description, date_creation, date_echeance, etat, urgent } = data.taches.find(tache => tache.id === id);
    
    // Vérifie si la tâche est terminée
    const estTerminee = etat === "Reussi";
    
    // Gère le changement d'état
    const handleChangeEtat = (e) => {
        const nouvelEtat = e.target.value;
        
        // Mettre à jour les données
        const tachesModifiees = data.taches.map(tache => 
            tache.id === id ? { ...tache, etat: nouvelEtat } : tache
        );
        
        setDataState({
            ...data,
            taches: tachesModifiees
        });
    };
    
    return (
        <article className={'tache'}>
            <div className="tache-content">
                <div className="tache-header">
                    <h3 className={estTerminee ? "titre-termine" : ""}>
                        {title}
                    </h3>
                    {urgent && <span className="badge-urgent">Urgent</span>}
                </div>
                
                <p className="tache-description">{description}</p>
                
                <div className="tache-details">
                    <div className="tache-dates">
                        <span>Créé le: {date_creation}</span>
                        <span>Échéance: {date_echeance}</span>
                    </div>
                    
                    <div className="tache-status">
                        <select 
                            value={etat} 
                            onChange={handleChangeEtat}
                        >
                            <option value="Nouveau">NOUVEAU</option>
                            <option value="En attente">EN ATTENTE</option>
                            <option value="Reussi">REUSSI</option>
                        </select>
                    </div>
                </div>
            </div>
        </article>
    );
}