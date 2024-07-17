import React from "react";
import Pizza from "../models/Pizza";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
interface SinglePizzaProps {
  pizza: Pizza
}

const SinglePizza: React.FC<SinglePizzaProps> = ({ pizza }) => {

  return (
    <div className="pizza">
       <div className="pizza-contols">
        < MdModeEditOutline />
        < MdDelete />
      </div>
      <span>{pizza.price} &#8372;</span>
      <img src={`/images/${pizza.image}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
     
    </div>
  )
}

export default SinglePizza