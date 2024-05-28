import { Box, Typography } from '@mui/material'
import React from 'react'
import { center } from '../../components/Box/styles'

const GiftDetail = () => {
    return (
        <>
            <Box sx={{
                padding: '70px',
            }}>
                <Box sx={{
                    borderRadius: '15px',
                    border: ' 1px solid #E1E1E1',
                    padding: '15px'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'start', gap: '30px' }}>
                        <Box flex={1}>
                            <img src="/cardimage.png" alt="" />
                        </Box>
                        <Box flex={3} gap={4}>
                            <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>Evening Desert Safari</Typography>
                            <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#A9A9A9' }}>
                                This off-road activity brings you to explore the Dubai desert with fun activities such as dune bashing and camel ride experience. This off-road activity brings you to explore the Dubai desert with fun activities such as dune bashing and camel ride experience. This off-road activity brings you to explore the Dubai desert with fun activities such as dune bashing and camel ride experience. This off-road activity brings you to explore the Dubai desert with fun activities such as dune bashing and camel ride experience. This off-road activity brings you to explore the Dubai desert with fun activities such as dune bashing and camel ride experience.This off-road activity brings you to explore the Dubai desert with fun activities such as dune bashing .
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default GiftDetail