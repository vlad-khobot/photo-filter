import { Grid, Paper } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React, { useCallback, useEffect, useState } from 'react'
import Buttons from './Buttons'
import SliderComponent from "./SliderComponent" 
import Filters from './Filters'
import FilteredImage from './FilteredImage'

const UploadedPage = ({ file, deletePhoto }) => {
    const [currentFilter, setCurrentFilter] = useState('')
    const [sliderValue, setSliderValue] = useState(100)
    const [saturateValue, setSaturateValue] = useState(50)
    const [sepiaValue, setSepiaValue] = useState(0)
    const [blurValue, setBlurValue] = useState(0)


    const handleSetCurrentFilter = useCallback(filter => setCurrentFilter(filter),[])
    
    const handleChangeValues = useCallback(
        (value) => {
        switch (currentFilter) {
            case "saturate":
                setSaturateValue(value)
                break;
            case "sepia":
                setSepiaValue(value)
                break;
            case "blur":
                setBlurValue(value)
                break;
            default:
                break;
        }
    },
        [currentFilter],
    )
    const getValue = useCallback(
        () => {
        switch (currentFilter) {
            case "saturate":
                return saturateValue
                case "sepia":
                 return sepiaValue
            case "blur":
                return blurValue
            default:
                break;
        }
    },
        [currentFilter, saturateValue, sepiaValue, blurValue],
    )

    useEffect(() => {
        setSliderValue(getValue())
    }, [getValue,saturateValue,sepiaValue,blurValue])
    
    return (
        <Paper elevation={3}>
            <Box width={800} p={3}>
                <Grid container justifyContent='space-between' height='100%' width='100%'>
                    <FilteredImage saturateValue={saturateValue} sepiaValue={sepiaValue} blurValue={blurValue} file={file}/>
                    <Box >
                        <Grid height='100%' container flexDirection='column' justifyContent='space-evenly' alignItems="center">
                            <Filters
                                currentFilter={currentFilter}
                                handleSetCurrentFilter={handleSetCurrentFilter}
                                file={file}
                                saturateValue={saturateValue}
                                sepiaValue={sepiaValue}
                                blurValue={blurValue}
                            />

                            <SliderComponent
                                sliderValue={sliderValue}
                                getValue={getValue}
                                handleChangeValues={handleChangeValues}
                            />

                            <Buttons deletePhoto={ deletePhoto }/>
                        </Grid>
                    </Box>
                </Grid>
            </Box>
        </Paper>
    )
}


export default React.memo(UploadedPage)
