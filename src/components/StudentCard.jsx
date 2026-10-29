import { useState } from "react";

function StudentCard(props) {
  const[coordonnesVisibles,setcoordonnesVisibles]=useState(false);
  
  function basculerInfo(){
    setcoordonnesVisibles(!coordonnesVisibles)
  }
  return (
    <div className="container">
      <div className="fiche">
       
        <img src={props.image} alt="photo d'etudiant" className="student-image" />
        <h3>Fiche étudiant</h3>
        <strong>Nom  :</strong> {props.nom} <br/>
        <strong>Prénom  :</strong> {props.prenom} <br/>
        {coordonnesVisibles &&(
        <div>
        <strong>Email :</strong> {props.email}<br />
        <strong>Téléphone :</strong> {props.tel}<br/>
        </div>
        )};
        <strong>Filière :</strong> {props.filiere}<br/>
        <strong>Année d'étude :</strong> {props.annee}<br/>
        <strong>Groupe :</strong> {props.groupe}<br/>
        <strong>Ville :</strong> {props.ville}<br/>

        <a href={`mailto:${props.email}`} className="btn-contact">
          <button>Contacter</button>
          
          
        </a>
        <button onClick={basculerInfo}>
          {coordonnesVisibles
          ?"masquer les cordonnes"
          :"afficher les cordonnes"

          }
        </button>

      </div>
    </div>
  )
}

export default StudentCard