import { useState, useEffect } from 'react';
import { Container, TextField, Button } from '@mui/material';
import { getStockCorrelation } from './Services/api';
import HeatmapChart from './Components/HeatmapChart';
import Header from './Components/Header';

const Correlation=()=> {
  const [ticker1, setTicker1] = useState('NVDA');
  const [ticker2, setTicker2] = useState('PYPL');
  const [minutes, setMinutes] = useState(10);
  const [correlationData, setCorrelationData] = useState(null);

  const fetchCorrelation = () => {
    getStockCorrelation(ticker1, ticker2, minutes).then(res => {
      setCorrelationData(res.data);
    }).catch(console.error);
  };

  useEffect(() => {
    fetchCorrelation();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TextField label="Ticker 1" value={ticker1} onChange={e => setTicker1(e.target.value)} />
        <TextField label="Ticker 2" value={ticker2} onChange={e => setTicker2(e.target.value)} />
        <TextField label="Minutes" type="number" value={minutes} onChange={e => setMinutes(Number(e.target.value))} />
        <Button variant="contained" onClick={fetchCorrelation}>Get Correlation</Button>
        <HeatmapChart heatmapData={correlationData} />
      </Container>
    </>
  );
}


export default Correlation
