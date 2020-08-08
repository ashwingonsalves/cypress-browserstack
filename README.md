## Cypress tests for BrowserStack
[![BrowserStack Status](https://automate.browserstack.com/badge.svg?badge_key=ZVcxNWlicCtDRGc2SWNuNnVUVGVrZVVlbXlaWExlRVhHTmZMZERtTTVGQT0tLXBIdE5oSzZaRkYxeHNiSzBBOWN3Mmc9PQ==--fdb31ecbf723c09f5100da695d31231494c6f1b2)](https://automate.browserstack.com/public-build/ZVcxNWlicCtDRGc2SWNuNnVUVGVrZVVlbXlaWExlRVhHTmZMZERtTTVGQT0tLXBIdE5oSzZaRkYxeHNiSzBBOWN3Mmc9PQ==--fdb31ecbf723c09f5100da695d31231494c6f1b2)

## Setup
* Clone the repo
* Install dependencies `npm install`
* In order to run the sample test on your local machine ensure that you have the supported browsers installed (Chrome, Firefox or Microsoft Edge).
* In order to run the sample test on BrowserStack you need to update the file browserstack.json with your username and access key.

## Running the test
Run Cypress sample test locally on your machine:

* Select Chrome, Firefox or Microsoft Edge browser
```bash
npm run cy:open
```
* Use Electron browser (headless)
```bash
npm run cy:headless
```

Run Cypress sample test suite on BrowserStack 
```bash
npm run cy:browserstack
```

Test a sample local environment on BrowserStack

* Update file cypress.json to ignore the other sample test and only pull up the local.feature file
```bash
{
    "ignoreTestFiles": ["**/samples/login.spec.js"],
    "viewportWidth": 1920,
    "viewportHeight": 1080
}
```
* Update file browserstack.json to enable local testing on BrowserStack. 
```bash
"connection_settings": {
        "local": true,
        "local_identifier": "cylocal"
        },
```
* Start BrowserStackLocal binary. You can download the file from [here](https://www.browserstack.com/local-testing/automate#command-line).
```bash
./BrowserStackLocal --key ACCESS_KEY --local-identifier cylocal
```
* Start the HTTP Server
```bash
npm run httpServer
```
* Run the local test on BrowserStack
```bash
npm run cy:browserstack
```
## Notes
* You can view your test run on the [Automate Dashboard](https://automate.browserstack.com/dashboard/v2/).
* If you wish to test a public URL you will have to undo the changes you made to the files cypress.json and browserstack.json while testing a local environment.

## Documentation

Here are a few important links to get you started and help you  successfully integrate the CLI into your CI/CD pipelines.

-   [BrowserStack CLI Reference](https://www.browserstack.com/docs/automate/cypress)
-   [List of supported browsers & OS](https://browserstack.com/list-of-browsers-and-platforms?product=cypress_testing)
-   [Run Tests in Localhost / Dev / Staging Environments](https://www.browserstack.com/docs/automate/cypress/local-testing)
-   [Run Tests in Parallel](https://www.browserstack.com/docs/automate/cypress/run-tests-in-parallel)
-   [Run Tests in CI/CD](https://www.browserstack.com/docs/automate/cypress/ci-cd-overview)
