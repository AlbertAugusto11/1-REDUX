export const addFruit = (fruit) => {
    return {
        type: "ADD_FRUIT",
        fruit,
    }
}
export const delFruit = (id) => {
    return {
        type: "DEL_FRUIT",
        payload: id,
    }
}
export const editFruit = (efruit) => {
    return {
        type: "EDIT_FRUIT",
        payload: efruit,
    }
}