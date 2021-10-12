import { Grid } from '@material-ui/core'
import { Box } from '@material-ui/system'
import React from 'react'
import FileItem from './FileItem'

const Filters = ({currentFilter, handleSetCurrentFilter, file, saturateValue, sepiaValue, blurValue}) => {
    return (
        <Box>
            <Grid width={400} justifyContent='space-evenly' alignItems="center" container  >
                <FileItem 
                    currentFilter={currentFilter} 
                    selectFilter={handleSetCurrentFilter} 
                    file={file} 
                    width={100} 
                    label="Saturate" 
                    filter='saturate' 
                    value={75} 
                    border={Boolean(saturateValue !== 50)}
                />
                <FileItem 
                    currentFilter={currentFilter} 
                    selectFilter={handleSetCurrentFilter} 
                    file={file} 
                    width={100} 
                    label="Sepia" 
                    filter='sepia' 
                    value={75} 
                    border={Boolean(sepiaValue !== 0)}
                />
                <FileItem 
                    currentFilter={currentFilter} 
                    selectFilter={handleSetCurrentFilter} 
                    file={file} 
                    width={100} 
                    label="Blur" 
                    filter='blur' 
                    value={100} 
                    border={Boolean(blurValue !== 0)}
                />
            </Grid>
        </Box>
    )
}

export default React.memo(Filters)
