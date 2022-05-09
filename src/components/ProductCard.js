import React, { useContext, useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from '../context/CartContext';

function ProductCard({product}) {
  const [rating, setRating] = useState((Math.random() * 5) + 2)
  const {imageURL, name, price} = product

  const {addItems} = useContext(CartContext)
  
  return (
    <Card >
        <CardMedia
            component="img"
            height="350"
            image={imageURL}
            alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Box 
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            
            >
              <Typography>
                $ {price}
              </Typography>
              <Rating name="half-rating" value={rating} precision={0.5} />
            </Box>
        </CardContent>
        <CardActions sx={{padding: '15px'}}>            
            <Button 
              variant='contained' 
              startIcon = {<AddShoppingCartIcon/>}
              onClick = {() => {addItems(product)}}            
            >
              Añadir al Carrito
            </Button>
        </CardActions>
    </Card>
  )
}

export default ProductCard