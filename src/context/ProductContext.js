import { createContext, useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((res) => {
                setProducts(res.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error)
                setLoading(false)
                setError('Error a cargar productos')
            })
    }, [])

    // console.log(products)

    return (
        <ProductContext.Provider value={{
            products,
            setProducts,
            loading,
            error
        }} >
            {children}
        </ProductContext.Provider>
    )
}