import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack sx={{ alignItems: 'center' }} flexWrap="wrap" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '42px' }} />
    </Stack>
    <Typography variant="h4" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="31px" textAlign="center" pb="30px">Made with ❤️ by Avi </Typography>
  </Box>
);

export default Footer;