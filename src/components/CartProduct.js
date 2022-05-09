import React, { useContext } from 'react'
import { Box, Button, Divider, Drawer, Grid, Typography } from '@mui/material'
import Title from './Title'
import CartItem from './CartItem'
import { CartContext } from '../context/CartContext'

function CartProduct({toggle, setToggle}) {
  const {items, total} = useContext(CartContext)
  
  return (
    <Drawer
      anchor='right'
      open = {toggle}
      onClose = {() => setToggle(false)}
    >
      <Box width={400} padding = {2}>
        <Title title = {'Cart'} />
        {
          items.length 
            ? (
              <Grid container marginTop={2}>
                {
                  items.map(item => {
                    return(
                      <Grid key = {item.product.id} item container xs = {12}>
                        <CartItem item = {item}/>
                        <Divider/>
                      </Grid>
                      
                    )
                  })
                }
                <Box sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  
                    <Typography color={'secondary'} variant='h5' component={'p'} fontWeight = {700} marginBottom = {1}>
                      Total:
                      <Typography color={'black'} variant='h5' component={'span'} marginLeft = {2} >
                        $ {total}
                      </Typography>
                    </Typography>
                  
                  <Button variant='contained' color = 'primary'  >Checkout</Button>

                </Box>
              </Grid>
            )
            : <Box marginTop={3} textAlign = 'center'>
                <Typography variant='h5' component = 'p'>
                  El carrito está vacio
                </Typography>
              </Box>
        }
      </Box>
    </Drawer>
  )
}

export default CartProduct