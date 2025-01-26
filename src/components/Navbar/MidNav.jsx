import { Box, IconButton, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { FaInstagram, FaRegUserCircle, FaTwitter } from 'react-icons/fa'
import './MidNav.css'
import { RxCross2 } from 'react-icons/rx'
import { MdChevronRight } from 'react-icons/md'
import { GrFacebookOption } from 'react-icons/gr'
import { BiLogoLinkedin } from 'react-icons/bi'
import { useLocation, useNavigate } from 'react-router-dom'

const MidNav = () => {
  const [isOpen, setIsOpen]= useState(false);
  const navigate= useNavigate();
  const location = useLocation();
    let path= location.pathname.split('/')[1];

  const isLargerThan400= useMediaQuery('(min-width: 400px)');
  return (
    <Box height={'4.5rem'} width={'100%'} bgcolor={'white'} display={'flex'} position={'fixed'} top={0} zIndex={99} alignItems={'center'} justifyContent={'space-between'} p={'0rem 1rem'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 4px 12px'}>
<CiMenuFries style={{fontSize: '1.6rem'}} onClick={()=> setIsOpen(true)} />
{/* <Typography fontSize={'1.3rem'} fontWeight={600}>ACREDGE</Typography> */}
<img onClick={()=> navigate('/')} style={{width: '6rem'}} src="https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Flogo.png&w=384&q=75" alt="" />

<FaRegUserCircle style={{fontSize: '1.3rem'}} />

    {/* -----slider------ */}

    <Box bgcolor={'rgba(0, 0, 0, 0.7)'} onClick={()=> setIsOpen(false)} width={'100%'} height={'100vh'} position={'fixed'} top={'0'} left={0} zIndex={98} sx={{ visibility: isOpen ? 'visible' : 'hidden' }}>
    <Box className={`slider ${isOpen? 'open': ''}`} bgcolor={'#F7F7F7'}  width={isLargerThan400?'80%': '94%'} height={'100vh'} zIndex={99} position={'fixed'} left={'-30rem'} sx={{transition: '0.1s'}} top={0} onClick={(event) => event.stopPropagation()}>
    <Box bgcolor={'#FDF4F3'} height={'5rem'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={isLargerThan400?'1rem': '0.5rem'}>
      <Typography fontSize={isLargerThan400?'1.3rem': '1.1rem'} fontWeight={600}>Welcome To Acredge</Typography>
      <IconButton  sx={{bgcolor: '#EB6753', fontSize: isLargerThan400?'1.1rem':'0.9rem'}} onClick={()=> setIsOpen(false)}><RxCross2 style={{color: 'white'}} /></IconButton>
    </Box>

    <Box p={'2rem 0rem'} borderBottom={'1px solid grey'}>
      <Box onClick={()=> {navigate('/'); setIsOpen(false)}} color={path=='' && '#EB6753'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={'0.5rem 2rem'} fontSize={'1.8rem'}><Typography>Home</Typography><MdChevronRight /></Box>
      <Box  onClick={()=> {navigate('/property-buy'); setIsOpen(false)}} color={path=='property-buy' && '#EB6753'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={'0.5rem 2rem'} fontSize={'1.8rem'}><Typography>Buy</Typography><MdChevronRight /></Box>
      <Box onClick={()=> {navigate('/property-rent'); setIsOpen(false)}} color={path=='property-rent' && '#EB6753'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={'0.5rem 2rem'} fontSize={'1.8rem'}><Typography>Rent</Typography><MdChevronRight /></Box>
    </Box>

    <Box display={'flex'} flexDirection={'column'} p={'2rem'} justifyContent={'space-evenly'} height={'14rem'} borderBottom={'1px solid grey'}>
      <Typography>Toll free customer care</Typography>
      <Typography fontWeight={'600'}>+9990007746</Typography>
      <Typography>Need live support?</Typography>
      <Typography fontWeight={'600'}>connect@acredge.in</Typography>
    </Box>

    <Box display={'flex'}  alignItems={'center'} justifyContent={'space-between'} p={'2rem 2rem'} width={'100%'}>
      <Typography>Follow us</Typography>
      <GrFacebookOption />
      <FaTwitter />
      <FaInstagram />
      <BiLogoLinkedin />
    </Box>
    </Box>
    </Box>
    

    </Box>

  )
}

export default MidNav