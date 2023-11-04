const { default: inquirer } = require("inquirer");
const callUber = () => {
  console.log("Hello!\r\nI would like an Uber. Here is my phone number.\r\n Promise you will call me back? \r\n   If the coin lands on heads, then they will pick me up. \r\n   If the coin lands on tails, then they can't pick me up and\r\n   we will try to find a new driver!");
};
const waitForUberConfirmation = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randNum = Math.floor(Math.random() * 10);
      if (randNum <= 4) {
        resolve(
          `Here's the callback we promised: Heads! Yes, we have an uber on the way.`
        );
      } else {
        reject(
          Error(
            `Here's the callback we promised: Tails! Sorry, we didn't find a driver. We will ask another driver!`
          )
        );
      }
    }, 6000);
  });
const continueScrolling = () => {
  setTimeout(() => console.log("I can continue doing whatever I was doing\r\n   while I wait for a returned promise"), 2000);
};
const keepCalling = () => {
  callUber();
  continueScrolling();
  function makeCall() {
    waitForUberConfirmation()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        callUber();
        continueScrolling();
        makeCall();
      });
  }
  makeCall();
};
keepCalling();