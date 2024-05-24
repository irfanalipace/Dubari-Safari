import { Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const Booking = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate('/')
    }

    // Example data for the table
    const bookingsData = [
        { id: 1, date: '2024-05-24', tickets: 2, price: '$100', status: 'Confirm' },
        { id: 2, date: '2024-05-25', tickets: 3, price: '$150', status: 'Pending' },
        { id: 2, date: '2024-05-25', tickets: 3, price: '$150', status: 'Confirm' },
        { id: 2, date: '2024-05-25', tickets: 3, price: '$150', status: 'Pending' },
        { id: 2, date: '2024-05-25', tickets: 3, price: '$150', status: 'Confirm' },
    ];

    const styleFont = {
        fontWeight: 600
    }

    return (
        <>
            <Box sx={{ padding: '30px' }}>
                <Button onClick={handleBack} sx={{
                    textTransform: 'none', backgroundColor: '#F3F3F3', color: 'black', padding: '10px 20px'
                }}>👈🏻Back to HomePage</Button>
                <Typography sx={{ fontSize: '28px', fontWeight: 700, padding: '30px 0px' }}>All Bookings</Typography>

                {/* MUI Table */}
                <TableContainer>
                    <Table>
                        <TableHead sx={{ backgroundColor: '#E3E3E3' }}>
                            <TableRow >
                                <TableCell sx={styleFont}>Booking ID</TableCell>
                                <TableCell sx={styleFont}>Tour Date</TableCell>
                                <TableCell sx={styleFont}>How Many Tickets</TableCell>
                                <TableCell sx={styleFont}>Price</TableCell>
                                <TableCell sx={styleFont}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bookingsData.map((booking) => (
                                <TableRow key={booking.id}>
                                    <TableCell>{booking.id}</TableCell>
                                    <TableCell>{booking.date}</TableCell>
                                    <TableCell>{booking.tickets}</TableCell>
                                    <TableCell>{booking.price}</TableCell>
                                    <TableCell sx={{ color: 'green' }}>{booking.status}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box >
        </>
    )
}

export default Booking
