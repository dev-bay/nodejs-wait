import prompt from 'prompt';
import { runWait5sec } from './wait5sec.js';
import { runWait5secForLoop } from './wait5sec-in-loop.js';
import { runWait5secInRecurentLoop } from './recurent-wait.js';

let interval;
let seconds = 0;

export const counterStart = () => {
  interval = setInterval(() => {
    seconds++;
    console.log('Time: ', seconds, ' sec');
  }, 1000);
}

export const counterStop = () => {
  clearInterval(interval);
  seconds = 0;
  runMethodsByUserInput();
}

export const runMethodsByUserInput = () => {
  prompt.start();

  prompt.get({
    properties: {
      method: {
        message: '\n\n Choose: \n 1 - basic wait 5 sec \n 2 - wait 5 sec in FOR loop \n 3 - wait 5 sec in RECURENT function \n Type: 1 or 2 or 3 \n\n',
        required: true
      }
    }
  }, async function (err, result) {
    if (err) {
      return onErr(err);
    }

    const choosenMethod = parseInt(result.method);
    console.log('  method: ' + result.method);


    switch(choosenMethod) {
      case 1:
        console.log("\n\n CALL API - WAIT 5 SEC");
        counterStart();
        await runWait5sec();
        counterStop();
        break;
      case 2:
        console.log("\n\n CALL API - WAIT 5 SEC IN FOR LOOP (3x)");
        counterStart();
        await runWait5secForLoop();
        counterStop();
        break;
      case 3:
        console.log("\n\n CALL API - WAIT 5 SEC IN RECURENT FUNCTION (3x)");
        await runWait5secInRecurentLoop();
        break;
      default:
        console.log("No valid method choosen!");
    }
  });
}

const onErr = (err) => {
  console.log(err);
  return 1;
}