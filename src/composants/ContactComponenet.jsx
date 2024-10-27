import React, { useState } from 'react';

function ContactComponent() {
  const [city, setCity] = useState('');
  const [cities, setCities] = useState([]);

  // Fonction pour ajouter une ville
  const addVille = () => {
    if (city.trim()) { // Vérifie que le champ n'est pas vide
      setCities([...cities, city]);
      setCity(''); // Réinitialise le champ après l'ajout
    }
  };

  // Fonction pour supprimer une ville
  const removeVille = (index) => {
    const updatedCities = cities.filter((_, i) => i !== index);
    setCities(updatedCities);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 w-50">
        <h4 className="text-center mb-4">TODO List Application</h4>
        <div className="mb-3">
          <label htmlFor="ville" className="form-label">Enter a City: </label>
          <input
            type="text"
            id="ville"
            name="ville"
            className="form-control"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button className="btn btn-secondary w-100 mb-3" onClick={addVille}>Add</button>

        <div>
          
          {cities.map((ville, index) => (
            <div key={index} className="d-flex align-items-center justify-content-between border-bottom py-2">
              <p className="mb-0">{ville}</p>
              <button className="btn btn-danger btn-sm" onClick={() => removeVille(index)}>
                Delete
              </button>
            </div>
          ))}
        </div>

        <h5 className="mt-4 text-center">Total of Cities: {cities.length}</h5>
      </div>
    </div>
  );
}

export default ContactComponent;
