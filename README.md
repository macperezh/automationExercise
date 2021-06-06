# automationExercise
Project to test the purchase process of a product

**Getting started:**

Install cypress on your computer following the steps mentioned in:

https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements

**Design Pattern in Cypress**

The design pattern to development maintenable automated tests in Cypress is not Page-Object-Mode based.

They have different logic, basically:
* Locators are in Fixture Folder as json files
* Commands: in this folder are the typical reusable logic.
* Integration folder is the place for tests files.


**Test Execution** 
```
$ git clone git@github.com:macperezh/automationExercise.git 

$ cd automationExercise 

$ npm install 

$ node_modules\.bin\cypress open
```

After a moment, the Cypress Test Runner will launch.

Select the browser before launching the test.

Select **purchaseProduct.js** and execute the test.

Cypress runs as fast as your browser can render content. You can watch tests run in real time
and also the snapshots and the assert results through Cypress Test Runner interface.

