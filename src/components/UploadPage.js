import { Button, Grid, Paper } from "@material-ui/core";
import { Box, styled } from "@material-ui/system";

const Input = styled('input')({
  display: 'none',
});

export default function UploadPage({ setError, setFile }) {
  
  const handleUpload = (e) => {
    let file = e.target.files[0]
    // if (file.type !== 'image/jpeg' || file.type !== 'image/png') return setError(true) 
    setFile(file)
  }

  return (
      <Paper elevation={3}>
        <Box width={800} height={300}>
          <Grid
            width='100%'
            height='100%'
            container
            justifyContent='center'
            alignItems='center'
          >
            <Paper elevation={18}>
              <label htmlFor="contained-button-file">
                <Input
                  onChange={handleUpload}
                  accept='image/jpeg,image/png'
                  id="contained-button-file"
                  type="file"
                />
                <Button style={{fontFamily: 'Birthstone', fontSize: 24, fontWeight: 'bold'}} variant="contained" component="span">
                  Select photo
                </Button>
              </label>
            </Paper>
          </Grid>
        </Box>
      </Paper >
  )
}
