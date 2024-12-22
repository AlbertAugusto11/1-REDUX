const initialState = {name: ""}

const nameReducer = (state = initialState, action) => {
    console.log(action)

    switch (action.type) {
        case "ADD_NAME":
            const {name} = action

            return {name: name}


        default:
            return state
    }
}
export default nameReducer