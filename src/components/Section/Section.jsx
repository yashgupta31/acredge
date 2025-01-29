import { Box, Typography, useMediaQuery } from '@mui/material'
import React, { useContext } from 'react'
import './Section.css'
import { ThemeContext } from '../../context/ThemeContext'

const Section = ({data, title}) => {
    const {theme}= useContext(ThemeContext);
   
    const isLargerThan1200= useMediaQuery('(min-width: 1200px)')
    const isLargerThan1000= useMediaQuery('(min-width: 1000px)')
    const isLargerThan700= useMediaQuery('(min-width: 700px)')
    const isLargerThan550= useMediaQuery('(min-width: 550px)')
    const isLargerThan350= useMediaQuery('(min-width: 350px)')
    return (
        <Box width={isLargerThan1000?'80%': '97%'} ml={'auto'} color={theme?'#282828':'white'} mr={'auto'} mt={isLargerThan1000?'4rem': '1rem'} mb={isLargerThan1000?'4rem': '1rem'} >
            <Typography fontSize={isLargerThan550?'1.8rem': isLargerThan350?'1.4rem': '1.2rem'} color='#EB6753' textAlign={!isLargerThan350 && 'center'} fontWeight={'600'}>{title}</Typography>
            <Typography fontSize={'0.9rem'} textAlign={!isLargerThan350 && 'center'} >Projects in Gurgaon</Typography>
            {/* -----container------- */}
            <Box  display={'flex'} height={'21rem'} mt={isLargerThan1000?'3rem': '1rem'}  sx={{overflowX: 'auto', '&::-webkit-scrollbar': { display: 'none' }}} p={'1rem 0rem'}  >
                {/* -----------each box-------- */}
                {
                   data.map((elem, index)=>(
                <Box key={index} width={isLargerThan1200?'19%': isLargerThan700?'23.5%': isLargerThan550? '31.3%': isLargerThan350?'48%': '100%'} height={'100%'} mr={'1rem'}  flexShrink={0} borderRadius={'12px'} boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>
                    <Box bgcolor={'black'} width={'100%'} height={'75%'} mb={'0.5rem'} overflow={'hidden'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'12px 12px 0px 0px'}>
                        <img className='section-image' src={elem.image} style={{height: isLargerThan350?'100%': 'auto', width: isLargerThan350? 'auto': '100%'}} alt=""   />
                    </Box>
                    <Typography fontWeight={'550'} ml={'1rem'}>{elem.name}</Typography>
                    <Typography ml={'1rem'}>{elem.by}</Typography>
                </Box>
                ))
            }
                

            </Box>

        </Box>
    )
}

export default Section