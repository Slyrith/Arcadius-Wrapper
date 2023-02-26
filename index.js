const axios = require('axios');

const API = 'https://arcadius-azure.vercel.app';

async function fishingrod(item) {
  try {
    const response = await axios.get(`${API}/equipment/fishingrods`);
    let data = response.data;
    if (item) {
      data = data.filter((rod) => rod.name && rod.name.toLowerCase() === item.toLowerCase());
    }

    return data;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  const fishingRods = await fishingrod();
  console.log(fishingRods);
}

main();
