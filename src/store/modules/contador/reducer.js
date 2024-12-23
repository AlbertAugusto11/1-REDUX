import {CONT_POSITIVE} from "../contador/actionsType.js"
import {CONT_NEGATIVE} from "../contador/actionsType.js"

const initialState = 0

const contadorReducer = (state = initialState, action) => {
    console.log(action) // isso é so para teste

    switch (action.type) {
        case CONT_POSITIVE:
            const {cont} = action

            return state + cont

        case CONT_NEGATIVE:
            const {cont2} = action

            return state - cont2
        default:
            return state
    }
}
export default contadorReducer