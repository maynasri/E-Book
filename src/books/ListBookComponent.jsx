import { useState } from "react";
import AddBookComponent from "./AddBookComponent";
import EditBookComponent from "./EditBookComponent";

function ListBookComponent() {
  const [action, setAction] = useState("");
  const [Books, setBooks] = useState([]);
  const [EditedBook, setEditedBook] = useState(null); 

  const getBookEdited = (BookId) => {
    const book = Books.find((book) => book.id === BookId);
    return book;
  };

  const editBook = (bookId) => {
    const bookEdited = getBookEdited(bookId);
    setEditedBook(bookEdited); 
    setAction("edit");
  };


  const updateBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => {
        if (book.id === updatedBook.id) {
          return updatedBook; 
        }
      })
    );
    setAction(""); 
  };


  const addNewBook = (newBook) => {
    newBook.id = Books.length > 0 ? Books[Books.length - 1].id + 1 : 1;
    setBooks([...Books, newBook]);
    setAction("");
  };

  
  return (
    <>
      <button
        className="ui inverted blue button"
        onClick={() => setAction("add")}
      >
        Ajouter un livre
      </button>
      {action === "add" && <AddBookComponent addNewBookRef={addNewBook} />}
      {action === "edit" && <EditBookComponent editBookRef={EditedBook} updateBookRef={updateBook}/>}

      <table className="ui blue table">
        <thead>
          <tr>
            <th>#</th>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Editer</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {Books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.titre}</td>
              <td>{book.auteur}</td>
              <td>
                <button
                  className="ui green button"
                  onClick={() => editBook(book.id)}
                  
                >
                  Editer
                </button>
              

              </td>
              <td>
                <button className="ui red button">Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListBookComponent;
