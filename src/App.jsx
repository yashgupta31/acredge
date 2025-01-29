import { useContext, useState } from 'react'
import './App.css'
import {Box, useMediaQuery} from '@mui/material'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Buy from './pages/Buy/Buy'
import MidNav from './components/Navbar/MidNav'
import Footer from './components/Footer/Footer'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const {theme}= useContext(ThemeContext)
const isLargerThan700= useMediaQuery('(min-width: 700px)')
  return (
    <Box bgcolor={theme?'#F7F7F7': '#1F1D2B'} minHeight={'100vh'}> 
    {isLargerThan700? <Navbar />: <MidNav />}
      

      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/property-buy'} element={<Buy title={'Sale'} />} />
        <Route path={'/property-rent'} element={<Buy title={'Rent'} />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
