import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import './Possibilities.css'
import { CiHeart, CiShare1 } from 'react-icons/ci'
import { MdOutlineLibraryAdd } from 'react-icons/md'

const Possibilities = () => {
    let data=[
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Facredge-app-252ab.firebasestorage.app%2FPropertyImages%2F0obLZw8b17Y7nfaP6uRa%2F984smart-world-orchard-project-amenities-features24_742x3924_1734844401887_3c0c3b18-e89e-4f0a-9e8e-e793391d0a6e.jpg&w=640&q=75',
            title: '3BHK, Appartment',
            company: 'Smart World', 
            price: 'Rs.2.65 Cr'
        }, 
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Facredge-app-252ab.firebasestorage.app%2FPropertyImages%2F1uhx69ePRfZSInOHkKQ3%2Ftarc-sector-91-gurgaon_1734842195385_da0522e2-c9ef-4863-84ef-3fca7e6d296e.jpg&w=640&q=75',
            title: '4BHK, Appartment',
            company: 'Tata',
            price: 'Rs.6.5 Cr'
        },
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Facredge-app-252ab.firebasestorage.app%2FPropertyImages%2F2D5QTp9JPn4E46Jjmqdq%2Fcapture_1734842010487_8ec6c925-5106-4cd2-b507-d7397c173454.png&w=640&q=75',
            title: '3BHK, Appartment',
            company: 'Tata',
            price: 'Rs.7.5 Cr'
        },
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Facredge-app-252ab.firebasestorage.app%2FPropertyImages%2FVPvFeDNhbBi8XRVXkd5w%2Fsmart-world-orchard-project-project-large-image1-1842_1__1734849368952_a5134388-5a8e-4af2-a191-085a18c270b9.jpg&w=640&q=75',
            title: '1BHK, Appartment',
            company: 'Tata',
            price: 'Rs.2.5 Cr'
        },
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Facredge-app-252ab.firebasestorage.app%2FPropertyImages%2FzKkD3beVfjPFOpNrGexk%2Fgodrejnatureplus-02-900x600_1734687333379_a7f62016-aa0e-4943-9fdf-8991a64cc908.jpg&w=640&q=75',
            title: '2BHK, Appartment',
            company: 'Tata',
            price: 'Rs.1.5 Cr'
        }
    ]

    const isLargerThan1200= useMediaQuery('(min-width: 1200px)');
    const isLargerThan920= useMediaQuery('(min-width: 920px)');
    const isLargerThan620= useMediaQuery('(min-width: 620px)');
    const isLargerThan500= useMediaQuery('(min-width: 500px)');
    const isLargerThan350= useMediaQuery('(min-width: 350px)');
  return (
    <Box width={isLargerThan1200?'80%': '98%'} ml={'auto'} mr={'auto'} p={'3rem 0rem'}>
<Typography fontSize={isLargerThan620?'1.8rem': '1.5rem'} fontWeight={'600'} ml={'1rem'}>Explore Limitless Possibilities</Typography>
<Typography fontSize={'0.9rem'}ml={'1rem'}>Projects in Gurgaon</Typography>
{/* --------container-------- */}
<Box width={'100%'} display={'grid'} gridTemplateColumns={isLargerThan920?'repeat(3, 1fr)': isLargerThan620?'repeat(2, 1fr)': 'repeat(1, 1fr)'} gap={3} mt={isLargerThan620?'4rem': '1rem'}>
    {/* -------each box------- */}
    {
        data.map((elem, index)=>(
<Box className={'possibilities-each-container'} key={index}   height={'22rem'} overflow={'hidden'} borderRadius={'12px'} position={'relative'}>
    <img className='possibilities-each-img' style={{height: '100%',width: isLargerThan620?'auto': isLargerThan500?'100%': 'auto', position: 'absolute'}}  src={elem.image} alt="" />
    <Box bgcolor={'white'} position={'absolute'} width={'95%'} height={'5rem'} left={'0.6rem'} bottom={'1rem'} borderRadius={'13px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={isLargerThan350?'1rem': '0.5rem'}>
        <Typography fontWeight={550} fontSize={isLargerThan350?'1rem':'0.9rem'}>{elem.title} <br /> <Typography>{elem.company}</Typography></Typography>
        <Typography className='possibilities-each-price' fontSize={isLargerThan350?'1rem':'0.9rem'} p={isLargerThan350?'0.6rem': '0.3rem'} borderRadius={'5px'} border={'1px solid black'} >{elem.price}</Typography>
    </Box>

    <Box className={'possibilities-each-icons'} position={'absolute'} top={'1rem'} right={'-2rem'} height={'7rem'} display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>
        
        <Box bgcolor={'black'} color={'white'} width={'2rem'} height={'2rem'} fontSize={'1.5rem'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'3px'} p={'0.4rem'}><CiHeart /></Box>
        <Box  bgcolor={'black'} color={'white'}  width={'2rem'} height={'2rem'} fontSize={'1.5rem'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'3px'} p={'0.4rem'}><MdOutlineLibraryAdd /></Box>
        <Box bgcolor={'black'} color={'white'}  width={'2rem'} height={'2rem'} fontSize={'1.5rem'} display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'3px'} p={'0.4rem'}><CiShare1 /></Box>

    </Box>
     
    </Box>
        ))
    }
    
</Box>
    </Box>
  )
}

export default Possibilities