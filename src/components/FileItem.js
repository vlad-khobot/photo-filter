import { Paper, Box, Typography, Grid } from '@material-ui/core'
import React, { useCallback } from 'react'

const FileItem = ({ file, label, filter, value, currentFilter, selectFilter, border }) => {

  function createFileSrc(file) {
      return URL.createObjectURL(file)
  }
  
  const adaptiveValue = useCallback(
    (filter) => {
    switch (filter) {
      case 'blur':
        return `${value * 0.01}px`
      case 'sepia':
        return value * 0.01
      case 'saturate':
        return `${value * 2}%`
      default:
        break;
    }
  },
    [value],
  )

  return <Box style={{cursor: 'pointer'}}>
    <Grid height='100%' container flexDirection='column' alignItems="center" gap={1}>
      <Paper  onClick={() => selectFilter(filter)} elevation={currentFilter === filter ? 1 : 10}>
        <Box border={border && 'solid 2px #2525ff80'}  borderRadius={1} p={1}>
          <Box width={100} overflow="hidden">
            <img style={{filter: `${filter}(${adaptiveValue(filter)})`}} src={createFileSrc(file)} width={100} alt={file.name} />
          </Box>
        </Box>
      </Paper>
      <Typography fontFamily='Birthstone' fontSize={26} fontWeight='bold' color={currentFilter === filter ? "#1976d2" : "gray"}>{ label }</Typography>
    </Grid>
  </Box>
}


export default React.memo(FileItem)