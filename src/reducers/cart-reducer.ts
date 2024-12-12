import type { Guitar, GuitarId } from "../types";

export type CartActions =
    { type: 'addToCart', payload: { item: Guitar } } |
    { type: 'removeFromCart', payload: { id: GuitarId } } |
    { type: 'increaseQuantity', payload: { id: GuitarId } } |
    { type: 'decreaseQuantity', payload: { id: GuitarId } } |
    { type: 'clearCart' } 