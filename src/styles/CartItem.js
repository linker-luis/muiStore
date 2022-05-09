import { Box, styled } from "@mui/material";


export const CartItemContainer = styled(Box)(() => ({
    display: 'flex',
    marginBottom: '10px',
    width: '100%'
}))

export const ImgCartItem = styled('img')(() => ({
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    marginRight: '15px'
}))

export const CartItemContent = styled(Box)(() => ({
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    flexGrow: 1
}))

export const CartItemActionsContainer = styled(Box)(() => ({
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center'
}))

export const CartDivider = styled('div')(() => ({
    width: '100%',
    height: '1px', 
    background: 'rgba(74, 74, 74, 0.4)', 
    marginBottom: '15px'
}))