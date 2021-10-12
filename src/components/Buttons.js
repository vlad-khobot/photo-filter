import { Button, Grid } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React from 'react'

const Buttons = ({deletePhoto}) => {
    return (
        <Box width="100%">
            <Grid container justifyContent='space-around'>
                <Button style={{fontFamily: 'Birthstone', fontSize: 24, fontWeight: 'bold'}} variant="contained" onClick={deletePhoto}>Save photo</Button>
                <Button style={{fontFamily: 'Birthstone', fontSize: 24, fontWeight: 'bold'}} variant="outlined" onClick={deletePhoto}>Delete photo</Button>
            </Grid>
        </Box>
    )
}

export default React.memo(Buttons)
