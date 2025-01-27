import { Box, Button, IconButton, Input, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { CiBellOn, CiMail, CiUser } from "react-icons/ci";
import './Navbar.css';
import Login from '../Login/Login';
// import { RxCross2 } from 'react-icons/rx';
// import { IconBase } from 'react-icons';

const Navbar = () => {
    const [isOpen, setIsOpen]= useState(false)
    let navigate= useNavigate();
    const location = useLocation();
    let path= location.pathname.split('/')[1];

    const isLargerThan900= useMediaQuery('(min-width: 900px)')
    return (
        <Box height={'5.2rem'} width={'100%'} bgcolor={'white'} display={'flex'} position={'fixed'} top={0} zIndex={99} alignItems={'center'} justifyContent={'space-between'} p={isLargerThan900?'0rem 2rem': '0rem 1rem'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 4px 12px'}>
           <Box display={'flex'}>
            {/* <Typography fontSize={'1.5rem'}>ACREDGE</Typography> */}
            <img  onClick={()=> navigate('/')} style={{width: '7rem', cursor: 'pointer'}} src="https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Flogo.png&w=384&q=75" alt="" />

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
                <Typography bgcolor={'#42A66D'} fontSize={'0.9rem'} p={'0.1rem 0.8rem'} position={'relative'} borderRadius={'13px'} ml={'0.5rem'} color='white'>
                   <Typography bgcolor={'white'} height={'100%'} width={'10%'} borderRadius={'50%'}  position={'absolute'} top={0} sx={{opacity: '20%', animation: 'shining 1s linear infinite'}}></Typography> FREE</Typography>
            </Box>

            <Box fontSize={'1.5rem'} width={isLargerThan900?'9rem': '7rem'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} ml={'2rem'}>
                <CiMail style={{cursor: 'pointer'}}/>
                <Box  width={'2.5rem'} height={'2.5rem'} sx={{cursor: 'pointer'}} borderRadius={'50%'} bgcolor={'#F7F7F7'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    <CiBellOn />
                </Box>
                <CiUser onClick={()=> setIsOpen(true)}  style={{cursor: 'pointer'}}/>
            </Box>

            </Box>

            {/* -------login--------- */}
            <Login isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* <Box bgcolor={'rgba(0, 0, 0, 0.5)'} onClick={()=> setIsOpen(false)} height={'100vh'} width={'100%'} position={'absolute'} top={'0'} left={0} sx={{transition: '0.3s'}}  visibility={isOpen?'visible':'hidden'}>
                <Box className={`loginSlider ${isOpen? 'open': ''}`} onClick={(e)=> e.stopPropagation()} sx={{transition: '0.3s', opacity: '0%', p: '1.3rem'}} display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'space-between'} height={'23rem'} width={'34rem'} bgcolor={'white'} ml={'auto'} mr={'auto'} borderRadius={'10px'}>
                    <Box width={'100%'} display={'flex'} justifyContent={'space-between'} p={'1rem 0rem'} borderBottom={'1px solid lightgrey'}>
                    <Typography variant='span' fontFamily={'sans-serif'} fontSize={'1.2rem'}>Welcome to Acredge</Typography>
                    <IconButton size='medium' sx={{bgcolor: 'lightgrey', borderRadius: '50%'}} onClick={()=> setIsOpen(false)}><RxCross2 /></IconButton>
                    </Box>

                    <Typography variant='span'  fontFamily={'sans-serif'} borderBottom={'1px solid black'} p={'0.6rem'}>Sign In</Typography>

                    <Box width={'100%'} mt={'-1.5rem'}>
                        <Typography mb={'0.4rem'}>Enter Phone Number</Typography>
                        <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                            <TextField  placeholder='+91 (India)' sx={{width: '25%'}} disabled  />
                            <TextField  placeholder='Phone Number' sx={{width: '71%'}}  />
                        </Box>
                    </Box>

                    <Button variant='contained'  sx={{width: '100%', p: '0.7rem 0rem', bgcolor: '#EB6753'}}>Send OTP</Button>
                </Box>
            </Box> */}

            <style>
        {`
          @keyframes shining {
            0% {
              left: -10%;
            }
            100% {
              left: 110%;
            }
          }
        `}
      </style>

        </Box>
    )
}

export default Navbar