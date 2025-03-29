import { CategoriePopup } from './CategoriePopup';
import { useState } from 'react';
import { createPortal } from 'react-dom';

export function AjoutCategorieManager({ dataState, setDataState }) {
    const [showPopup, setShowPopup] = useState(false);
    
    const handleOpenPopup = () => {
        setShowPopup(true);
    };
    
    const handleClosePopup = () => {
        setShowPopup(false);
    };
    
    const handleSubmitCategorie = (formData) => {
        const nouvelleCategorie = {
            id: dataState.categories.length > 0 ? Math.max(...dataState.categories.map(c => c.id)) + 1 : 201,
            title: formData.title,
            color: formData.color,
            actif: formData.actif
        };
        
        const updatedData = { ...dataState, categories: [...dataState.categories, nouvelleCategorie] };
        setDataState(updatedData);
        setShowPopup(false);
    };
    
    return (
        <div className="ajout-menu">
            <button onClick={handleOpenPopup} className="bouton-principal">
                Ajout
            </button>
            {showPopup && createPortal(
                <CategoriePopup onSubmit={handleSubmitCategorie} onCancel={handleClosePopup} />,
                document.body
            )}
        </div>
    );
} 