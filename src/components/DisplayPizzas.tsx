import React from "react";
import Pizza from "../models/Pizza";
import SinglePizza from "./SinglePizza";

interface DisplayPizzasProps {
  pizzasList: Pizza[]
}

const DisplayPizzas: React.FC<DisplayPizzasProps> = ({ pizzasList }) => {

  return (
    // <div className="container">
    //   {pizzasList.map((pizza) => {
    //     return pizza.title
    //   })}
    // </div>
< SinglePizza pizzasList={pizzasList}/>
  )
}

export default DisplayPizzas