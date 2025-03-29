import {Tabs} from "./Tabs.js";

export function Footer() {
    return (
        <footer>
            <p onClick={() => Tabs("Taches")}>Liste des taches</p>
            <p onClick={() => Tabs("Categorie")}>Categorie</p>
        </footer>
    );
}