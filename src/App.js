
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import ListBookComponent from './books/ListBookComponent';
import AddBookComponent from './books/AddBookComponent';
import EditBookComponent from './books/EditBookComponent';


function App() {
  return (
    <>
    <center>
    <h1>
      Application de gestion des livres électroniques
    </h1>
    </center>

    <Router>
      <Routes>
        <Route path="/" element={<ListBookComponent/>}/>
        <Route path="/addBook" element={<AddBookComponent/>}/>
        <Route path="/editBook" element={<EditBookComponent/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
