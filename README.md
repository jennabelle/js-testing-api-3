# js-testing-api
a testing api to ensure users enter correct syntax to javascript code challenges

###Getting Started###

	npm install
    bower install

###To Start Server###

    npm start

Go to:

    http://localhost:8080

###To Run Unit Tests###

    npm test

###Conduct Functional Tests###

Structure
1. Type 'function test(a) { }' quickly, without stopping
2. Stop typing for 1 second
3. Verify error appears above editor: 'Function block MUST use 2 parameters'


Whitelist Functionality
1. Type 'function test(a,b) { if(true) {} }' quickly, without stopping
2. Stop typing for 1 second
3. Verify error appears above editor: 'MUST use WHILE loop inside function block'


Blacklist Functionality
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
    Mocha
    Chai
    (planned) - Ace code editor
    (planned) - Redux
    (planned) - Deploy on Heroku