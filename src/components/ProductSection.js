import { Box, Grid, CircularProgress } from '@mui/material'
import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { ProgressContainer } from '../styles/ProductSection'
import ProductCard from './ProductCard'
import Title from './Title'

function ProductSection() {
    const {products, loading} = useContext(ProductContext)
    let render
    
    if(loading){
        render = (
            <ProgressContainer>
                <CircularProgress color = 'primary' size = {50} />
            </ProgressContainer>
        )
    }
    else {
        render = (
            <Grid container spacing={2} marginTop = {1}>   
                {
                    products.map(product => {
                        return(
                            <Grid key = {product.id} item xs = {12} sm = {6} md = {4}>
                                <ProductCard product = {product}/>   
                                        
                            </Grid>
                        )
                    })
                }           
            </Grid>
        )
    }
  return (
    <Box sx={{marginTop: '25px'}}>
        <Title title = {'Cómprale a Mamá'}/>    
        {render}
    </Box>
  )
}

export default ProductSection