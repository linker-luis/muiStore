import { Box, styled } from "@mui/material";
import { myColors } from "./theme";

export const NavbarContainer = styled(Box)(() => ({
    background: '#fff',
    boxShadow: `0 2px 5px rgba(44, 44, 44, 0.4)`,
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 100
}))

export const Nav = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0'
    
}))

export const SpanCounter = styled('span')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    width: '21px',
    height: '21px',
    borderRadius: '50%',
    background: myColors.primary,
    color: '#fff',
    position: 'absolute',
    top: '0px',
    left: '25px'
}))