import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";
import LogoImg from "./components/NavBar/assets/logo-liracard.jpg";

function App(){

    return (
        <div className="App">
            <Navbar logo={LogoImg}/>
            <ItemListContainer greeting={'Bienvenidos a LiraCard'}/>
        </div>
    )

}


export default App;