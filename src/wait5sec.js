import axios from 'axios';

export const runWait5sec = async () => {
  const result = await callAPI(1);
  
  console.log(result);
}

function wait5sec (waitTime) {

  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, waitTime);
  });
  
}

async function callAPI (i) {
  await wait5sec(5000);  // wait function

  const res = await axios(`http://localhost:8080/dev-apps/php-api/orders/${i}`);

  return res.data;
}