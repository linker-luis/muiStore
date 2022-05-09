import { Box, IconButton, styled } from "@mui/material";


export const CarouselContainer = styled(Box)(() => ({
    marginTop: '100px',
    width: '100%',
    height: '400px',
    position: 'relative',
    // border: 'solid 1px #000'

}))

export const CarouselItem = styled(Box)(() => ({
    width: '100%',
    height: '100%',
    background: '#fff'
}))

export const MyIconButton = styled(IconButton)(() => ({
    background: 'rgba(29, 29, 29, 0.7)',
    color: '#fff',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
}))

export const CarouselImg = styled('img')(() => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover'

}))