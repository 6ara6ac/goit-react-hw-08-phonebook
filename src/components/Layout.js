import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ButtonAppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box, Container } from '@mui/material';

export const Layout = () => {
  return (
    <Box sx={{ bgcolor: '#f3f4f5', padding:'20px 60px', height:'100vh' }}>
      <ButtonAppBar />
      <Container sx={{marginTop:'100px'}}>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
      </Container>
    </Box>
  );
};