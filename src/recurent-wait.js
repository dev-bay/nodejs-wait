import axios from 'axios';
import { counterStart, counterStop } from './helpers.js';

export const runWait5secInRecurentLoop = (i) => {
  counterStart();
  recurentLoopFunc(4, 5000, 1, function (i) {
    return axios(`https://dev-bay.com/examples/php-api-js-wait/orders/${i}`);
  });
}

function recurentLoopFunc (count, timeoutTime, seqCounter, callback) {
  
  if (seqCounter < count) {

    setTimeout(() => {

      callback(seqCounter).then(function (result) {
        var data = result.data;

        console.log('wait finished');
        console.log(data);
        
        seqCounter++;
        recurentLoopFunc(count, timeoutTime, seqCounter, callback);

        if (seqCounter === count) {
          counterStop();
        }
      });
      
    }, timeoutTime);
    
  }

}