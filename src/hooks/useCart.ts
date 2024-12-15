import { useState, useEffect } from "react"
import type { GuitarId, cartItem } from '../types/index'

export const useCart = () => {

    const initialCart = (): cartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [cart, setCart] = useState(initialCart)
    const MAX_ITEMS = 5
    const MIN_ITEMS = 1

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function removeFromCart(id: GuitarId) {
        // setCart(cart.filter((guitar) => guitar.id !== id)) también es válido en este caso
        setCart(prevCart => prevCart.filter((guitar) => guitar.id !== id))
    }

    function increaseQuantity(id: GuitarId) {
        const updatedCart = cart.map((item: cartItem) => {
            if (item.id === id && item.quantity < MAX_ITEMS)
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            return item
        })

        setCart(updatedCart)
    }

    function decreaseQuantity(id: GuitarId) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > MIN_ITEMS)
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            return item
        })

        setCart(updatedCart)
    }

    function clearCart() {
        setCart([])
    }

    return {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart
    }
}