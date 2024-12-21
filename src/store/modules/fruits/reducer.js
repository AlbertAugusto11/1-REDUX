const initialState = [{name: "Banana", price: 7.99, id: 1},{name: "Maçã", price: 5.99, id: 2},{name: "Morango", price: 6.99, id: 3}]

const fruitsReducer = (state = initialState, action) => {
    console.log(action)

    switch (action.type) {
        case "ADD_FRUIT":
            const { fruit } = action

            return [...state, fruit]
        
        case "DEL_FRUIT":
            const newList = state.filter(element =>{
                return element.id != action.payload
            })
            return newList
        
        case "EDIT_FRUIT":
            const efruit = action.payload
            const newList2 = state.map(element =>{
                if(element.id == efruit.id){
                    return efruit
                }else{
                    return element
                }
            })
            return newList2

        default:
            return state
    }
}
export default fruitsReducer