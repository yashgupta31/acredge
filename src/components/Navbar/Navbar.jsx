import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { CiBellOn, CiMail, CiUser } from "react-icons/ci";

const Navbar = () => {
    let navigate= useNavigate();
    const location = useLocation();
    let path= location.pathname.split('/')[1];
    const isLargerThan900= useMediaQuery('(min-width: 900px)')
    return (
        <Box height={'5.2rem'} width={'100%'} bgcolor={'white'} display={'flex'} position={'fixed'} top={0} zIndex={99} alignItems={'center'} justifyContent={'space-between'} p={isLargerThan900?'0rem 2rem': '0rem 1rem'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 4px 12px'}>
           <Box display={'flex'}>
            {/* <Typography fontSize={'1.5rem'}>ACREDGE</Typography> */}
            <img  onClick={()=> navigate('/')} style={{width: '7rem'}} src="https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Flogo.png&w=384&q=75" alt="" />

            <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} width={isLargerThan900?'15rem': '11rem'} ml={'2rem'} >
                {/* <NavLink to={'/'} style={{textDecoration: 'none'}}>Home</NavLink> */}
                <Typography color={path=='' && '#EB6753'} onClick={()=> navigate('/')} sx={{cursor: 'pointer'}}>Home</Typography>
                <Typography color={path=='property-buy' && '#EB6753'} onClick={()=> navigate('/property-buy')} sx={{cursor: 'pointer'}}>Buy</Typography>
                <Typography color={path=='property-rent' && '#EB6753'} onClick={()=> navigate('/property-rent')} sx={{cursor: 'pointer'}}>Rent</Typography>
            </Box>
            </Box>
        <Box display={'flex'}>
            <Box display={'flex'} border={'1px solid black'} p={isLargerThan900?'0.7rem 1.5rem': '0.4rem 0.7rem'} borderRadius={'10px'}>
                <Typography>Post Property</Typography>
                <Typography bgcolor={'green'} fontSize={'0.9rem'} p={'0.1rem 0.8rem'} borderRadius={'13px'} ml={'0.5rem'} color='white'>FREE</Typography>
            </Box>

            <Box fontSize={'1.5rem'} width={isLargerThan900?'9rem': '7rem'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} ml={'2rem'}>
                <CiMail />
                <Box  width={'2.5rem'} height={'2.5rem'} borderRadius={'50%'} bgcolor={'#F7F7F7'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <CiBellOn />
                </Box>
                <CiUser />
            </Box>

            </Box>

        </Box>
    )
}

export default Navbar