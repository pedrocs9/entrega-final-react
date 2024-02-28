import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() { 
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:category" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1>404 Instrumento no encontrado :(.</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;