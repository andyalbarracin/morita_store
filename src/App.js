
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar"


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Hola Andy como estas?"} />

    </div>
  );
}

export default App;

