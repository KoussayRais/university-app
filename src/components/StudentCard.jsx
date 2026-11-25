import { useState } from "react";

function StudentCard({ etudiant, onModifier, onSupprimer }) {
  const [coordonnesVisibles, setCoordonnesVisibles] = useState(false);

  function basculerInfo() {
    setCoordonnesVisibles(!coordonnesVisibles);
  }

  return (
    <div className="container">
      <div className="fiche">
        <img
          src={etudiant.image}
          alt="photo d'etudiant"
          className="student-image"
        />
        <h3>Fiche étudiant</h3>
        <strong>Nom :</strong> {etudiant.nom} <br />
        <strong>Prénom :</strong> {etudiant.prenom} <br />
        {coordonnesVisibles && (
          <div>
            <strong>Email :</strong> {etudiant.email}
            <br />
            <strong>Téléphone :</strong> {etudiant.telephone || etudiant.tel}
            <br />
          </div>
        )}
        <strong>Filière :</strong> {etudiant.filiere}
        <br />
        <strong>Année d'étude :</strong> {etudiant.anneeEtude || etudiant.annee}
        <br />
        <strong>Groupe :</strong> {etudiant.groupe}
        <br />
        <strong>Ville :</strong> {etudiant.ville}
        <br />

        <a href={`mailto:${etudiant.email}`} className="btn-contact">
          <button type="button">Contacter</button>
        </a>
        <button type="button" onClick={basculerInfo}>
          {coordonnesVisibles
            ? "masquer les cordonnes"
            : "afficher les cordonnes"}
        </button>
        <button type="button" onClick={() => onSupprimer(etudiant.id)}>
          suprimer
        </button>
        <button type="button" onClick={() => onModifier(etudiant)}>
          modifier
        </button>
      </div>
    </div>
  );
}

export default StudentCard;