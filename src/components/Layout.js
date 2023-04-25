import React from "react"
import { Outlet } from 'react-router-dom';
import { ButtonAppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from '@mui/material';

export const Layout = () => {
  return (
    <Box sx={{margin:0}}>
      <ButtonAppBar />
      <Box sx={{display:'grid',justifyContent:'center', paddingTop:'100px', margin:0, height:'100vh' }}>
      <Suspense fallback={null}>
        <Outlet/>
      </Suspense>
      </Box>
    </Box>
  );
};