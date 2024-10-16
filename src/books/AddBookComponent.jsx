import { useState } from "react";

function AddBookComponent({addNewBookRef}){
    const [Book, setBook] = useState(
        {
            titre:"",
            auteur :"",
        }
    );
    const inputChangeHandler = ({target})=>{
        setBook({...Book, [target.name] : target.value})
        console.log(Book);
    }
  
    return(
<>
<h3>Ajouter un livre</h3>
<br />
        <form className="ui form" 
        onSubmit={(evt)=>{
          evt.preventDefault();
          addNewBookRef(Book);
          console.log(Book)
      }}>


        <div className="field">
          <label>Titre</label>
          <input type="text" name="titre" placeholder="Titre de livre" value={Book.titre} onChange={(evt)=>inputChangeHandler(evt)} />
        </div>
        <div className="field">
          <label>Auteur</label>
          <input type="text" name="auteur" placeholder="Nom de l'auteur" value={Book.auteur} onChange={(evt)=>inputChangeHandler(evt)}/>
        </div>
        <button className="ui blue button" type="submit">Ajouter</button>
        </form> 
        </> );
}

export default AddBookComponent;