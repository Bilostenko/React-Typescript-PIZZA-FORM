import React, { useState } from "react";
import Pizza from "../models/Pizza";
 import EditPizzaForm from "./EditPizzaForm";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
interface SinglePizzaProps {
  pizza: Pizza
}

const SinglePizza: React.FC<SinglePizzaProps> = ({ pizza }) => {

  const [edit, setEdit] = useState(false)

  // useState(() => {
  //   setEdit(true)
  // })
  return (
    <div className="pizza">

      <img src={`/images/${pizza.image}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} &#8372;</span>

      <div className="pizza-contols">
        < MdModeEditOutline />
        < MdDelete />
      </div>

      {edit ? <EditPizzaForm /> : null}

    </div>
  )
}

export default SinglePizza