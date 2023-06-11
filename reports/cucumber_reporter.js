const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber_reporter.json',
  output: './reports/cucumber_reporter.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    'App Version': '1.0.0',
    'Test Environment': 'QA',
    'Browser': 'Chrome',
    'Platform': 'Windows 10',
    'Parallel': 'Scenarios',
    'Executed': 'Remote',
  },
};

reporter.generate(options);
