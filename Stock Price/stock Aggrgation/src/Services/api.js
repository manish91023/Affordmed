import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/evaluation-service';
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3NDY1MjY1LCJpYXQiOjE3NDc0NjQ5NjUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJmNWZhZTM5LTcxYzctNDhhZC05ZmQyLTlmZjFiNTZiNzJhZiIsInN1YiI6Im1hbmlzaC5rdW1hcl9iZWNzZTIyQGF2aXQuYWMuaW4ifSwiZW1haWwiOiJtYW5pc2gua3VtYXJfYmVjc2UyMkBhdml0LmFjLmluIiwibmFtZSI6Im1hbmlzaCBrdW1hciIsInJvbGxObyI6IjM1MDIyMTA1NTciLCJhY2Nlc3NDb2RlIjoic2RKRENGIiwiY2xpZW50SUQiOiIyZjVmYWUzOS03MWM3LTQ4YWQtOWZkMi05ZmYxYjU2YjcyYWYiLCJjbGllbnRTZWNyZXQiOiJOeVVqVVlLTVBUeVVXZFhkIn0.BJ3vXBDQTwjTbjDom8okL1NK3nS9MzvE2xtAG-g9qFc";
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: TOKEN,
  },
});

// src/Services/api.js

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3NDY4MDk2LCJpYXQiOjE3NDc0Njc3OTYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJmNWZhZTM5LTcxYzctNDhhZC05ZmQyLTlmZjFiNTZiNzJhZiIsInN1YiI6Im1hbmlzaC5rdW1hcl9iZWNzZTIyQGF2aXQuYWMuaW4ifSwiZW1haWwiOiJtYW5pc2gua3VtYXJfYmVjc2UyMkBhdml0LmFjLmluIiwibmFtZSI6Im1hbmlzaCBrdW1hciIsInJvbGxObyI6IjM1MDIyMTA1NTciLCJhY2Nlc3NDb2RlIjoic2RKRENGIiwiY2xpZW50SUQiOiIyZjVmYWUzOS03MWM3LTQ4YWQtOWZkMi05ZmYxYjU2YjcyYWYiLCJjbGllbnRTZWNyZXQiOiJOeVVqVVlLTVBUeVVXZFhkIn0.ZZ1Krbvaok7M1wdT0yuYf6MIXCLFazV7R-YRbNOnEGE";
export async function getStockByTicker(ticker, minutes, aggregation = "average") {
    
  try {
    const url ="http://20.244.56.144/evaluation-service/stocks"
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": "application/json"
      }
    });

    const data=await response.json()
    console.log(data)
    
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
}

// 2. Get correlation between two tickers
export const getStockCorrelation = (ticker1, ticker2, minutes = 10, aggregation = 'average') =>
  api.get(`/stockcorrelation?minutes=${minutes}&ticker=${ticker1}&ticker=${ticker2}&aggregation=${aggregation}`);
