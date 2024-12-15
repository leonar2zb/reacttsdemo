import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { useCart } from "./hooks/useCart"
import { useReducer } from "react"
import { cartReducer, initialState } from "./reducers/cart-reducer"


function App() {

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  } = useCart()

  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <>
      <Header cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} clearCart={clearCart} isEmpty={isEmpty} cartTotal={cartTotal} />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {state.data.map((guitar) => (<Guitar guitar={guitar} key={guitar.id} dispatch={dispatch} />))}

        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
