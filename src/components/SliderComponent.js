import { Grid, Slider, Typography } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React from 'react'

const SliderComponent = ({sliderValue, getValue, handleChangeValues}) =>  {
    return (
        <Box width={250}>
            <Grid container flexDirection='row' justifyContent='space-between' alignItems='center'>
                <Typography fontFamily='Grey Qo' fontSize={32} fontWeight='bold' color='gray'>{getValue()}</Typography>
                <Slider defaultValue={100} value={sliderValue ? sliderValue : null} onChange={(e)=>{handleChangeValues(e.target.value)}} aria-label="Default" valueLabelDisplay="off" style={{width: '80%'}}/>
                {/* <input type='range' value={sliderValue} onChange={(e)=>{handleChangeValues(e.target.value)}}></input> */}
            </Grid>
        </Box>
    )
}

export default React.memo(SliderComponent)
