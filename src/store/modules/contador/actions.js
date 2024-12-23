import {CONT_POSITIVE} from "../contador/actionsType.js"
import {CONT_NEGATIVE} from "../contador/actionsType.js"



export const contar = () => {
    return {
        type: CONT_POSITIVE,
        cont: 1,
    }
}
export const contarNegative = () => {
    return {
        type: CONT_NEGATIVE,
        cont2: 1,
    }
}