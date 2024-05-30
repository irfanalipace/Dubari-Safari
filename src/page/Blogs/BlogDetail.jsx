import { Box, Button, Typography, CircularProgress } from '@mui/material'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { getBlogBID } from '../../store/actions/blogAction'
import { FaArrowLeftLong } from "react-icons/fa6";

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
        window.scroll(0, 0)
    }, [])

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
            <Box sx={{ padding: '0px 50px' }}>
                <Button variant='contained' onClick={handleBack} sx={{
                    textTransform: 'none', backgroundColor: '#F3F3F3', color: 'black', padding: '10px 20px'
                }}><FaArrowLeftLong /> &nbsp; Back to HomePage</Button>
            </Box>

            <Box sx={{ padding: '60px' }}>
                <Button sx={{ backgroundColor: 'green', borderRadius: '20px', color: 'white', fontSize: '0.7rem' }} variant='contained'>
                    {moment(data.created_at).format('DD MMM YYYY')}
                </Button>
                <Box sx={{ padding: '30px 0px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Typography
                        sx={{
                            cursor: "pointer",
                            fontSize: "1.5rem",
                            fontWeight: "600",
                        }}
                    >
                        {data?.title}
                    </Typography>
                    <Typography
                        sx={{
                            cursor: "pointer",
                            fontSize: "1rem",
                            fontWeight: "500",
                            color: "#506273"
                        }}
                    >
                        {data?.description}
                    </Typography>
                </Box>
                {data?.contents?.map((val, ind) => (
                    <Box key={ind} sx={{ display: 'flex', flexDirection: 'column', gap: "20px", padding: '30px 0px' }}>
                        <Box sx={{ display: 'flex', alignItems: 'start', gap: '50px' }}>
                            {ind % 2 === 0 ? (
                                <>
                                    <Box flex={2}>
                                        <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>{val.title}</Typography>
                                        <Typography sx={{ color: "#506273", fontSize: '1rem' }}>
                                            {val.description}
                                        </Typography>
                                    </Box>
                                    <Box flex={1.5}>
                                        <img src={`${base}${val.image}`} alt="" style={{ width: '100%', height: '60vh', objectFit: 'cover', borderRadius: '5px' }} />
                                    </Box>
                                </>
                            ) : (
                                <>
                                    <Box flex={1.5}>
                                        <img src={`${base}${val.image}`} alt="" style={{ width: '100%', height: '60vh', objectFit: 'cover', borderRadius: '5px' }} />
                                    </Box>
                                    <Box flex={2}>
                                        <Typography sx={{ fontSize: '24px', fontWeight: 600 }}>{val.title}</Typography>
                                        <Typography sx={{ color: "#506273", fontSize: '1rem' }}>
                                            {val.description}
                                        </Typography>
                                    </Box>
                                </>
                            )}
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
