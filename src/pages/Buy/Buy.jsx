import { Box, Button, Checkbox, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { BiSolidPhoneCall, BiUndo } from 'react-icons/bi';
import { CiHeart, CiShare2 } from 'react-icons/ci';
import { PiWhatsappLogoDuotone } from 'react-icons/pi';
import './Buy.css';

const Buy = ({title}) => {
    const [isOpen, setIsOpen]= useState(false);
    const data=[
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Facredge-app-252ab.firebasestorage.app%2FPropertyImages%2F0obLZw8b17Y7nfaP6uRa%2F984smart-world-orchard-project-amenities-features24_742x3924_1734844401887_3c0c3b18-e89e-4f0a-9e8e-e793391d0a6e.jpg&w=384&q=75',
            name: 'Smart World, Orchard',
            location: 'Sector 61, Gurugram, Haryana',
            size: '3 BHK',
            type: 'Recedential',
            sqft: '1550 Sq.ft.',
            price: '2.65',
        },
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Facredge-app-252ab.firebasestorage.app%2FPropertyImages%2F1uhx69ePRfZSInOHkKQ3%2Ftarc-sector-91-gurgaon_1734842195385_da0522e2-c9ef-4863-84ef-3fca7e6d296e.jpg&w=384&q=75',
            name: 'Smart World, Orchard',
            location: 'Sector 61, Gurugram, Haryana',
            size: '3 BHK',
            type: 'Recedential',
            sqft: '1550 Sq.ft.',
            price: '2.65',
        },
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Facredge-app-252ab.firebasestorage.app%2FPropertyImages%2F2D5QTp9JPn4E46Jjmqdq%2Fcapture_1734842010487_8ec6c925-5106-4cd2-b507-d7397c173454.png&w=384&q=75',
            name: 'Smart World, Orchard',
            location: 'Sector 61, Gurugram, Haryana',
            size: '3 BHK',
            type: 'Recedential',
            sqft: '1550 Sq.ft.',
            price: '2.65',
        },
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Facredge-app-252ab.firebasestorage.app%2FPropertyImages%2FVPvFeDNhbBi8XRVXkd5w%2Fsmart-world-orchard-project-project-large-image1-1842_1__1734849368952_a5134388-5a8e-4af2-a191-085a18c270b9.jpg&w=384&q=75',
            name: 'Smart World, Orchard',
            location: 'Sector 61, Gurugram, Haryana',
            size: '3 BHK',
            type: 'Recedential',
            sqft: '1550 Sq.ft.',
            price: '2.65',
        },
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Facredge-app-252ab.firebasestorage.app%2FPropertyImages%2FzKkD3beVfjPFOpNrGexk%2Fgodrejnatureplus-02-900x600_1734687333379_a7f62016-aa0e-4943-9fdf-8991a64cc908.jpg&w=384&q=75',
            name: 'Smart World, Orchard',
            location: 'Sector 61, Gurugram, Haryana',
            size: '3 BHK',
            type: 'Recedential',
            sqft: '1550 Sq.ft.',
            price: '2.65',
        }
    ]

    const isLargerThan1200= useMediaQuery('(min-width: 1200px)');
    const isLargerThan900= useMediaQuery('(min-width: 900px)');
    const isLargerThan600= useMediaQuery('(min-width: 600px)');
  return (
    <Box p={isLargerThan1200?'1rem 9rem': '1rem 1rem'} pt={'8rem'}>
        
        <Box mb={'3rem'}>
            <Typography fontSize={'1.8rem'}>Homes for {title}</Typography>
            <Typography>HomeFor/ {title}</Typography>
        </Box>
        {!isLargerThan900 && <Button onClick={()=> setIsOpen(!isOpen)} variant={isOpen?'contained': 'outlined'}  sx={{mb: '1rem', color: isOpen?'white':'#EB6753', border: '1px solid #EB6753', bgcolor: isOpen && '#EB6753'}}>Filter</Button>}
        
        <Box display={'flex'} justifyContent={'space-between'} position={'relative'}>
            
            {/* -------left----- */}
 {        ( isLargerThan900 || isOpen ) &&
   <Box bgcolor={'white'} width={isLargerThan900?'30%': '100%'} position={!isLargerThan900 && 'absolute'} zIndex={!isLargerThan900 && 98} height={'60rem'} display={'flex'} flexDirection={'column'} p={'1.4rem'} borderRadius={'12px'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 4px 12px'}>
                <Box mb={'2rem'}>
                <Typography mb={'1rem'}>Find your home</Typography>
                <TextField placeholder='What are you looking for?' sx={{width: '100%'}}/>
                </Box>
                
                {/* --filter1-- */}
                <Box display={'flex'} flexDirection={'column'} alignItems={'start'} mb={'2rem'}>
                <Typography ml={'0.6rem'}>Listing Status</Typography>
                <Typography display={'flex'} alignItems={'center'}><Checkbox />All</Typography>
                <Typography display={'flex'} alignItems={'center'}><Checkbox />Buy</Typography>
                <Typography display={'flex'} alignItems={'center'}><Checkbox />Rent</Typography>
                </Box>

                {/* ----filter2---- */}
                <Box display={'flex'} flexDirection={'column'} alignItems={'start'} mb={'2rem'}>
                <Typography ml={'0.6rem'}>Property Type</Typography>
                <Typography display={'flex'} alignItems={'center'}><Checkbox />All</Typography>
                <Typography display={'flex'} alignItems={'center'}><Checkbox />Residential</Typography>
                <Typography display={'flex'} alignItems={'center'}><Checkbox />Commercial</Typography>
                </Box>

                {/* -----rang_filter---- */}
                <Box  mb={'2rem'}>
                    <Typography>Price Range</Typography>
                    <Slider />
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} mt={'0.6rem'}>
                        <TextField value={'₹10.00 K'} sx={{width: '45%'}} disabled/>
                        <Typography fontSize={'1.3rem'}>-</Typography>
                        <TextField value={'₹10.00 K'} sx={{width: '45%'}} disabled/>
                    </Box>
                </Box>

                {/* ------Location-------- */}
                <Box mb={'2rem'}>
                    <Typography  mb={'1rem'}>Location</Typography>
                    <TextField placeholder='Enter a location' sx={{width: '100%'}} />
                </Box>
                <Button variant='contained' size='large' sx={{width: '100%', height: '3rem', borderRadius: '5px', bgcolor: '#EB6753'}}>Search</Button>
            <Typography display={'flex'} alignItems={'center'} mt={'1rem'}><BiUndo style={{marginRight: '0.3rem', fontSize: '1.1rem'}} />Reset all filters</Typography>
            </Box>}

            {/* ---------right container--------- */}
            <Box width={isLargerThan900? '66%': '100%'} display={'grid'} gridTemplateColumns={isLargerThan600?'repeat(2, 1fr)': 'repeat(1, 1fr)'} gap={5}>
                {/* ------each box------ */}
                {
                        data.map((elem, index)=>(
                            <Box key={index} className={'each-buy-box'} bgcolor={'white'} height={'29rem'} display={'flex'} flexDirection={'column'} borderRadius={'12px'} overflow={'hidden'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 4px 12px'}>
                
                            {/* -------each image------ */}
                                <Box position={'relative'} width={'100%'} height={'47%'} overflow={'hidden'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                    <img className='each-buy-image' style={{height: isLargerThan600?'100%': 'auto', width: isLargerThan600?'100%': 'auto'}} src={elem.image} alt="" />
                                <Typography position={'absolute'} bottom={'1rem'} left={'1rem'} bgcolor={'white'} p={'0.2rem 0.5rem'} borderRadius={'4px'}>₹2.65 Cr</Typography>
                                </Box>
                                {/* ---each bottom----- */}
                                <Box  p={'1rem'}>
                                <Box>
                                    <Typography fontWeight={600}>Smart world, orchade</Typography>
                                    <Typography>Sector1 Gurugram, Haryana</Typography>
                                </Box>
                                <Box display={'flex'} justifyContent={'space-between'} mt={'1rem'}>
                                    <Typography>3 BHK</Typography>
                                    <Typography>Resedential</Typography>
                                    <Typography>5500 sq.ft</Typography>
                                </Box>
            
                                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={'1rem 0rem'} borderTop={'1px solid black'} borderBottom={'1px solid black'} mt={'1rem'} mb={'1rem'}>
                                    <Typography>Under Construction</Typography>
                                    <Box display={'flex'} alignItems={'center'} fontSize={'1.5rem'} width={'4rem'} justifyContent={'space-evenly'}>
                                    <CiHeart />
                                    <CiShare2 />
                                    </Box>
                                </Box>
            
                                <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                                    <Box p={'0.4rem'} width={'7rem'} fontSize={'1.1rem'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} borderRadius={'5px'} border={'1px solid black'}><PiWhatsappLogoDuotone style={{fontSize: '1.5rem'}} /> Whatsapp</Box>
                                    <Box p={'0.4rem'} width={'7rem'} fontSize={'1.1rem'} display={'flex'} alignItems={'center'} justifyContent={'space-evenly'} borderRadius={'5px'} border={'1px solid black'}><BiSolidPhoneCall style={{fontSize: '1.5rem'}} /> Whatsapp</Box>
            
                                </Box>
            
                                </Box>
                                
                            </Box>
                        ))
                    }
            </Box>
        </Box>
    </Box>
  )
}

export default Buy