import { Box, Typography, useMediaQuery } from '@mui/material'
import React, { useContext } from 'react'
import { BiLogoLinkedin } from 'react-icons/bi'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { GrFacebookOption } from 'react-icons/gr'
import { ThemeContext } from '../../context/ThemeContext'

const Footer = () => {
    const {theme}= useContext(ThemeContext);
    const isLargerThan1150= useMediaQuery('(min-width: 1150px)');
    const isLargerThan900= useMediaQuery('(min-width: 900px)');
    const isLargerThan400= useMediaQuery('(min-width: 400px)');
  return (
    <Box pt={'5rem'} bgcolor={!theme && '#1F1D2B'} color={theme?'#282828':'#AAAAAA'}>
    <Box height={isLargerThan900?'35vh': 'auto'}  display={'flex'} flexDirection={isLargerThan900?'row': 'column'}  justifyContent={'space-between'} width={isLargerThan1150?'80%': '95%'} ml={'auto'}mr={'auto'}>
        <Box width={isLargerThan400?'22rem': '100%'} height={'85%'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
            <img style={{width: '8rem'}} src="https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Flogo.png&w=384&q=75" alt="" />
       <Box display={'flex'} flexDirection={isLargerThan400?'row': 'column'}>
        <Box display={'flex'} flexDirection={'column'} mr={'1rem'}>
            <Typography>Toll Free Number</Typography>
            <Typography fontWeight={'600'}>+91 999 000 7746</Typography>
        </Box>

        <Box display={'flex'} flexDirection={'column'}>
            <Typography>Toll Free Number</Typography>
            <Typography fontWeight={'600'}>+91 999 000 7746</Typography>
        </Box>
       </Box>

       <Box>
            <Typography fontWeight={600} mb={'2rem'}>Follow us on social media</Typography>
            <Box display={'flex'} width={'60%'} justifyContent={'space-evenly'} fontSize={'1.3rem'}>
            <GrFacebookOption />
                  <FaTwitter />
                  <FaInstagram />
                  <BiLogoLinkedin />
                  </Box>
        </Box>
        </Box>


        <Box height={'10rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} mb={'1rem'} mt={'2rem'}>
            <Typography fontWeight={600}>Popular Search</Typography>
            <Typography>Appartment for rent</Typography>
            <Typography>Office for buy</Typography>
            <Typography>Office for rent</Typography>
        </Box>

        <Box  height={'14rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} mb={'1rem'}>
            <Typography fontWeight={600}>Quick links</Typography>
            <Typography>Appartment for rent</Typography>
            <Typography>Office for buy</Typography>
            <Typography>Office for rent</Typography>
            <Typography>Office for buy</Typography>
            <Typography>Office for rent</Typography>
        </Box>

        <Box height={'15rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'} mb={'1rem'}>
            <Typography fontWeight={600}>Discover Properties</Typography>
            <Typography>Appartment for rent</Typography>
            <Typography>Golf Course Extension Road</Typography>
            <Typography>Office for rent</Typography>
            <Typography>Office for buy</Typography>
            <Typography>Office for rent</Typography>
            <Typography>Dwarka Express Way</Typography>
        </Box>
    </Box>




    <Box width={'80%'} display={'flex'} flexDirection={isLargerThan400?'row': 'column'} mr={'auto'}  ml={'auto'} justifyContent={'space-between'} p={'2rem 0rem'}>
        <Typography>© Acredge Landworks Pvt. Ltd. 2025 - All rights reserved</Typography>
        <Typography>Privacy · Terms · Sitemap</Typography>
    </Box>
    </Box>
  )
}

export default Footer