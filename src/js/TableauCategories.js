import { Categorie } from "./Categorie";

export function TableauCategories({ data, setDataState }) {
    // Utilise les catégories filtrées si disponibles, sinon utilise toutes les catégories
    const categoriesAffichees = data.categoriesFiltrees || data.categories;

    return (
        <section className={'TableauCategories'}>
            {categoriesAffichees.length > 0 ? (
                categoriesAffichees.map(categorie => (
                    <Categorie 
                        key={categorie.id} 
                        id={categorie.id} 
                        data={data} 
                        setDataState={setDataState} 
                    />
                ))
            ) : (
                <div className="message-aucune-categorie">
                    <p>Aucune catégorie ne correspond à vos critères</p>
                </div>
            )}
        </section>
    );
} 