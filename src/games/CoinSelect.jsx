import React , {useEffect, useState}from 'react';
import axios from 'axios';

function CoinSelect(betposition,betTitle) {
    const [coins, setConins] = useState('');
    const [selectData, setSelectData] = useState('');
    const [data, setData] = useState([]);

const handleCoinClick = async () => {
    try {
      const response = await fetch('https://delristech-projects.in/roulette_web/index.php/api/Web_api/get_bet_type', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json(); // Assuming the response is JSON
      console.log('Bet types:', data); // Log or return the result
      return data;
    } catch (error) {
      console.error('Error fetching bet types:', error);
    }  
}

handleCoinClick();
    
console.log("hello");

    useEffect(() => {
        

    },[]
    )
}

export default CoinSelect