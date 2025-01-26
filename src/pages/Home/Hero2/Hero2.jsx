import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { LuKey } from 'react-icons/lu'
import { RiShieldUserLine } from 'react-icons/ri'
import './Hero2.css'

const Hero2 = () => {
  const isLargerThan800= useMediaQuery('(min-width: 800px)');
  const isLargerThan400= useMediaQuery('(min-width: 400px)');
  return (
    <Box bgcolor={'#FEF7F6'} width={'99%'} height={isLargerThan800?'90vh': 'auto'} mr={'auto'} ml={'auto'}  mt={'3rem'} mb={'3rem'} display={'flex'} flexDirection={isLargerThan800?'row':'column-reverse'} alignItems={'center'}>
      {/* -------Left---------- */}
      <Box width={isLargerThan800? '65%':'100%'} height={isLargerThan800?'100%': '50%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box width={isLargerThan800?'30rem': '98%'} display={'flex'} flexDirection={'column'} alignItems={'start'}>
          <Typography fontSize={isLargerThan400?'1.9rem': '1.4rem'} ml={!isLargerThan400 &&'auto'} mr={!isLargerThan400 &&'auto'} textAlign={!isLargerThan400 &&'center'} fontWeight={'600'}  mt={!isLargerThan800 && '1rem'}>Let’s Find The Right<br />Selling Option For You</Typography>
          <Box className={'hero2-feature'} flexDirection={isLargerThan400?'row': 'column'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} mt={'1rem'}>
            <Box className={'hero2-feature-icon'} bgcolor={'#FCEDEB'}  height={'4.5rem'} width={'4.5rem'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={'1.8rem'}><RiShieldUserLine /></Box>
            <Typography width={isLargerThan400?'75%': '100%'} textAlign={!isLargerThan400 && 'center'}>
              Property Management <br />
              Effortlessly manage your properties with our expert solutions. From leasing to maintenance, we ensure your investments are handled with care.
            </Typography>
          </Box>

          <Box className={'hero2-feature'} display={'flex'} flexDirection={isLargerThan400?'row': 'column'} alignItems={'center'} justifyContent={'space-between'} mt={'1rem'} pb={'1.4rem'}>
            <Box className={'hero2-feature-icon'} bgcolor={'#FCEDEB'} height={'4.5rem'} width={'4.5rem'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize={'1.8rem'}><LuKey /></Box>
            <Typography width={isLargerThan400?'75%': '100%'} textAlign={!isLargerThan400 && 'center'}>
              Property Management <br />
              Effortlessly manage your properties with our expert solutions. From leasing to maintenance, we ensure your investments are handled with care.
            </Typography>
          </Box>

          <Button variant='contained' size='large' sx={{ height: '3rem', width: isLargerThan400?'13rem': '100%', bgcolor: 'black', borderRadius: '6px', mt: '1rem' }} >Learn More</Button>
        </Box>
      </Box>

      {/* -------Right-------- */}
      <Box height={isLargerThan800?'100%': '17rem'} width={isLargerThan800?'44%': '100%'} bgcolor={'black'} overflow={'hidden'}>
      <img style={{height: isLargerThan800?'100%': '100%', width: isLargerThan800?'auto': isLargerThan400?'100%': 'auto'}} src="https://cdn.architecturendesign.net/wp-content/uploads/2014/07/LUX-Maldives-40.jpg" alt="" />
      </Box>
    </Box>
  )
}

export default Hero2