import { Backdrop, Grid, Box } from '@material-ui/core';
import React, { useCallback, useState } from 'react'
import ErrorPage from './ErrorPage';
import UploadPage from './UploadPage';
import errors from '../data/errors.json'
import UploadedPage from './UploadedPage';

export default function HomePage () {

  const [error, setError] = useState(false);
  const [file, setFile] = useState(null)

  const onBackdropClick = useCallback(
    (e) => {
    if (e.target === e.currentTarget) setError(false);
  },[],
  )
  const handleCloseError = useCallback(
    () => {
    setError(false);
  },[],
  )
  const handleCleanDashboard = useCallback(
   () => {
    setFile(null);
  },[],
  )


  return <>
      <Box width="100%" p={3}>
      <Grid
        width='100%'
        height='100%'
        container
        justifyContent='center'
        alignItems='start'
      >
        {!file
          ? <UploadPage setError={setError} setFile={setFile}/>
          : <UploadedPage deletePhoto={handleCleanDashboard} file={file}/>
        }
      </Grid>
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={error}
        onClick={onBackdropClick}
        >
        <ErrorPage
          text={errors.loadingFilesLimit}
          handleCloseError={handleCloseError}
          />
      </Backdrop>
  </>
}