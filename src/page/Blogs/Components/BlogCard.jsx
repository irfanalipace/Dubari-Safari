import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useDispatch } from 'react-redux';
import { getAllBlogs } from '../../../store/actions/blogAction';
import { BASE_URL } from '../../../utils/baseURL';

const BlogCard = () => {
    const base = 'https://dubaisafari.saeedantechpvt.com/';
    const dispatch = useDispatch()
    const [blog, setBlog] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        (() => {
            dispatch(getAllBlogs())
                .then((result) => {
                    // console.log(result, 'hhhh')
                    setBlog(result.data.payload);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        })();
    }, []);
    console.log(blog, 'jhhh')


    return (
        <>

            <Box sx={{ padding: '4rem 5%', }}>

                <Box sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <Typography variant='h1' sx={{ fontSize: '2rem', fontWeight: '700' }}> Read Our Recent Blogs</Typography>
                    <Typography variant='body1' sx={{ fontSize: '1rem', color: 'grey' }}>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Anta</Typography>

                </Box>


                <Grid container spacing={4}>

                    {
                        blog?.map((val, ind) => (
                            <Grid item lg={4} md={6} sm={12} xs={12}>
                                <Box key={ind}>
                                    <Box sx={{ backgroundColor: '#fdf4f1', }}>

                                        <Box>
                                            <img src={`${base}${val.banner_image_url}`} alt='' width={'100%'} style={{ objectFit: 'cover' }} />
                                        </Box>

                                        <Box padding='1rem 2rem'>
                                            <Button sx={{ backgroundColor: 'green', borderRadius: '20px', color: 'white', fontSize: '0.7rem' }} variant='contained'>{val.date}</Button>

                                            <Typography gutterBottom variant="h5" component="div" sx={{ marginTop: '1rem', fontWeight: '600', fontSize: '1.2rem' }}>
                                                {val.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                                                {val.description}
                                            </Typography>

                                            <Box sx={{ display: 'flex', alignItems: 'end', justifyContent: 'end', marginTop: '1rem' }}>
                                                <Button size="small" variant='contained' sx={{ textTransform: 'none' }}>Read More <ArrowForwardIcon /></Button>

                                            </Box>

                                        </Box>


                                    </Box>





                                </Box>
                            </Grid>
                        ))
                    }




                </Grid>



            </Box>

        </>
    )
}

export default BlogCard