
import CustomButtom from "./components/customButton/CustomButton";
import Counter from "./components/counter/counter";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navBar/NavBar"


function App() {
  return (
    <div>
      <NavBar />
      
      <ItemListContainer greeting={"Hola Andy como estas?"} />
      
      <Counter />          

    </div>

  );
} 

export default App;

