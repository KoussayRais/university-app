import { useState } from "react";
import Header from "./components/hedear.jsx";
import Navbar from "./components/navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/footer.jsx";
import StudentForm from "./components/StudentForm.jsx";
import "./App.css";

function App() {
  const [recherche, setRecherche] = useState("");
  const [etudiantAModifier, setEtudiantAModifier] = useState(null);

  const [etudiants, setEtudiants] = useState([
    {
      id: 1,
      nom: "koussay",
      prenom: "rais",
      email: "kousay2009a@gmail.com",
      telephone: "+216 27 438 803",
      filiere: "GLSI",
      anneeEtude: "2026/2027",
      groupe: "GLSI2B",
      ville: "Mahdia",
      image: "img1.jpeg",
    },
    {
      id: 2,
      nom: "Slim",
      prenom: "Boubaker",
      email: "slim.boubaker@example.com",
      telephone: "+216 20 111 222",
      filiere: "DSI",
      anneeEtude: "2026/2027",
      groupe: "GLSI2B",
      ville: "Mahdia",
      image: "img2.png",
    },
    {
      id: 3,
      nom: "Sarra",
      prenom: "Trabelsi",
      email: "sarra.trabelsi@example.com",
      telephone: "+216 21 333 444",
      filiere: "RSI",
      anneeEtude: "2026/2027",
      groupe: "GLSI2B",
      ville: "Sousse",
      image: "img3.png",
    },
  ]);

  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now(),
    };
    setEtudiants((anciensEtudiants) => [...anciensEtudiants, etudiantAvecId]);
  }
  function supprimerEtudiant(id) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.filter((etudiant) => etudiant.id !== id)
    );
    if (etudiantAModifier?.id === id) {
      setEtudiantAModifier(null);
    }
  }
 function modifierEtudiant(etudiant) {
    setEtudiantAModifier(etudiant);
  }

  function enregistrerModification(etudiantModifie) {
    setEtudiants((anciensEtudiants) =>
      anciensEtudiants.map((etudiant) =>
        etudiant.id === etudiantAModifier.id
          ? { ...etudiantModifie, id: etudiant.id }
          : etudiant
      )
    );
    setEtudiantAModifier(null);
  }

  return (
    <div className="app">
      <Header />
      <Navbar />

      <StudentForm
        key={etudiantAModifier ? etudiantAModifier.id : "nouveau"}
        onAjouterEtudiant={ajouterEtudiant}
        etudiantAModifier={etudiantAModifier}
        onModifierEtudiant={enregistrerModification}
      />

      <main className="container" id="etudiants">
        <h2 className="section-title">Liste des étudiants</h2>
        <p className="section-description">
          Année universitaire 2026/2027 — GLSI 2
        </p>

        <div>
          <input
            type="text"
            placeholder="Recherche par filiere"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
        </div>

        <section className="students-list">
          {etudiants
            .filter((etudiant) => {
              const terme = recherche.toLowerCase();
              return (
                etudiant.filiere.toLowerCase().includes(terme) ||
                etudiant.nom.toLowerCase().includes(terme) ||
                etudiant.prenom.toLowerCase().includes(terme)
              );
            })
            .map((etudiant) => (
              <StudentCard
                key={etudiant.id}
                etudiant={etudiant}
                onSupprimer={supprimerEtudiant}
                onModifier={modifierEtudiant}
              />
            ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;