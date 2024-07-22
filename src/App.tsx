import React, { useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm'
import DisplayPizzas from './components/DisplayPizzas'
import Pizza from './models/Pizza';
import './App.css';


const App: React.FC = () => {

  const [pizzasList, setPizzalist] = useState<Pizza[]>([])
  
  const addPizza = (newPizza: Pizza) => {
    setPizzalist([...pizzasList, newPizza])
  }
  const updatePizza = (newPizza: Pizza) => {
    setPizzalist(pizzasList.map(pizza => pizza.id === newPizza.id ? newPizza : pizza))
  }

  const deletePizza = (id: number) => {
    setPizzalist(pizzasList.filter(pizza => pizza.id !== id))
  }

  console.log(pizzasList)

  return (
    <div className="App">
      <div className="wrap">
        <span className='heading'>Our pizza</span>
        <span className='extra'>Paste into Image input: <br/> pizza-1.jpg, pizza-2.jpg, pizza-3.jpg, pizza-4.jpg, pizza-5.jpg, pizza-6.jpg</span>
        < AddPizzaForm addPizza={addPizza}/>
        < DisplayPizzas pizzasList={pizzasList} updatePizza={updatePizza} deletePizza={deletePizza}/>
      </div>
    </div>
  );
}

export default App;
