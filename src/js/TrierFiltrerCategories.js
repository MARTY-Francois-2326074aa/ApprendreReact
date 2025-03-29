export function TriCategories({ dataState, setDataState }) {
    const handleTri = (type) => {
        const categoriesTriees = [...dataState.categories].sort((a, b) => {
            if (type === 'nom') {
                return a.title.localeCompare(b.title);
            }
            return 0;
        });
        
        setDataState({
            ...dataState,
            categories: categoriesTriees
        });
    };
    
    return (
        <div className="tri-menu">
            <button onClick={() => handleTri('nom')} className="bouton-secondaire">
                Trier par nom
            </button>
        </div>
    );
}

export function FiltreCategories({ dataState, setDataState }) {
    const handleFiltre = (type) => {
        let categoriesFiltrees = [...dataState.categories];
        
        if (type === 'actif') {
            categoriesFiltrees = categoriesFiltrees.filter(categorie => categorie.actif);
        } else if (type === 'inactif') {
            categoriesFiltrees = categoriesFiltrees.filter(categorie => !categorie.actif);
        }
        
        setDataState({
            ...dataState,
            categories: categoriesFiltrees
        });
    };
    
    return (
        <div className="filtre-menu">
            <button onClick={() => handleFiltre('actif')} className="bouton-secondaire">
                Filtrer actifs
            </button>
            <button onClick={() => handleFiltre('inactif')} className="bouton-secondaire">
                Filtrer inactifs
            </button>
        </div>
    );
} 