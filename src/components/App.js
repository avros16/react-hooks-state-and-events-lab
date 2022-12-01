import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  function Toggle () {
    // const [items, setItems] = useState(itemData);
    const [darkMode, setDarkMode] = useState(false);
    
    function handleMode () {
      setDarkMode(!darkMode)
    };
  }
  
  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData}/>
    </div>
  )
  }

  export default App;