const { default: inquirer } = require("inquirer");
const callUber = () => {
  console.log("Hello!\r\n I would like an Uber. Here is my phone number. \r\n If the coin is heads, they will pick me up \r\n If the coin is tails, they can't pick me up.\r\n Then I will call again!");
};
const waitForUberConfirmation = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randNum = Math.floor(Math.random() * 10);
      if (randNum <= 4) {
        resolve(
          `Heads! Yes, we have an uber on the way.`
        );
      } else {
        reject(
          Error(
            `Tails! Sorry! We are full. No uber for you. Try another driver!`
          )
        );
      }
    }, 6000);
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