import { useEffect, useState } from "react";

function EditBookComponent({editBookRef,updateBookRef}){
  const [Book, setBook] = useState(
    {
        titre:"",
        auteur :"",
    }
);

 useEffect(() => {
  if (editBookRef) {
    console.log(editBookRef)
    setBook(editBookRef); 
  }
}, [editBookRef]); 

  const inputChangeHandler = ({target})=>{
    setBook({...Book, [target.name] : target.value})
    console.log(Book);
}

const handleSubmit = (event) => {
  event.preventDefault(); // Empêcher le rechargement de la page
  updateBookRef(Book); // Envoyer les données mises à jour au parent
};

    return(
      
        <>
        <h3>Modifier un livre</h3>
        <br />
                <form className="ui form" onSubmit={handleSubmit}
              >
                <div className="field">
                  <label>Titre</label>
                  <input type="text" name="titre"  value={Book.titre} onChange={(evt)=>inputChangeHandler(evt)} />
                </div>
                <div className="field">
                  <label>Auteur</label>
                  <input type="text" name="auteur"  value={Book.auteur} onChange={(evt)=>inputChangeHandler(evt)}/>
                </div>
              
                <button className="ui blue button" type="submit">Modifier</button>
                </form> 
                </>
    );
}

export default EditBookComponent;