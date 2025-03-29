import { useState } from 'react';

export function CategoriePopup({ onSubmit, onCancel }) {
    const [title, setTitle] = useState('');
    const [color, setColor] = useState('#3498db');
    const [actif, setActif] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title,
            color,
            actif
        });
    };

    return (
        <div className="popup-overlay">
            <div className="categorie-popup">
                <h2>Ajouter une nouvelle catégorie</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Titre:</label>
                        <input 
                            type="text" 
                            id="title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            minLength="3"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="color">Couleur:</label>
                        <div className="color-picker-container">
                            <input 
                                type="color" 
                                id="color" 
                                value={color} 
                                onChange={(e) => setColor(e.target.value)}
                                className="color-picker"
                            />
                            <span className="color-value">{color}</span>
                        </div>
                    </div>
                    
                    <div className="form-group checkbox-group">
                        <label htmlFor="actif">Actif:</label>
                        <input 
                            type="checkbox" 
                            id="actif" 
                            checked={actif} 
                            onChange={(e) => setActif(e.target.checked)}
                        />
                    </div>
                    
                    <div className="popup-buttons">
                        <button type="submit" className="btn-save">Enregistrer</button>
                        <button type="button" className="btn-cancel" onClick={onCancel}>Annuler</button>
                    </div>
                </form>
            </div>
        </div>
    );
} 