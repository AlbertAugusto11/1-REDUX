import { useSelector } from "react-redux"

function App() {
  const fruits = useSelector((state) => state.fruits)

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
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default App
