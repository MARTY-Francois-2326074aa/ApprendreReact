import { useState } from 'react';

export function TachePopup({ onSubmit, onCancel }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dateEcheance, setDateEcheance] = useState(new Date().toISOString().split('T')[0]);
    const [etat, setEtat] = useState('Nouveau');
    const [urgent, setUrgent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title,
            description,
            date_echeance: dateEcheance,
            etat,
            urgent
        });
    };

    return (
        <div className="popup-overlay">
            <div className="task-popup">
                <h2>Ajouter une nouvelle tâche</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Titre:</label>
                        <input 
                            type="text" 
                            id="title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <textarea 
                            id="description" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)}
                            rows="3"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="dateEcheance">Date d'échéance:</label>
                        <input 
                            type="date" 
                            id="dateEcheance" 
                            value={dateEcheance} 
                            onChange={(e) => setDateEcheance(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="etat">État:</label>
                        <select 
                            id="etat" 
                            value={etat} 
                            onChange={(e) => setEtat(e.target.value)}
                        >
                            <option value="Nouveau">Nouveau</option>
                            <option value="En attente">En attente</option>
                            <option value="Reussi">Réussi</option>
                        </select>
                    </div>
                    
                    <div className="form-group checkbox-group">
                        <label htmlFor="urgent">Urgent:</label>
                        <input 
                            type="checkbox" 
                            id="urgent" 
                            checked={urgent} 
                            onChange={(e) => setUrgent(e.target.checked)}
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