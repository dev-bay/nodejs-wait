import axios from 'axios';

export const runWait5secForLoop = async () => {

  for (let i = 1; i < 4; i++) {
    const result = await callAPI(i);
    console.log(result);
  }
  
}

function wait5sec(waitTime) {

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('wait finished');
      resolve(true);
    }, waitTime);
  });

}

async function callAPI (i) {
  await wait5sec(5000);  // wait function

  const res = await axios(`https://dev-bay.com/examples/php-api-js-wait/orders/${i}`);

  return res.data;
}
