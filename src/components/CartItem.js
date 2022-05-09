import React, { useContext } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../context/CartContext';
import { CartDivider, CartItemActionsContainer, CartItemContainer, CartItemContent, ImgCartItem } from '../styles/CartItem';

function CartItem({item}) {
    const {id, imageURL, name, price} = item.product
    const { substractProduct, removeItem, addItems } = useContext(CartContext)
    
  return (
    <>
        <CartItemContainer>
            <ImgCartItem src={imageURL} alt=''/>

            <CartItemContent >
                <Box >
                    <Typography variant = {'h6'} component = {'p'} fontWeight = {700} >
                        {name}
                    </Typography>
                    <Typography variant = {'h6'} component = 'p'>
                        $ {price}
                    </Typography>
                </Box>

                <CartItemActionsContainer>
                    <Box sx = {{display: 'flex', gap: '5px', alignItems: 'center'}}>
                        <IconButton onClick={() => substractProduct(id)}>
                            <RemoveIcon />
                        </IconButton>
                        <Typography variant = {'h6'}  component = 'p' color={'primary'}>
                            {item.cant}
                        </Typography>
                        <IconButton onClick={() => addItems(item.product)} >
                            <AddIcon/>
                        </IconButton>
                    </Box>

                    <IconButton color='error' onClick={() => removeItem(id)}>
                        <DeleteIcon/>
                    </IconButton>
                </CartItemActionsContainer>

            </CartItemContent>
        </CartItemContainer>
        <CartDivider />
    </>
  )
}

export default CartItem