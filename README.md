
# Cypress Cucumber With POM

Test Automation using Cypress for OrderFaz

## Plugins

- Cucumber (Gherkin)
- Open In Browser

## Tech Stack

**E2E Dependencies** 

- Cypress 
- Cucumber-Preprocessor

**Common Framework Dependencies** 

- browserify-preprocessor

## Requirement Before Installation

- Have latest version of Cypress at least Bundled node version 18.17.1
```bash
    npx cypress --version
```
- Have latest version node.js at least node v23.0.0
```bash
    node -v
```
If you meet the version requirement of cypress, skip step installation number 3

## Installation

Step to Install 

```bash
    1. clone
    2. cd path to project
    3. npm install cypress@latest --save-dev
    4. npm install --save-dev
    5. npx cypress open
```
    
## Execution

Headed Runner
```bash
npm run cy:of-login
```
Headless Runner
```bash
npm run cy:headless-run
```

Headless Runner For All Specs
```bash
npm cypress run
```

## Test Report

```bash
    1. Right click cucumber-report.html -> In case "Open In Browser" plugin already installed
    2. Select open in browser default
    3. Or Simply just press Alt + B
```
