import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import { AppBar, Toolbar, Button } from '@mui/material';
import StockPage from './StockPage';
import Correlation from './Correlation';


export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/stocks">Stocks</Button>
          <Button color="inherit" component={Link} to="/correlation">Correlation</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/stocks" element={<StockPage/>} />
        <Route path="/correlation" element={<Correlation />} />
        <Route path="*" element={<StockPage />} /> {/* default */}
      </Routes>
    </>
  );
}
