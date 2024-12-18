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

const initialCart = (): cartItem[] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
}


export const initialState: CartState = {
    data: db,
    cart: initialCart()
}

const MAX_ITEMS = 5
const MIN_ITEMS = 1

export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {
    if (action.type === 'addToCart') {
        let updatedCart: cartItem[] = []
        const itemExists = state.cart.find((guitar: Guitar) => guitar.id === action.payload.item.id)
        if (itemExists) {
            updatedCart = state.cart.map(item => {
                if (item.id === action.payload.item.id && item.quantity < MAX_ITEMS)
                    return { ...item, quantity: item.quantity + 1 }
                return item
            })

        } else {
            const newItem: cartItem = { ...action.payload.item, quantity: 1 }
            updatedCart = [...state.cart, newItem]
        }

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'removeFromCart') {
        const updatedCart = state.cart.filter((guitar) => guitar.id !== action.payload.id)
        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'increaseQuantity') {
        const updatedCart = state.cart.map((item: cartItem) => {
            if (item.id === action.payload.id && item.quantity < MAX_ITEMS)
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            return item
        })

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'decreaseQuantity') {
        const updatedCart = state.cart.map(item => {
            if (item.id === action.payload.id && item.quantity > MIN_ITEMS)
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            return item
        })

        return {
            ...state,
            cart: updatedCart
        }
    }

    if (action.type === 'clearCart') {
        return {
            ...state,
            cart: []
        }
    }

    return state
}