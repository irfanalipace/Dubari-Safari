import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import React, { useEffect } from 'react';

const GuidLine = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    const data1 = [
        {
            title: 'How to Book',
            descriptions: [
                'To book any of our Tours and Safaris book online, or call us on +971 50 377 3786 or visit any of our Office.',
                'Purchase of any of our products or services is subject to our Conditions of Contract.',
            ]
        },
        {
            title: 'Vehicles',
            descriptions: [
                'Our vehicle fleet ensures comfort and safety. By law, all passengers must wear seat belts while the vehicle is in motion.',
                'There are special considerations for children travelling in our safari vehicles. For the safety of our younger passengers in the vehicles, special seating is required and must be requested and booked in advance.',
                'Seating is not pre-allocated. During safaris, seating for passengers within one 4-wheel drive vehicle will be rotated. We recommend that all passengers read our safety card which is available with the driver/guide in the vehicle before the start of the excursion.'
            ]
        },
    ];

    const data2 = [
        {
            title: 'Good To Know',
            descriptions: [
                'Our sightseeing tours are conducted in more than one language and are usually multilingual, however our safari is conducted in English only.',
                'Purchase of any of our products or services is subject to our Conditions of Contract.',
                'Our safaris involve off-road driving through at Lahbab Desert Area - which adds to the excitement of the excursion. However, because of the adventurous nature and the rough terrain, you should not participate if your health or any pre-existing medical conditions (including heart ailments neck or back problems) may be adversely affected.',
                'Additional guidelines for visitors to the UAE can be found on the websites below:'
            ],
        },
        {
            title: 'Vehicles',
            descriptions: [
                'Our vehicle fleet ensures comfort and safety. By law, all passengers must wear seat belts while the vehicle is in motion.',
                'There are special considerations for children travelling in our safari vehicles. For the safety of our younger passengers in the vehicles, special seating is required and must be requested and booked in advance.',
                'Seating is not pre-allocated. During safaris, seating for passengers within one 4-wheel drive vehicle will be rotated. We recommend that all passengers read our safety card which is available with the driver/guide in the vehicle before the start of the excursion.',
            ],
            link: [
                'www.visitabudhabi.ae/ae-en/',
                'www.visitdubai.com/en',
                'www.visitrasalkhaimah.com',
                'www.visitsharjah.com',
            ]
        },
        {
            title: 'Cultural awareness',
            descriptions: [
                'Photographing 	government buildings, military institutions and all oil and gas 	refineries is strictly prohibited',
                ' 	Don’t 	smoke indoors or in public areas',
                ' 	Always 	ask permission before taking pictures of Emiratis.',
                ' 	Avoid 	taking photographs of ladies dressed in traditional attire.',
                'As a mark of respect for local customs, please avoid public displays of 	affection.',
                ' 	The 	UAE has a reasonably relaxed dress code, but it is an Islamic 	country and modest clothing is recommended, particularly in shopping 	malls, souks, rural areas and during visits to mosques or places of 	worship. For ladies, shoulders and knees should be covered. Clothing 	should not be transparent, tight or revealing. Beachwear is 	acceptable at beach clubs, in the hotel, at the pool or on the 	beach. Light summer clothing is suitable for most of the year. 	Sweaters or jackets may be needed during the winter months, 	especially in the evenings and on desert and mountain safaris. Hats, 	sunblock and sunglasses are advised during daylight hours.'
            ],
        },
        {
            title: 'Dress code for Sheikh Zayed Grand Mosque Visit',
            descriptions: [
                ' 	If 	your tour includes a visit to the Sheikh Zayed Grand Mosque, please 	read the dress code information 	at https://www.szgmc.gov.ae/en/mosque-manner.',
                ' 	No 	transparent (see through) clothing',
                ' 	No 	shorts or skirts',
                ' 	No 	sleeveless shirts',
                ' 	No 	clothing with profanity',
                ' 	No 	tight clothing, swimwear or beachwear'
            ],
        },
        {
            title: 'Alcohol and entertainment',
            descriptions: [
                ' 		Serving 		of alcohol and performances of live entertainment are not permitted 		for a period of 24 hours starting at sunset on the eve of all 		religious holidays. The legal drinking age in the UAE is 21 years 		of age.',

            ],
        },
        {
            title: 'Ramadan',
            descriptions: [
                ' 		 		Ramadan 		is the holy month during which the Islamic world commemorates the 		revelation of the Holy Quran and all Muslims are required to fast 		from dawn to dusk. Eating, drinking and smoking in public areas 		during daylight hours is strictly prohibited for all, throughout 		this month. Food is served at some restaurants and cafes, and in 		the hotels.',

            ],
        },
    ];

    const seatData = [
        { seatType: 'Infant Seat', applicableFor: 'Infant Seat (0-12 months and/or under 75cm)', vehicles: 'Exclusive Vehicle' },
        { seatType: 'Baby Seat', applicableFor: 'Baby Seat (1-3 years and/or 65cm – 95cm)', vehicles: 'Exclusive Vehicle' },
    ];

    return (
        <>
            <Box sx={{
                position: 'relative',
                height: '30vh',
                backgroundColor: 'black',
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.1) 30.2%, rgba(0,0,0,0.1) 90.9%),url(${"/bgimage.png"})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "none",
            }}>
                <Typography sx={{
                    fontSize: '40px',
                    color: 'white',
                    fontWeight: 600,
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    Guidelines
                </Typography>
            </Box>
            <Box sx={{ padding: '50px' }}>
                {data1.map((val, ind) => (
                    <Box key={ind}>
                        <Typography sx={{ fontSize: "28px", fontWeight: 700 }}>{val.title}</Typography>
                        <ul style={{ padding: '10px' }}>
                            {val.descriptions.map((description, descIndex) => (
                                <li key={descIndex} style={{ color: '#506273', fontSize: '16px' }}>
                                    {description}
                                </li>
                            ))}
                        </ul>
                    </Box>
                ))}

                <Table sx={{ marginTop: '20px' }}>
                    <TableHead sx={{
                        backgroundColor: '#E3E3E3'
                    }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Seat Type</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Applicable For</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Vehicles</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {seatData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.seatType}</TableCell>
                                <TableCell>{row.applicableFor}</TableCell>
                                <TableCell>{row.vehicles}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {data2.map((val, ind) => (
                    <Box key={ind}>
                        <Typography sx={{ fontSize: "28px", fontWeight: 700 }}>{val.title}</Typography>
                        <ul style={{ padding: '10px' }}>
                            {val.descriptions.map((description, descIndex) => (
                                <li key={descIndex} style={{ color: '#506273', fontSize: '16px' }}>
                                    {description}
                                </li>
                            ))}
                            {val.link && val.link.map((link, linkIndex) => (
                                <li key={linkIndex} style={{ color: '#506273', fontSize: '16px' }}>
                                    <a href={`http://${link}`} target="_blank" rel="noopener noreferrer">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default GuidLine;
