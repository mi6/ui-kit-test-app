import { defineConfig } from "cypress";



export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',//for html report
// reporter: 'reporters/custom.js',


  
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);//for html report
      
    },
    baseUrl: 'http://localhost:5173/',
  },
});
