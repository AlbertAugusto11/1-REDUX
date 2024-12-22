import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { editFruit } from './store/modules/fruits/actions.js';

export const EditFruit = ({editF, setEditF}) => {
    const {register, handleSubmit} = useForm({
        values:{
            name: editF.name,
            price: editF.price,
            id: editF.id,
        }
    })
    const dispatch = useDispatch()
    const handleEditFruit = (formData) =>{
        dispatch(editFruit(formData))
        setEditF(null)
      }

    return(
        <>
            <h3>Edite sua Fruta</h3>
            <button onClick={() => setEditF(null)}>x</button>
            <form onSubmit={handleSubmit(handleEditFruit)}>
                <label htmlFor="name">Nome da Fruta</label>
                <input id="name" type="text" {...register ("name")} />
                <label htmlFor="price">Preço</label>
                <input id="price" type="text" {...register ("price")} />
                <button>Adicionar Fruta</button>
            </form>
        </>
    )
}

export default EditFruit