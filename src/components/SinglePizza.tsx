import React from "react";
import Pizza from "../models/Pizza";
interface SinglePizzaProps {
  pizza: Pizza
}

const SinglePizza: React.FC<SinglePizzaProps> = ({ pizza }) => {

  return (
    <div className="pizza">
      <h2>{pizza.title}</h2>
      <p>{pizza.price}</p>
      <img src={`../../public/pizza-1.jpg`} alt={pizza.title} />
    </div>
  )
}

export default SinglePizza