import { useState, useEffect } from 'react';
import { Container, TextField, Button } from '@mui/material';
import { getStockByTicker } from './Services/api';
import StockChart from './Components/StockChart';
import Header from './Components/Header';

export default function StockPage() {
  const [ticker, setTicker] = useState('NVDA');
  const [minutes, setMinutes] = useState(10);
  const [stockData, setStockData] = useState([]);

 const fetchData = async () => {
  const data = await getStockByTicker(ticker, minutes);
  console.log("Data in StockPage:", data);
  if (data) setStockData(data);
};
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TextField label="Ticker" value={ticker} onChange={e => setTicker(e.target.value)} />
        <TextField label="Minutes" type="number" value={minutes} onChange={e => setMinutes(Number(e.target.value))} />
        <Button variant="contained" onClick={fetchData}>Load Stock Data</Button>
        <StockChart stockData={stockData} />
      </Container>
    </>
  );
}
