# js-testing-api-3
a static code analysis tool to ensure users enter correct syntax to javascript code challenges

###Getting Started###

	npm install
    bower install

###To Start Server###

    npm start

Go to:

    http://localhost:8080

###To Run Unit Tests###

    npm test

###To Conduct Functional Tests###

Test the Structure:

1. Type 'function test(a) { }' quickly, without stopping
2. Stop typing for 1 second
3. Verify error appears above editor: 'Function block MUST use 2 parameters'


Test Whitelist Functionality:

1. Type 'function test(a,b) { if(true) {} }' quickly, without stopping
2. Stop typing for 1 second
3. Verify error appears above editor: 'MUST use WHILE loop inside function block'


Test Blacklist Functionality:

1. 

###Notes on Process###


###Tech Stack###

    React
    Node.js
    ES6
    Babel
    Webpack
    Webpack-dev-server
    Esprima
    Estraverse
    Bootstrap
    Ace code editor
    (planned) - Mocha
    (planned) - Chai
    (planned) - Redux
    (planned) - Deploy on Heroku