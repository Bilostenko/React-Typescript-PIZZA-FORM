import React from 'react';
import AddPizzaForm from './components/AddPizzaForm'
import './App.css';


const App: React.FC = () => {
  return (
    <div className="App">
     <div className="wrap">
      <span className='heading'>Our pizza</span>
      < AddPizzaForm />
     </div>
    </div>
  );
}

export default App;
