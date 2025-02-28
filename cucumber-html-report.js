const report = require("multiple-cucumber-html-reporter");
const dayjs = require("dayjs");
const fs = require("fs");

const data = fs.readFileSync("./cypress/cucumber-json/report.cucumber.json", {
  encoding: "utf8",
  flag: "r",
});
const runInfo = JSON.parse(data);

report.generate({
  jsonDir: "./cypress/cucumber-json",
  reportPath: "./reports",
  metadata: {
    
    platform: {
      name: 'mac',
      version: 'electron',
    },
  },
  customData: {
    title: "Run Info",
    data: [
      { label: "Project", value: "Sample " },
      { label: "Release", value: "1.0.0" },
      { label: "Cypress Version", value: runInfo["cypressVersion"] },
      { label: "Node Version", value: runInfo["nodeVersion"] },
      {
        label: "Execution Start Time",
        value: dayjs(runInfo["startedTestsAt"]).format(
          "YYYY-MM-DD HH:mm:ss.SSS"
        ),
      },
      {
        label: "Execution End Time",
        value: dayjs(runInfo["endedTestsAt"]).format("YYYY-MM-DD HH:mm:ss.SSS"),
      },
    ],
  },
  pageTitle: "Sample",
  reportName: "Sample",
  displayDuration: true,
  displayReportTime: true,
});
