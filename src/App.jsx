import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
const stu={
  pre:"koussay",
  nom:"rais",
  email:"kousay2009a@gmail.com",
  tel:"+216 27 438 803",
  fil:"GLSI",
  annetu:"2 eme année",
  grp:"GLSI 2 B",
  ville:"nabeul",

};

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <h1>Fiche etudiant</h1>
      <p>
        <img src="img1.jpeg" alt="" />
      </p>
      <p>
        <strong>Nom & Prènom :</strong> {stu.pre} {stu.nom}
      </p>
      <p>
         <strong>Email :</strong> {stu.email}
      </p>
      <p>
         <strong>Telephone :</strong> {stu.tel}
      </p>
      <p>
         <strong>filiere :</strong> {stu.fil}
      </p>
      <p>
         <strong>Annee d'etude :</strong> {stu.annetu}
      </p>
      <p>
         <strong>groupe :</strong> {stu.grp}
      </p>
      <p>
         <strong>ville :</strong> {stu.ville}
      </p>
      <p>
        <button type="submit">Contacter</button>
      </p>

       </div>
    
      
  )
}

export default App
