import { Box } from '@mui/material'
import React from 'react'
import Hero from './Hero'
import Section from '../../components/Section/Section'
import Possibilities from './Possibilities/Possibilities'
import Hero2 from './Hero2/Hero2'

const Home = () => {
  let data={
    localities: [
        {
            image: 'https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Fgolf%20course%20road.jpg&w=256&q=75',
            name: 'Golf Course Road',
            by: ''
        },
        {
            image: 'https://acredge.in/_next/image?url=%2Fimages%2Fhome%2FgolfcourseExtension.jpg&w=256&q=75',
            name: 'Golf Course Road',
            by: ''
        },
        {
            image: 'https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Fdwarkaexpressway.jpg&w=256&q=75',
            name: 'Golf Course Road',
            by: ''
        },
        {
            image: 'https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Fnewgurgaon.jpg&w=256&q=75',
            name: 'Golf Course Road',
            by: ''
        },
        {
            image: 'https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Fmgroad.jpg&w=256&q=75',
            name: 'Golf Course Road',
            by: ''
        }
    ],
    residential: [
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2F3evGFqxoqqsq5ZjBw78k%2Fimg-20241221-wa0012_1734772649575_e903457b-075d-412d-93ff-f0e1f6b7b44d.jpg&w=256&q=75',
            name: 'Woodshire',
            by: 'by M2M'
        },
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2F6Mcf4dYzRVZMHLcDoWVL%2Fwhatsapp_image_2024-12-20_at_11.54.46_b7bcad5a_1734675945949_e395e944-b2b1-44d7-8f8f-f95d22ba970d.jpg&w=256&q=75',
            name: 'Manor',
            by: 'By PARAS'
        },
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2FB025yxMgyuLSfB5Dp716%2Fimg-20241221-wa0010_1734767211898_5b66826e-6e46-4a95-b799-9fc4c354f048.jpg&w=256&q=75',
            name: 'Twin Tower dxp',
            by: 'By SIGNATURE GLOBAL'
        },
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2FSq0C6hu2nnzvLJ1VoFPq%2Fimg-20241221-wa0006_1734773425875_fea5eea6-10da-4eb3-8b4d-e91b5342c67f.jpg&w=256&q=75',
            name: 'paraq',
            by: 'By CONSCIENT'
        },
        {
            image: 'https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2FeCGsubA3bbZP7VIkzh3v%2Fbanner3_1734848609923_86f3dfd9-450c-488d-88d9-f172235d2397.jpg&w=256&q=75',
            name: 'One Midtown',
            by: 'By DLF'
        }
    ] ,
    types: [
        {
            image: 'https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Fgolf%20course%20road.jpg&w=256&q=75',
            name: 'House',
            by: ''
        },
        {
            image: 'https://acredge.in/_next/image?url=%2Fimages%2Fhome%2FgolfcourseExtension.jpg&w=256&q=75',
            name: 'House',
            by: ''
        },
        {
            image: 'https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Fdwarkaexpressway.jpg&w=256&q=75',
            name: 'House',
            by: ''
        },
        {
            image: 'https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Fnewgurgaon.jpg&w=256&q=75',
            name: 'House',
            by: ''
        },
        {
            image: 'https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Fmgroad.jpg&w=256&q=75',
            name: 'House',
            by: ''
        }
    ]
   }
  return (
    <Box pt={'5.3rem'}>
        <Hero />
        <Section title={'Explore Top Localities'} location={'Projects in Gurgaon'} data={data.localities} />
        <Possibilities />
        <Section title={'Explore Trending Residential Projects - Top in Residential'} location={'Projects in Gurgaon'} data={data.residential} />
        <Section title={'Trending Commercial Projects'} location={'Projects in Gurgaon'} data={data.residential} />
        <Section title={'Explore by Possession Status'} location={'Projects in Gurgaon'} data={data.residential} />
        <Section title={'Top for Investment'} location={'Projects in Gurgaon'} data={data.residential} />
        <Hero2 />
        <Section title={'Explore Apartment Types'} location={'Appartment types in Gurgaon'} data={data.types} />
        
    </Box>
  )
}

export default Home