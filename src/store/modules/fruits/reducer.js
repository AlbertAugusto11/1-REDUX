const initialState = [{name: "Banana", price: 7.99, id: 1},{name: "Maçã", price: 5.99, id: 2},{name: "Morango", price: 6.99, id: 3}]

const fruitsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default fruitsReducer