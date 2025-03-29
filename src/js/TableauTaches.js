import {Tache} from "./Tache";

export function Tableautaches({ data, setDataState }) {
    // Utilise les tâches filtrées si disponibles, sinon utilise toutes les tâches
    const tachesAffichees = data.tachesFiltrees || data.taches;

    return (
        <section className={'Tableautaches'}>
            {tachesAffichees.length > 0 ? (
                tachesAffichees.map(tache => (
                    <Tache 
                        key={tache.id} 
                        id={tache.id} 
                        data={data} 
                        setDataState={setDataState} 
                    />
                ))
            ) : (
                <div className="message-aucune-tache">
                    <p>Aucune tâche ne correspond à vos critères</p>
                </div>
            )}
        </section>
    );
}