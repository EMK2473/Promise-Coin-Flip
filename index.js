const { default: inquirer } = require("inquirer");
const callUber = () => {
  console.log("Hello, I would like an Uber. Here is my phone number");
};
const waitForUberConfirmation = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randNum = Math.floor(Math.random() * 10);
      if (randNum <= 4) {
        resolve(
          `Yes, we have an uber on the way. Number ${randNum} generated is <= 4.`
        );
      } else {
        reject(
          new Error(
            `Sorry! We are full. No uber for you. Number ${randNum} generated is >= 4.`
          )
        );
      }
    }, 4000);
  });
const continueScrolling = () => {
  setTimeout(() => console.log("I can continue working while I wait"), 2000);
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