import { AjoutTacheManager } from "./handleAjouterTache";
import { TriTaches, FiltreTaches } from "./TrisEtFiltres";

export function Trierfiltrerboutons({ dataState, setDataState }) {
    return (
        <section className={'Trierfiltrerboutons'}>
            <TriTaches dataState={dataState} setDataState={setDataState} />
            <AjoutTacheManager dataState={dataState} setDataState={setDataState} />
            <FiltreTaches dataState={dataState} setDataState={setDataState} />
        </section>
    );
}