import { useState } from "react";
import "./StudentForm.css";

function StudentForm({
  onAjouterEtudiant,
  etudiantAModifier,
  onModifierEtudiant,
}) {
  const [nom, setNom] = useState(etudiantAModifier?.nom || "");
  const [prenom, setPrenom] = useState(etudiantAModifier?.prenom || "");
  const [email, setEmail] = useState(etudiantAModifier?.email || "");
  const [telephone, setTelephone] = useState(
    etudiantAModifier?.telephone || etudiantAModifier?.tel || ""
  );
  const [filiere, setFiliere] = useState(etudiantAModifier?.filiere || "");
  const [anneeEtude, setAnneeEtude] = useState(
    etudiantAModifier?.anneeEtude || etudiantAModifier?.annee || ""
  );
  const [groupe, setGroupe] = useState(etudiantAModifier?.groupe || "");
  const [ville, setVille] = useState(etudiantAModifier?.ville || "");
  const [image, setImage] = useState(etudiantAModifier?.image || "");
  const [erreurs, setErreurs] = useState({});

  function validerFormulaire() {
    const nouvellesErreurs = {};

    if (!nom.trim()) {
      nouvellesErreurs.nom = "Nom est obligatoire";
    }
    if (!prenom.trim()) {
      nouvellesErreurs.prenom = "Prenom est obligatoire";
    }
    if (!email.trim()) {
      nouvellesErreurs.email = "Email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nouvellesErreurs.email = "Format d'email invalide";
    }
    if (!telephone.trim()) {
      nouvellesErreurs.telephone = "Telephone est obligatoire";
    }

    setErreurs(nouvellesErreurs);
    return Object.keys(nouvellesErreurs).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validerFormulaire()) {
      return;
    }

    const nouvelEtudiant = {
      nom: nom.trim(),
      prenom: prenom.trim(),
      email: email.trim(),
      telephone: telephone.trim(),
      filiere,
      anneeEtude: anneeEtude.trim(),
      groupe: groupe.trim(),
      ville: ville.trim(),
      image,
    };

    if (etudiantAModifier) {
      onModifierEtudiant({
        ...etudiantAModifier,
        ...nouvelEtudiant,
      });
    } else {
      onAjouterEtudiant(nouvelEtudiant);
      setNom("");
      setPrenom("");
      setEmail("");
      setTelephone("");
      setFiliere("");
      setAnneeEtude("");
      setGroupe("");
      setVille("");
      setImage("");
      setErreurs({});
    }
  }

  return (
    <form onSubmit={handleSubmit} className="student-form" noValidate>
      <h2>
        {etudiantAModifier ? "Modifier l'étudiant" : "Ajouter un étudiant"}
      </h2>

      <div className="form-group">
        <label htmlFor="nom">Nom :</label>
        <input
          type="text"
          id="nom"
          name="nom"
          placeholder="Saisir votre nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        {erreurs.nom && <p className="error-msg">{erreurs.nom}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="pre">Prénom :</label>
        <input
          type="text"
          id="pre"
          name="pre"
          placeholder="Saisir votre prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        {erreurs.prenom && <p className="error-msg">{erreurs.prenom}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Saisir votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {erreurs.email && <p className="error-msg">{erreurs.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="tel">Téléphone :</label>
        <input
          type="tel"
          id="tel"
          name="tel"
          placeholder="Saisir votre numéro de tél"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        {erreurs.telephone && <p className="error-msg">{erreurs.telephone}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="fil">Filière :</label>
        <select
          name="fil"
          id="fil"
          value={filiere}
          onChange={(e) => setFiliere(e.target.value)}
        >
          <option value="">Choisir une filière</option>
          <option value="GLSI">GLSI</option>
          <option value="DSI">DSI</option>
          <option value="RSI">RSI</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="ann">Année d'étude :</label>
        <input
          type="text"
          id="ann"
          name="ann"
          placeholder="Saisir votre année d'étude"
          value={anneeEtude}
          onChange={(e) => setAnneeEtude(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="grp">Groupe :</label>
        <input
          type="text"
          id="grp"
          name="grp"
          placeholder="Saisir votre groupe"
          value={groupe}
          onChange={(e) => setGroupe(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="ville">Ville :</label>
        <input
          type="text"
          id="ville"
          name="ville"
          placeholder="Saisir votre ville"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="imag">Image :</label>
        <input
          type="file"
          id="imag"
          name="imag"
          accept="image/*"
          onChange={(e) => {
            const fichier = e.target.files[0];
            if (fichier) {
              setImage(URL.createObjectURL(fichier));
            }
          }}
        />
      </div>

      <button type="submit" className="btn-submit">
        {etudiantAModifier ? "Modifier" : "Ajouter"}
      </button>
      <button type="reset">Réinitialiser</button>
    </form>
  );
}

export default StudentForm;