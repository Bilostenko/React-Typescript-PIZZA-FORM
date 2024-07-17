import React, { useState } from "react";
import Pizza from "../models/Pizza";
import './styles.css'

interface EditPizzaForm {
  data: Pizza
}


const EditPizzaForm: React.FC<EditPizzaForm> = ({ data }) => {

  const [editPizza, setEditPizza] = useState<Pizza>(data)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditPizza({
      ...editPizza,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()
    const { title, price, image } = editPizza

    if (title && price && image) {
    console.log('edit pizza >>>', editPizza)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        name="title"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name="image"
        type="text"
        placeholder="Image"
        onChange={handleChange}
        value={editPizza.image}
      />
      <button>+ Add Pizza</button>
    </form>
  )
}

export default EditPizzaForm