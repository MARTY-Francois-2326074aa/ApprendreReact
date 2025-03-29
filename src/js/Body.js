import '../css/App.css';
import { Trierfiltrerboutons } from './Trierfiltrerboutons';
import { Tableautaches } from './TableauTaches';
import { TrierfiltrerboutonsCategories } from './TrierfiltrerboutonsCategories';
import { TableauCategories } from './TableauCategories';

export function Body({ dataState, setDataState }) {
    return (
        <main>
            <section className={'BodyTaches'}>
                <h2>Ma liste de taches</h2>
                <>
                    <Trierfiltrerboutons dataState={dataState} setDataState={setDataState} />
                    <Tableautaches data={dataState} setDataState={setDataState} />
                </>
            </section>
            <section className={'BodyCategories hidden'}>
                <h2>Mes catégories</h2>
                <>
                    <TrierfiltrerboutonsCategories dataState={dataState} setDataState={setDataState} />
                    <TableauCategories data={dataState} setDataState={setDataState} />
                </>
            </section>
        </main>
    );
}