import { AjoutCategorieManager } from "./handleAjouterCategorie";
import { TriCategories, FiltreCategories } from "./TrierFiltrerCategories";

export function TrierfiltrerboutonsCategories({ dataState, setDataState }) {
    return (
        <section className={'Trierfiltrerboutons'}>
            <TriCategories dataState={dataState} setDataState={setDataState} />
            <AjoutCategorieManager dataState={dataState} setDataState={setDataState} />
            <FiltreCategories dataState={dataState} setDataState={setDataState} />
        </section>
    );
} 