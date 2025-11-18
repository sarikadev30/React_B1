// import styled from "styled-components"

// const Button=styled.button({
//   color:"Red",
//   width:"150px",
//   border:"2px solid black"
// })

// const H1=styled.h1`
//   color:Red
// `
import {Button, Box, Typography, Stack, Grid} from '@mui/material'
function App() {
  

  return (
    <>

      {/*
      <H1>Hi.. We are Covering Styled Component</H1>
      <Button>Click Me</Button> */}
      <Button variant="text">Text</Button>
      <Button variant="contained" sx={{color:"yellow"}}>Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Box sx={{border:"2px solid red" , width:{xs:"30%",md:"40%"}, margin:"4px"}}>
        <Typography variant="h1">h1: Lorem ipsum</Typography>
        <Typography variant="h2">h2: Lorem ipsum</Typography>
      </Box>
      <Stack direction="row" spacing={2}>
         <Box sx={{border:"2px solid red"}}>item 1</Box>
         <Box sx={{border:"2px solid blue"}}> item 2</Box>
         <Box sx={{border:"2px solid green"}}> item 3</Box>  
      </Stack>
      <Grid container>
        
        <Grid sx={{border:"2px solid red", width:"200px"}}>item 1</Grid>
        <Grid sx={{border:"2px solid blue",width:"200px"}}> item 2</Grid>
        <Grid sx={{border:"2px solid green", width:"200px"}}> item 3</Grid>
        
          
         
          <Grid sx={{border:"2px solid red", width:"200px"}}>item 4</Grid>
         <Grid sx={{border:"2px solid blue", width:"200px"}}> item 5</Grid>
         <Grid sx={{border:"2px solid green", width:"200px"}}> item 6</Grid> 
         

      </Grid>
    </>
  )
}

export default App
