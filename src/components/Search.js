import React from 'react'
import { Box, Dialog, DialogContent, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

function Search({open, handleClose}) {
    

    return (    
        <Dialog
            open={open}
            onClose={() => handleClose(false)}
            // PaperComponent = {Box}            
        >
            <DialogContent>
                <Box
                    onClick={() => handleClose(true)}
                    component={'form'}
                    width = '500px'
                    sx={{ display: 'flex', alignItems: 'flex-end',  }}
                >
                    <SearchIcon color='primary' sx={{fontSize: '30px', marginRight: '10px'}}/>
                    <TextField autoComplete='off' fullWidth id="standard-basic" label="Standard" variant="standard" color='primary' />
                </Box>

            </DialogContent>
        </Dialog>
  )
}

export default Search