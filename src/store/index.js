import { createStore, combineReducers } from "redux";

// importando o reducer
import fruitsReducer from "./modules/fruits/reducer";
import nameReducer from "./modules/name/reducer";
import contadorReducer from "./modules/contador/reducer";

// combinando os reducers da aplicação, nesse exemplo temos apenas um
const reducers = combineReducers({ fruits: fruitsReducer, autor: nameReducer, contador: contadorReducer });

// passando os reducers combinados para a store
const store = createStore(reducers);

export default store;