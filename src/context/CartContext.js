import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0.00)

    const addItems = (product) => {        
        const checkItem = items.find((item) => item.product.id === product.id)
        if(checkItem){
            checkItem.cant++
            checkItem.itemTotal = (checkItem.cant * checkItem.product.price).toFixed(2)
            
        }
        else {
            const newItem = {
                cant: 1,
                itemTotal: parseFloat(product.price),
                product
            }

            let newItems = [...items, newItem]
            setItems(newItems)            
        }
        calcTotalQuantity()
        // calcTotal()
    }

    const substractProduct = (id) => {
        const checkItem = items.find((item) => item.product.id === id)
        if(checkItem.cant > 1){
            checkItem.cant--
            checkItem.itemTotal = (checkItem.cant * checkItem.product.price).toFixed(2)
            // calcTotal()
        }
        else {
            removeItem(checkItem.product.id)
        }
        calcTotalQuantity()
    }

    
    const removeItem = (id) => {
        const newItems = items.filter(item => item.product.id !== id)
        setItems(newItems)
    }

    const calcTotalQuantity = () => {
        let quantity = 0
        items.map(item => (quantity += item.cant))
        
        setTotalQuantity(quantity)
    }

    const calcTotal = () => {
        let price = 0
        items.map(item => (price += parseFloat(item.itemTotal)))
      
        setTotal(price.toFixed(2))
    }
    
    useEffect(() => {
        calcTotalQuantity()
        calcTotal()
    })
    
    return (
        <CartContext.Provider value={{
            items, 
            addItems,
            substractProduct,
            totalQuantity,
            removeItem,
            total,
            calcTotal
        }}>
            {children}
        </CartContext.Provider>

    )
}