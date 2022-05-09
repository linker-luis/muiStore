import { Box, Container, Divider, Link, Typography } from '@mui/material'
import React from 'react'
import { myColors } from '../styles/theme'

function Footer() {
  return (
    <Box sx={{background: myColors.primary, marginTop: '20px', padding: '20px 0'}}>
        <Container>
            <Typography color={myColors.white} variant='h3' component={'h2'}>
                Mui
                <Typography color = {'secondary'} variant='h3' component={'span'}>
                Store
                </Typography>
                <Typography color = {'white'} variant='h3' component={'span'}>
                .
                </Typography>
            </Typography>
            <Divider sx = {{background: '#fff'}}/>
            <Box display={'flex'} justifyContent = 'space-between' marginTop={2}>
                <Link href = '#' color={myColors.white}>
                    ¿Quienes somos?
                </Link>
                <Link href = '#' color={myColors.white}>
                    Contactanos
                </Link>
                <Link href = '#' color={myColors.white}>
                    Politicas de privacidad
                </Link>
            </Box>

        </Container>
    </Box>
  )
}

export default Footer