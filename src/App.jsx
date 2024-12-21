import { useDispatch, useSelector } from "react-redux"
import { addFruit } from './store/modules/fruits/actions.js';
import { delFruit } from './store/modules/fruits/actions.js';
import { editFruit } from './store/modules/fruits/actions.js';
import { useForm } from "react-hook-form";

function App() {
  const fruits = useSelector((state) => state.fruits)
  const {register, reset, handleSubmit} = useForm()
  const dispatch = useDispatch()
  const handleAddFruit = (formData) => {
    dispatch(addFruit({...formData, id: crypto.randomUUID()}))
    reset()
  }
  const handleDelFruit = (id) =>{
    dispatch(delFruit(id))
  }
  const handleEditFruit = (callback) =>{
    dispatch(editFruit(callback))
  }
  const editFruit2 = (element) =>{
    let a = prompt("Digite o nome")
    let b = prompt("Digete o Preço")
    let c = {...element, name: a, price: b}
    return c
  }

  return (
    <div>
      <h2>Meu Primeiro Redux</h2>
      <ul>
        <h3>Minha Lista de Frutas</h3>
        {fruits.map(element => {
          return(
            <li key={element.id}>
              <h4>{element.name}</h4>
              <span>Preço: {element.price} reais</span>
              <button onClick={() => handleDelFruit(element.id)}>Excluir</button>
              <button onClick={() => handleEditFruit(editFruit2(element))}>Editar</button>
            </li>
          )
        })}
      </ul>
        <form onSubmit={handleSubmit(handleAddFruit)}>
          <label htmlFor="name">Nome da Fruta</label>
          <input id="name" type="text" {...register ("name")} />
          <label htmlFor="price">Preço</label>
          <input id="price" type="text" {...register ("price")} />
          <button>Adicionar Fruta</button>
        </form>
    </div>
  )
}

export default App
