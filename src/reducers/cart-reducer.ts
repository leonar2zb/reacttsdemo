import { db } from "../data/db";
import type { cartItem, Guitar, GuitarId } from "../types";

export type CartActions =
    { type: 'addToCart', payload: { item: Guitar } } |
    { type: 'removeFromCart', payload: { id: GuitarId } } |
    { type: 'increaseQuantity', payload: { id: GuitarId } } |
    { type: 'decreaseQuantity', payload: { id: GuitarId } } |
    { type: 'clearCart' }

export type CartState = {
    data: Guitar[]
    cart: cartItem[]
}

export const initialState: CartState = {
    data: db,
    cart: []
}

export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {
    if (action.type === 'addToCart') {
        return {
            ...state
        }
    }

    if (action.type === 'removeFromCart') {
        return {
            ...state
        }
    }

    if (action.type === 'increaseQuantity') {
        return {
            ...state
        }
    }

    if (action.type === 'decreaseQuantity') {
        return {
            ...state
        }
    }

    if (action.type === 'clearCart') {
        return {
            ...state
        }
    }

    return state
}