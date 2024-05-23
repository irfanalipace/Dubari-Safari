import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BlogCard = () => {


    const blogData= [
        {
            blogimg:'/blogimage.png',
            date:'24 Feb 2024',
            title:'Sustainable Practices at Arabian Adventures',
            description:`Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
        },
        {
            blogimg:'/blogimage.png',
            date:'24 Feb 2024',
            title:'Sustainable Practices at Arabian Adventures',
            description:`Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
        },
        {
            blogimg:'/blogimage.png',
            date:'24 Feb 2024',
            title:'Sustainable Practices at Arabian Adventures',
            description:`Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
        },
        {
            blogimg:'/blogimage.png',
            date:'24 Feb 2024',
            title:'Sustainable Practices at Arabian Adventures',
            description:`Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
        },
        {
            blogimg:'/blogimage.png',
            date:'24 Feb 2024',
            title:'Sustainable Practices at Arabian Adventures',
            description:`Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
        },
        {
            blogimg:'/blogimage.png',
            date:'24 Feb 2024',
            title:'Sustainable Practices at Arabian Adventures',
            description:`Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica`,
        },
    ]


  return (
    <>

    <Box sx={{padding:'4rem 5%',}}>

<Box sx={{textAlign:'center', marginBottom:'2rem'}}>
    <Typography variant='h1' sx={{fontSize:'2rem', fontWeight:'700'}}> Read Our Recent Blogs</Typography>
    <Typography variant='body1' sx={{fontSize:'1rem', color:'grey'}}>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Anta</Typography>

</Box>


<Grid container spacing={4}>

{
    blogData.map((val, ind)=>(
        <Grid item lg={4} md={6} sm={12} xs={12}>
<Card sx={{ maxWidth: 345, backgroundColor:'#fdf4f1', width:'100%' }} key={ind}>
      <CardMedia
      component={'img'}
        sx={{ height:'auto', width:'100%', objectFit:'cover' }}
        image={val.blogimg}
        title="Blog Image"
      />
      <CardContent>

        <Button sx={{backgroundColor:'green', borderRadius:'20px', color:'white', fontSize:'0.7rem'}} variant='contained'>{val.date}</Button>

        <Typography gutterBottom variant="h5" component="div" sx={{marginTop:'1rem', fontWeight:'600', fontSize:'1.2rem'}}>
       {val.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{fontSize:'0.9rem'}}>
       {val.description}
        </Typography>
      </CardContent>
      <CardActions sx={{display:'flex', justifyContent:'end', alignItems:'end', padding:'1rem'}}>

        <Button size="small" variant='contained'>Read More <ArrowForwardIcon/></Button>
      </CardActions>
    </Card>


</Grid>
    ))
}




</Grid>



    </Box>

    </>
  )
}

export default BlogCard