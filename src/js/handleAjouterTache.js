import { TachePopup } from './TachePopup';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export function AjoutTacheManager({ dataState, setDataState }) {
    const [showPopup, setShowPopup] = useState(false);
    
    const handleOpenPopup = () => {
        setShowPopup(true);
    };
    
    const handleClosePopup = () => {
        setShowPopup(false);
    };
    
    const handleSubmitTache = (formData) => {
        const newTache = {
            id: dataState.taches.length > 0 ? Math.max(...dataState.taches.map(t => t.id)) + 1 : 101,
            title: formData.title,
            description: formData.description,
            date_creation: new Date().toISOString().split('T')[0],
            date_echeance: formData.date_echeance,
            etat: formData.etat,
            urgent: formData.urgent
        };
        
        const updatedData = { ...dataState, taches: [...dataState.taches, newTache] };
        setDataState(updatedData);
        setShowPopup(false);
    };
    
    return (
        <div className="ajout-menu">
            <button onClick={handleOpenPopup} className="bouton-principal">
                Ajout
            </button>
            {showPopup && createPortal(
                <TachePopup onSubmit={handleSubmitTache} onCancel={handleClosePopup} />,
                document.body
            )}
        </div>
    );
}