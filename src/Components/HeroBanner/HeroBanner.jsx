import { Box, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import './HeroBanner.css'
import HeroBannerImage from '../../assets/images/banner.png'


const HeroBanner = () => {
    return (
       
            <Box sx={{
                mt: { lg: "120px", xs: "70px" },
                ml: { sm: "50px" },
            }} position="relative" p="20px">
                <Typography color="#FF2625" fontSize="26px" fontWeight="600">
                    Fitness Club
                </Typography>
                <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }}
                    mt='25px' mb="19px"
                >
                    Sweat, Smile <br />
                    And Repeat
                </Typography>
                <Typography fontSize="22px" lineHeight="35px" mb={3} >
                    Check out the most effective exercises
                </Typography>
                <Button variant="contained" color="error" href='#exercises'
                    sx={{
                        background: "#FF2625",
                        padding: "10px",
                    }}
                >Explore Exersise</Button>

                <Typography fontWeight={600} color="#FF2625"
                    sx={{
                        opacity: "0.1",


                    }} fontSize="150px" ml="150px" >
                    Exercise
                </Typography>

                {/* <img src={Poster} alt="banner" className='hero-banner-img' /> */}
                {/* <img src={Poster1} alt="banner" className='hero-banner-img' /> */}
                <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
                

            </Box>
        
    )
}

export default HeroBanner