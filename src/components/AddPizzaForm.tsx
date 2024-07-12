import React, { useState } from "react";
import './styles.css'

const initState = {
  title: '',
  price: '',
  image: ''
}

const AddPizzaForm: React.FC = () => {

  const [newPizza, setNewPizza] = useState<{ title: string, price: string, image: string }>(initState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setNewPizza({
      ...newPizza,
      [name]: value
    })
  }

  console.log(newPizza)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Name"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="image"
        type="text"
        placeholder="Image"
        onChange={handleChange}
        value={newPizza.image}
      />
      <button>+ Add Pizza</button>
    </form>
  )
}

export default AddPizzaForm