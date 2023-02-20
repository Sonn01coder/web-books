import * as actionType from "./actions/actionType";

const initialState = {
    cartList: [],
};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.BUY_PRODUCT:
            const productInCart = state.cartList.find(
                p => p._id === action.payload._id
            )

            if(!productInCart) {
                return {
                    cartList: [...state.cartList, action.payload],
                }
            } else {
                let newCart = state.cartList
                const objIndex = newCart.findIndex(
                    obj => obj._id === action.payload._id
                )
                newCart[objIndex].countCart =+ 1
                
                return {cartList: [...newCart]}
            }

        case actionType.DELETE_PRODUCT:
            let newCart = state.cartList.filter(item => item._id === action.payload._id)
            return {cartList: [...newCart]}

        default:
            break;
    }
}

export default cartReducer;