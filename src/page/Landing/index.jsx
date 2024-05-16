import React from 'react'
import Header from './Header'
import ChooseUs from './Chooseus'
import Popular from './Popular'


const Landing = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            <Header />
            <ChooseUs />
            <Popular />
        </div>
    )
}

export default Landing