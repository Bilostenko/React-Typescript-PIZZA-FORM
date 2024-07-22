import React, { useState } from "react";
import Pizza from "../models/Pizza";
 import EditPizzaForm from "./EditPizzaForm";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
interface SinglePizzaProps {
  pizza: Pizza,
  updatePizza: (newPizza : Pizza) => void,
  deletePizza: (id: number) => void
}

const SinglePizza: React.FC<SinglePizzaProps> = ({ pizza, updatePizza, deletePizza }) => {

  const [edit, setEdit] = useState<boolean>(false)

  const handleToggleEdit = () => {
    setEdit(!edit)
  }
  const handleDeletePizza = () => {
    deletePizza(pizza.id)
  }
  return (
    <div className="pizza">

      <img src={`/images/${pizza.image}`} alt={pizza.title} />
      <h2>{pizza.title}</h2>
      <span>{pizza.price} &#8372;</span>

      <div className="pizza-contols">
        < MdModeEditOutline onClick={handleToggleEdit} />
        < MdDelete onClick={handleDeletePizza}/>
      </div>

      {edit ? <EditPizzaForm data = {pizza} updatePizza={updatePizza} handleToggleEdit={handleToggleEdit}/> : null}

    </div>
  )
}

export default SinglePizza