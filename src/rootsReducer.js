import { combineReducers  } from "redux";
import cartReducer from "./store";

const rootReducer = combineReducers({
    cart: cartReducer,
})

export default rootReducer