import { useState, useEffect } from "react"
import type { cartItem } from '../types/index'

export const useCart = () => {

    const initialCart = (): cartItem[] => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }

    const [cart] = useState(initialCart)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])



    return {
        cart
    }
}