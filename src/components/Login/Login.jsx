import React, { useContext, useState } from 'react'
import './Login.css'
import { Box, Button, IconButton, TextField, Typography, useMediaQuery } from '@mui/material'
import { RxCross2 } from 'react-icons/rx'
import { ThemeContext } from '../../context/ThemeContext'

const Login = ({isOpen, setIsOpen}) => {
    const {theme}= useContext(ThemeContext);
    
const isLargerThan600= useMediaQuery('(min-width: 600px)');
const isLargerThan400= useMediaQuery('(min-width: 400px)');
  return (
    <Box bgcolor={'rgba(0, 0, 0, 0.5)'} onClick={()=> setIsOpen(false)} height={'100vh'} width={'100%'} position={'absolute'} top={'0'} left={0} sx={{transition: '0.3s'}}  visibility={isOpen?'visible':'hidden'}>
                    <Box className={`loginSlider ${isOpen? 'open': ''}`} onClick={(e)=> e.stopPropagation()} sx={{transition: '0.3s', opacity: '0%', p: '1.3rem'}} display={'flex'} flexDirection={'column'} alignItems={'start'} justifyContent={'space-between'} height={isLargerThan400?'23rem': '21rem'} width={isLargerThan600?'34rem': '97%'} bgcolor={theme?'white': '#1F1D2B'} color={theme?'#282828':'white'} ml={'auto'} mr={'auto'} borderRadius={'10px'}>
                        <Box width={'100%'} display={'flex'} justifyContent={'space-between'} p={'1rem 0rem'} borderBottom={'1px solid lightgrey'}>
                        <Typography variant='span' fontFamily={'sans-serif'} fontSize={'1.2rem'}>Welcome to Acredge</Typography>
                        <IconButton size={isLargerThan400? 'medium': 'small'}  sx={{bgcolor: 'lightgrey', borderRadius: '50%'}} onClick={()=> setIsOpen(false)}><RxCross2 /></IconButton>
                        </Box>
    
                        <Typography variant='span'  fontFamily={'sans-serif'} borderBottom={theme? '1px solid #282828': '1px solid white'} p={'0.6rem'}>Sign In</Typography>
    
                        <Box width={'100%'} mt={'-1.5rem'}>
                            <Typography mb={'0.4rem'}>Enter Phone Number</Typography>
                            <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
                                <TextField size={isLargerThan400? 'medium': 'small'} value='+91 (India)' sx={{width: '25%',  "& .MuiInputBase-input": {
      color: theme?'#282828':"white", // Text color
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor:  theme?'#282828':"white", // Default border color
      },
      "&:hover fieldset": {
        borderColor:  theme?'#282828':"white", // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor:  theme?'#282828':"white", // Border color when focused
      },
    },
    "& .MuiInputBase-input::placeholder": {
      color:  theme?'#282828':"white", // Placeholder text color
      opacity: 1, // Ensures placeholder is visible
    }, ":disabled": true}} />
                                <TextField size={isLargerThan400? 'medium': 'small'} placeholder='Phone Number' sx={{width: '71%',  "& .MuiInputBase-input": {
      color: theme?'#282828':"white", // Text color
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor:  theme?'#282828':"white", // Default border color
      },
      "&:hover fieldset": {
        borderColor:  theme?'#282828':"white", // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor:  theme?'#282828':"white", // Border color when focused
      },
    },
    "& .MuiInputBase-input::placeholder": {
      color:  theme?'#282828':"white", // Placeholder text color
      opacity: 1, // Ensures placeholder is visible
    }}}  />
                            </Box>
                        </Box>
    
                        <Button variant='contained'size={isLargerThan400? 'medium': 'small'} sx={{width: '100%', p: isLargerThan400?'0.7rem 0rem': '0.5rem 0rem', bgcolor: '#EB6753'}}>Send OTP</Button>
                    </Box>
                </Box>
    
  )
}

export default Login