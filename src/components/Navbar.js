import React, { useContext, useState } from 'react'
// import { myColors } from '../styles/theme';
import { Box, Container, Divider, IconButton, ListItemButton, ListItemText, Typography } from '@mui/material'
import { Nav, NavbarContainer, SpanCounter } from '../styles/Navbar';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CartProduct from './CartProduct';
import { CartContext } from '../context/CartContext';

function Navbar() {
  const [toggleCart, setToggleCart] = useState(false)
  const { totalQuantity} = useContext(CartContext)
  
  return (
    <NavbarContainer>
      <Container>
        <Nav>
          <Box >
            <Typography color={'primary'} variant='h3' component={'h2'}>
              Mui
              <Typography color = {'secondary'} variant='h3' component={'span'}>
                Store
              </Typography>
              <Typography color = {'primary'} variant='h3' component={'span'}>
                .
              </Typography>
            </Typography>
          </Box>

          <Box sx={{display: 'flex', gap: 1}}>
            <ListItemButton>              
              <SearchIcon/>              
              <ListItemText primary = 'Buscar' sx={{color: 'rgba(44, 44, 44, 0.7)', marginLeft: '5px'}}/>
            </ListItemButton>
              
              <Divider orientation="vertical" flexItem/>
              <IconButton>
                <PersonIcon/>
              </IconButton>
              <Divider orientation="vertical" flexItem/>
              <IconButton onClick={() => setToggleCart(true)}>
                <ShoppingCartIcon/>
                <SpanCounter>{totalQuantity}</SpanCounter>
              </IconButton>
              <CartProduct toggle = {toggleCart} setToggle = {setToggleCart}/>
          </Box>
        </Nav>
      </Container>
    </NavbarContainer>
    
    
  )
}

export default Navbar