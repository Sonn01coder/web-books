import * as actionTypes from "./actionType"

export const buyProduct = (product ) => {
    return {
        type: actionTypes.BUY_PRODUCT,
        payload: product
    }
}

export const deleteProduct = (product ) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: product
    }
}

export const increaseProduct = (product ) => {
    return {
        type: actionTypes.INCREASE_PRODUCT,
        payload: product
    }
}

export const reduceProduct = (product ) => {
    return {
        type: actionTypes.REDUCE_PRODUCT,
        payload: product
    }
}