import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

function Title({title}) {
  return (
    <Box sx={{textAlign: 'center'}}>
        <Typography variant='h4' component={'h3'} color = 'primary' sx = {{fontWeight: 600}}>
            {title}
        </Typography>
        <Divider/>
    </Box>
  )
}

export default Title