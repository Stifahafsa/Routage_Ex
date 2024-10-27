import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutComponent() {
  // État pour stocker les cases cochées
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  // Fonction pour gérer le clic sur les cases à cocher
  const handleCheckboxChange = (language) => {
    if (!selectedLanguages.includes(language)) {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {/* Section des cases à cocher */}
        <div className="col-md-4">
          <h4 className="text-primary">Choix Langages :</h4>
          <div className="list-group">
            {["HTML", "C++", "Javascript", "Kotlin", "Python", "Php"].map((language) => (
              <div key={language} className="list-group-item d-flex align-items-center">
                <input
                  type="checkbox"
                  id={language}
                  onChange={() => handleCheckboxChange(language)}
                  disabled={selectedLanguages.includes(language)}
                  className="me-2"
                />
                <label
                  htmlFor={language}
                  className="m-0"
                  style={{
                    textDecoration: selectedLanguages.includes(language) ? 'line-through' : 'none',
                    color: selectedLanguages.includes(language) ? '#888' : '#000',
                  }}
                >
                  {language}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Section des langues sélectionnées */}
        <div className="col-md-4">
          <h4 className="text-primary">Langages Sélectionnés :</h4>
          <ul className="list-group">
            {selectedLanguages.map((language) => (
              <li
                key={language}
                className="list-group-item"
                style={{ color: '#444' }}
              >
                {language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
