import cross from '../images/cross.png';

export function Header({ dataState }) {
    return (
        <header className="App-header">
            <img src={cross} className="App-logo" alt="logo" />
            <h1>{`${dataState.taches.length} Taches`}</h1>
        </header>
    );
}