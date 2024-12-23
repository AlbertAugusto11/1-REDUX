import { useDispatch, useSelector } from "react-redux"
import { addFruit } from './store/modules/fruits/actions.js';
import { delFruit } from './store/modules/fruits/actions.js';
import { useForm } from "react-hook-form";
import { useState } from "react";
import EditFruit from "./EditFruit.jsx";
import { addName } from "./store/modules/name/actions.js";
import { contar } from "./store/modules/contador/actions.js";
import { contarNegative } from "./store/modules/contador/actions.js";

function App() {
  const fruits = useSelector((state) => state.fruits)
  const autor = useSelector((state) => state.autor)
  const contador = useSelector((state) => state.contador)
  const [editF, setEditF] = useState(null)
  const {register, reset, handleSubmit} = useForm()
  const dispatch = useDispatch()
  
  const handleAddFruit = (formData) => {
    dispatch(addFruit({...formData, id: crypto.randomUUID()}))
    reset()
  }
  const handleDelFruit = (id) =>{
    dispatch(delFruit(id))
  }
  const handleName = (name) => {
    dispatch(addName(name))
  }
  const handleContador = () => {
    dispatch(contar())
  }
  const handleContNegative = () => {
    dispatch(contarNegative())
  }

  return (
    <div>
      <h2>Meu Primeiro Redux</h2>
      <span>AUTOR: {autor.name}</span>
      <button onClick={() => {
        let a = prompt("Digite o Autor")
        handleName(a)
      }}>{autor.name == "" ? "Adicionar Autor" : "Editar Autor"}</button>
      <ul>
        <h3>Minha Lista de Frutas</h3>
        {fruits.map(element => {
          return(
            <li key={element.id}>
              <h4>{element.name}</h4>
              <span>Preço: {element.price} reais</span>
              <button onClick={() => handleDelFruit(element.id)}>Excluir</button>
              <button onClick={() => setEditF(element)}>Editar</button>
            </li>
          )
        })}
      </ul>
        <form onSubmit={handleSubmit(handleAddFruit)}>
          <label htmlFor="name">Nome da Fruta</label>
          <input id="name" type="text" {...register ("name")} required/>
          <label htmlFor="price">Preço</label>
          <input id="price" type="text" {...register ("price")} required/>
          <button>Adicionar Fruta</button>
        </form>
        {editF != null ? <EditFruit editF={editF} setEditF= {setEditF}/> : null}
        <h1>{contador}</h1>
        <button onClick={() => handleContador()}>+</button>
        <button onClick={() => handleContNegative()}>-</button>
    </div>
  )
}

export default App
