export function Categorie({ id, data, setDataState }) {
    const { title, color, actif } = data.categories.find(categorie => categorie.id === id);
    
    // Gère le changement d'état actif/inactif
    const handleChangeActif = () => {
        // Mettre à jour les données
        const categoriesModifiees = data.categories.map(categorie => 
            categorie.id === id ? { ...categorie, actif: !actif } : categorie
        );
        
        setDataState({
            ...data,
            categories: categoriesModifiees
        });
    };
    
    return (
        <article className={'categorie'}>
            <div className="categorie-content" style={{ borderLeft: `4px solid ${color}` }}>
                <div className="categorie-header">
                    <h3 className={!actif ? "titre-inactif" : ""}>
                        {title}
                    </h3>
                    <div 
                        className="categorie-color-indicator" 
                        style={{ backgroundColor: color }}
                        title={`Couleur: ${color}`}
                    ></div>
                </div>
                
                <div className="categorie-actions">
                    <label className="switch">
                        <input 
                            type="checkbox" 
                            checked={actif} 
                            onChange={handleChangeActif}
                        />
                        <span className="slider round"></span>
                    </label>
                    <span className="status-label">{actif ? 'Actif' : 'Inactif'}</span>
                </div>
            </div>
        </article>
    );
} 