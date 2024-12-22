const initialState = 0

const contadorReducer = (state = initialState, action) => {
    console.log(action)

    switch (action.type) {
        case "CONT_NUMBER":
            const {cont} = action

            return state + cont


        default:
            return state
    }
}
export default contadorReducer