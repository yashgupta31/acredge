import { Box, TextField, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { LuTextSearch } from 'react-icons/lu'

const Hero = () => {
    const isLargerThan900= useMediaQuery('(min-width: 900px)')
    const isLargerThan550= useMediaQuery('(min-width: 550px)')
    const isLargerThan450= useMediaQuery('(min-width: 450px)')

    return (
        <Box height={isLargerThan450?'89vh': '77vh'} bgcolor={'black'} borderRadius={'25px'} position={'relative'} m={'0rem 0.4rem'} sx={{ overflow: 'hidden', backgroundImage: 'url("https://images.hdqwalls.com/wallpapers/lighted-buildings-at-night-5k-uw.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* <img src="https://wallpapercave.com/wp/wp5351481.jpg" style={{position: 'absolute', width: '100%', margin: 'auto'}} alt="" /> */}
            <Box width={isLargerThan900?'60%': isLargerThan450?'90%': '96%'} position={'absolute'} top={isLargerThan900?'7rem': '5rem'} left={isLargerThan900?'6rem': isLargerThan450?'2rem': '0.5rem'}>
                <Typography width={'100%'} color='white' fontSize={isLargerThan550?'2.7rem': isLargerThan450?'2rem': '1.5rem'} mb={isLargerThan550?'4rem': '2rem'}>All Things Real Estate. <br /> Simplified!</Typography>
                <Box display={'flex'} flexDirection={'column'}>
                    <Box display={'flex'} bgcolor={'white'} width={isLargerThan450?'14rem': '100%'} height={isLargerThan450?'3.7rem': '2.7rem'} p={'0rem 2.5rem'} borderBottom={'0.5px solid grey'} borderRadius={'12px 12px 0px 0px'}>
                        <Typography borderBottom={'1px solid black'} width={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>Buy</Typography>
                        <Typography width={'50%'} display={'flex'}  justifyContent={'center'} alignItems={'center'}>Rent</Typography>
                    </Box>
                    {/* ------bottom---- */}
                    <Box height={'6.4rem'} bgcolor={'white'} width={'100%'} display={'flex'} flexDirection={isLargerThan450?'row': 'column'} alignItems={'center'} justifyContent={'space-between'} p={'0.4rem 1rem'} borderRadius={isLargerThan450?'0px 12px 12px 12px': '0px 0px 12px 12px'} >
                        <TextField placeholder='Search product for Buy' size={!isLargerThan550 && 'small'} sx={{ width: isLargerThan450?'70%': '100%', bgcolor: '#F7F7F7' }} />
                        <Box display={'flex'} >
                        <Box display={'flex'} alignItems={'center'} mr={'0.4rem'} ml={'0.4rem'}>
                            <LuTextSearch style={{fontSize: '1.2rem'}} />
                            <Typography ml={'0.6rem'} fontSize={'1.2rem'}>Advanced</Typography>
                        </Box>
                        <Box bgcolor={'black'} color={'white'} fontSize={isLargerThan550?'1.5rem': '1.2rem'} height={isLargerThan550?'3.4rem': '2.2rem'} width={isLargerThan550?'3.4rem': '2.2rem'} borderRadius={'50%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <CiSearch  />
                        </Box>
                        </Box>
                        
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Hero