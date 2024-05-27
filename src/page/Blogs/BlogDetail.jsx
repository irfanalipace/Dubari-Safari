import { Box, Button, Typography, CircularProgress } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { getBlogBID } from '../../store/actions/blogAction'

const BlogDetail = () => {
    const base = 'https://dubaisafari.saeedantechpvt.com/'
    const navigate = useNavigate()
    const { id } = useParams()
    const handleBack = () => {
        navigate('/')
    }
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        dispatch(getBlogBID(id))
            .then((result) => {
                setData(result.data.payload)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(false)
            })
    }, [dispatch, id])

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </Box>
        )
    }

    if (!data) {
        return <Typography>Error loading data</Typography>
    }

    return (
        <>
            <Box
                sx={{
                    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.1) 30.2%, rgba(0,0,0,0.1) 90.9%),url(${base}${data.banner_image_url})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    height: "50vh",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        color: "white",
                        position: "relative",
                        minHeight: "60vh",
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        paddingLeft: "5%",
                        paddingRight: "5%",
                    }}
                >
                    <Box minHeight={"8rem"}>
                        <Typography
                            sx={{
                                cursor: "pointer",
                                fontSize: "2.5rem",
                                fontWeight: "600",
                            }}
                        >
                            {data?.title}
                        </Typography>
                    </Box>
                    <Box sx={{ position: 'absolute', top: 50, left: 50 }}>
                        <Button onClick={handleBack} sx={{
                            textTransform: 'none', backgroundColor: '#F3F3F3', color: 'black', padding: '10px 20px'
                        }}>👈🏻Back to HomePage</Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ padding: '60px' }}>
                <Button sx={{ backgroundColor: 'green', borderRadius: '20px', color: 'white', fontSize: '0.7rem' }} variant='contained'>
                    {moment(data.created_at).format('DD MMM YYYY')}
                </Button>
                {data?.contents?.map((val, ind) => (
                    <Box key={ind} sx={{ display: 'flex', flexDirection: 'column', gap: "20px", padding: '30px 0px' }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>{val.title}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'start' }}>
                            <Box flex={2} sx={{ color: "#506273" }}>{val.description}</Box>
                            <Box flex={1.5}><img src={`${base}${val.image}`} alt="" style={{ width: '100%', height: '60vh', objectFit: 'cover', borderRadius: '5px' }} /></Box>
                        </Box>
                    </Box>
                ))}
                <Typography sx={{ fontSize: '30px', color: '#FF5532', fontWeight: 700 }}>FAQ's</Typography>
                {data?.faqs?.map((val, ind) => (
                    <Box key={ind} sx={{ display: 'flex', flexDirection: 'column', gap: "20px", padding: '30px 0px' }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>{val?.question}</Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: 500, color: "#506273" }}>{val?.answer}</Typography>

                    </Box>
                ))}
            </Box>
        </>
    )
}

export default BlogDetail
