const { Given, When, Then } = require('cucumber');

Given('I take a screenshot', function () {
  let world = this;

  return driver.takeScreenshot().then((screenShot) => {
    // screenShot is a base-64 encoded PNG
    world.attach(screenShot, 'image/png');
  });
});