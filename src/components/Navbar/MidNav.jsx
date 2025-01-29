import { Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import React, { useContext, useState } from 'react';
import { CiDark, CiLight, CiMenuFries } from 'react-icons/ci';
import { FaInstagram, FaRegUserCircle, FaTwitter } from 'react-icons/fa';
import './MidNav.css';
import { RxCross2 } from 'react-icons/rx';
import { MdChevronRight } from 'react-icons/md';
import { GrFacebookOption } from 'react-icons/gr';
import { BiLogoLinkedin } from 'react-icons/bi';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import { ThemeContext } from '../../context/ThemeContext';

const MidNav = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  let path = location.pathname.split('/')[1];

  const isLargerThan400 = useMediaQuery('(min-width: 400px)');
  return (
    <Box
      height={'4.5rem'}
      width={'100%'}
      bgcolor={theme ? 'white' : '#222431'}
      display={'flex'}
      position={'fixed'}
      top={0}
      zIndex={99}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={'0rem 1rem'}
      boxShadow={'rgba(0, 0, 0, 0.1) 0px 4px 12px'}
    >
      <CiMenuFries style={{ fontSize: '1.6rem', color: theme? '#282828': 'white' }} onClick={() => setIsSliderOpen(true)} />
      <Typography fontSize={'1.3rem'} onClick={() => navigate('/')} fontWeight={600} color={theme? '#282828': 'white'}>ACREDGE</Typography>
      {/* <img
        onClick={() => navigate('/')}
        style={{ width: '6rem' }}
        src="https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Flogo.png&w=384&q=75"
        alt=""
      /> */}


    <Box display={'flex'} width={'4rem'} alignItems={'center'} justifyContent={'space-between'}>
      <Box width={'1.6rem'} height={'1.6rem'} onClick={() => setTheme(!theme)} sx={{ cursor: 'pointer' }} borderRadius={'50%'} bgcolor={'rgba(0,0,0,0.2)'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        {theme ? <CiDark /> : <CiLight color='white' />}
      </Box>
      <FaRegUserCircle onClick={() => setIsOpen(true)} style={{ fontSize: '1.3rem', color: theme? '#282828': 'white' }} />
      </Box>
      {/* -----slider------ */}

      <Box
        bgcolor={'rgba(0, 0, 0, 0.7)'}
        onClick={() => setIsSliderOpen(false)}
        width={'100%'}
        height={'100vh'}
        position={'fixed'}
        top={'0'}
        left={0}
        zIndex={98}
        sx={{ visibility: isSliderOpen ? 'visible' : 'hidden' }}
      >
        <Box
          className={`slider ${isSliderOpen ? 'open' : ''}`}
          bgcolor={theme? '#F7F7F7': '#222431'}
          color={theme?'#282828':'white'}
          width={isLargerThan400 ? '80%' : '94%'}
          height={'100vh'}
          zIndex={99}
          position={'fixed'}
          left={'-30rem'}
          sx={{ transition: '0.1s' }}
          top={0}
          onClick={(event) => event.stopPropagation()}
        >
          <Box
            bgcolor={theme?'#FDF4F3': '#181722'}
            color={theme? '#282828': 'white'}
            height={'5rem'}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            p={isLargerThan400 ? '1rem' : '0.5rem'}
          >
            <Typography fontSize={isLargerThan400 ? '1.3rem' : '1.1rem'} fontWeight={600}>
              Welcome To Acredge
            </Typography>
            <IconButton
              sx={{ bgcolor: '#EB6753', fontSize: isLargerThan400 ? '1.1rem' : '0.9rem' }}
              onClick={() => setIsSliderOpen(false)}
            >
              <RxCross2 style={{ color: 'white' }} />
            </IconButton>
          </Box>

          <Box p={'2rem 0rem'} borderBottom={'1px solid grey'}>
            <Box
              onClick={() => {
                navigate('/');
                setIsSliderOpen(false);
              }}
              color={path == '' && '#EB6753'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
              p={'0.5rem 2rem'}
              fontSize={'1.8rem'}
            >
              <Typography>Home</Typography>
              <MdChevronRight />
            </Box>
            <Box
              onClick={() => {
                navigate('/property-buy');
                setIsSliderOpen(false);
              }}
              color={path == 'property-buy' && '#EB6753'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
              p={'0.5rem 2rem'}
              fontSize={'1.8rem'}
            >
              <Typography>Buy</Typography>
              <MdChevronRight />
            </Box>
            <Box
              onClick={() => {
                navigate('/property-rent');
                setIsSliderOpen(false);
              }}
              color={path == 'property-rent' && '#EB6753'}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
              p={'0.5rem 2rem'}
              fontSize={'1.8rem'}
            >
              <Typography>Rent</Typography>
              <MdChevronRight />
            </Box>
          </Box>

          <Box
            display={'flex'}
            flexDirection={'column'}
            p={'2rem'}
            justifyContent={'space-evenly'}
            height={'14rem'}
            borderBottom={'1px solid grey'}
          >
            <Typography>Toll free customer care</Typography>
            <Typography fontWeight={'600'}>+9990007746</Typography>
            <Typography>Need live support?</Typography>
            <Typography fontWeight={'600'}>connect@acredge.in</Typography>
          </Box>

          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            p={'2rem 2rem'}
            width={'100%'}
          >
            <Typography>Follow us</Typography>
            <GrFacebookOption />
            <FaTwitter />
            <FaInstagram />
            <BiLogoLinkedin />
          </Box>
        </Box>
      </Box>
      <Login isOpen={isOpen} setIsOpen={setIsOpen} />

    </Box>
  );
};

export default MidNav;
