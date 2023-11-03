import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'
// import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import NavBarComponent from './components//NavBar/NavBarComponent'
function App() {
  return (
    <div>
      <NavBarComponent/>
    {/* <ButtonComponent /> Etiqueta autocerrada */}
    <ItemListContainer/>
    </div>

  );
}

export default App;

