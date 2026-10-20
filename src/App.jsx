import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from "./components/hedear.jsx";
import Navbar from "./components/navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/footer.jsx";
import "./App.css";

const students = [
  {
    id: 1,
    nom: "koussay rais",
    email: "kousay2009a@gmail.com",
    tel: "+216 27 438 803",
    filiere: "Génie logiciel et systèmes d'information",
    annee: "2026/2027",
    groupe: "GLSI2B",
    ville: "Mahdia",
    image: "img1.jpeg",
  },
  {
    id: 2,
    nom: "Slim Boubaker",
    email: "slim.boubaker@example.com",
    tel: "+216 20 111 222",
    filiere: "Informatique",
    annee: "2026/2027",
    groupe: "GLSI2B",
    ville: "Mahdia",
    image: "img2.png",
  },
  {
    id: 3,
    nom: "Sarra Trabelsi",
    email: "sarra.trabelsi@example.com",
    tel: "+216 21 333 444",
    filiere: "Génie logiciel",
    annee: "2026/2027",
    groupe: "GLSI2B",
    ville: "Sousse",
    image: "img3.png",
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />

      <main className="container" id="etudiants">
        <h2 className="section-title">Liste des étudiants</h2>

        <p className="section-description">
          Année universitaire 2026/2027 — GLSI 2
        </p>

        <section className="students-list">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              nom={student.nom}
              email={student.email}
              tel={student.tel}
              filiere={student.filiere}
              annee={student.annee}
              groupe={student.groupe}
              ville={student.ville}
              image={student.image}
            />
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
