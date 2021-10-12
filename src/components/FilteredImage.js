import React from 'react'
import { Paper, Box, Grid } from '@material-ui/core'

const FilteredImage = ({ file, saturateValue, sepiaValue, blurValue }) => {

  function createFileSrc(file) {
      return URL.createObjectURL(file)
  }

  return <Box>
    <Grid height='100%' container flexDirection='column' alignItems="center" gap={1}>
      <Paper   elevation={10}>
        <Box p={1}>
          <Box width={300} overflow="hidden">
            <img style={{filter: `saturate(${saturateValue * 2}%) sepia(${sepiaValue * 0.01}) blur(${blurValue * 0.01}px)`}} src={createFileSrc(file)} width={300} alt={file.name} />
          </Box>
        </Box>
      </Paper>
    </Grid>
  </Box>
}


export default React.memo(FilteredImage)