// creando un interface
/*export interface Guitar {
    id: number
    name: string
    image: string
    description: string
    price: number
}

// creando una interface que hereda de otra
export interface cartItem extends Guitar {
    quantity: number
}*/

// creando un type (similar a interface)
export type Guitar = {
    id: number
    name: string
    image: string
    description: string
    price: number
}

// crear un tipo que 'hereda' de otro las prop e incluye una nueva(también puede sobreescribir y redefinir una)
export type cartItem = Guitar & {
    quantity: number
}


// utilizando un lookup
export type GuitarId = Guitar['id']

// utilizando Pick para tomar el tipo de una prop del tipo especificado
//export type GuitarId = Pick<Guitar, 'id'>