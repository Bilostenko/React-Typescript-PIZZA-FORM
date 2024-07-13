import React, { useState } from 'react';
import AddPizzaForm from './components/AddPizzaForm'
import Pizza from './models/Pizza';
import './App.css';


const App: React.FC = () => {

  const [pizzasList, setPizzalist] = useState<Pizza[]>([])
  
  const addPizza = (newPizza: Pizza) => {
    setPizzalist([...pizzasList, newPizza])
  }

  return (
    <div className="App">
      <div className="wrap">
        <span className='heading'>Our pizza</span>
        < AddPizzaForm addPizza={addPizza}/>
      </div>
    </div>
  );
}

export default App;
