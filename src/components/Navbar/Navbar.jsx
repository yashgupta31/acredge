import { Box, Button, IconButton, Input, TextField, Typography, useMediaQuery } from '@mui/material'
import React, { useContext, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { CiBellOn, CiDark, CiLight, CiMail, CiUser } from "react-icons/ci";
import './Navbar.css';
import Login from '../Login/Login';
import { ThemeContext } from '../../context/ThemeContext';
// import { RxCross2 } from 'react-icons/rx';
// import { IconBase } from 'react-icons';

const Navbar = () => {
  const {theme, setTheme}= useContext(ThemeContext);
  console.log(theme)
    const [isOpen, setIsOpen]= useState(false)
    let navigate= useNavigate();
    const location = useLocation();
    let path= location.pathname.split('/')[1];

    const isLargerThan900= useMediaQuery('(min-width: 900px)')
    return (
        <Box height={'5.2rem'} width={'100%'} bgcolor={theme?'white': '#222431'} display={'flex'} position={'fixed'} top={0} zIndex={99} alignItems={'center'} justifyContent={'space-between'} p={isLargerThan900?'0rem 2rem': '0rem 1rem'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 4px 12px'}>
           <Box display={'flex'}>
            <Typography  onClick={()=> navigate('/')} sx={{cursor: 'pointer', color: theme? '#282828': 'white'}} fontSize={'1.5rem'} fontWeight={600}>ACREDGE</Typography>
            {/* <img  onClick={()=> navigate('/')} style={{width: '7rem', cursor: 'pointer'}} src="https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Flogo.png&w=384&q=75" alt="" /> */}

            <Box display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} width={isLargerThan900?'15rem': '11rem'} ml={'2rem'} >
                {/* <NavLink to={'/'} style={{textDecoration: 'none'}}>Home</NavLink> */}
                <Typography color={path==''? '#EB6753': theme? '#282828': 'white'} onClick={()=> navigate('/')} sx={{cursor: 'pointer'}}>Home</Typography>
                <Typography color={path=='property-buy' ?'#EB6753': theme? '#282828': 'white'} onClick={()=> navigate('/property-buy')} sx={{cursor: 'pointer'}}>Buy</Typography>
                <Typography color={path=='property-rent'? '#EB6753': theme? '#282828': 'white'} onClick={()=> navigate('/property-rent')} sx={{cursor: 'pointer'}}>Rent</Typography>
            </Box>
            </Box>
        <Box display={'flex'}>
            <Box display={'flex'} border={`1px solid ${theme? '#282828': 'white'}`} p={isLargerThan900?'0.7rem 1.5rem': '0.4rem 0.7rem'} borderRadius={'10px'}>
                <Typography color={theme? '#282828': 'white'}>Post Property</Typography>
                <Typography bgcolor={'#42A66D'} fontSize={'0.9rem'} p={'0.1rem 0.8rem'} position={'relative'} borderRadius={'13px'} ml={'0.5rem'} color='white'>
                   <Typography bgcolor={'white'} height={'100%'} width={'10%'} borderRadius={'50%'}  position={'absolute'} top={0} sx={{opacity: '20%', animation: 'shining 1s linear infinite'}}></Typography> FREE</Typography>
            </Box>

            <Box fontSize={'1.5rem'} width={isLargerThan900?'9rem': '7rem'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} ml={'2rem'}>
                <CiMail style={{cursor: 'pointer'}} color={theme? '#282828': 'white'}/>
                <Box  width={'2.5rem'} height={'2.5rem'} onClick={()=> setTheme(!theme)} sx={{cursor: 'pointer'}} borderRadius={'50%'} bgcolor={'rgba(0,0,0,0.2)'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                    {/* <CiBellOn /> */}
                    {theme?  <CiDark />:  <CiLight color='white' />}
                   
                </Box>
                <CiUser onClick={()=> setIsOpen(true)}  color={theme? '#282828': 'white'} style={{cursor: 'pointer'}}/>
            </Box>

            </Box>

            {/* -------login--------- */}
            <Login isOpen={isOpen} setIsOpen={setIsOpen} />

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