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
3. Verify error appears above editor: 'MUST have 2 parameters e.g. function test(a,b)'
4. Add a second parameter to what you just typed e.g., 'function test(a,b) { }'
5. Verify error disappears


Test Whitelist Functionality:

1. Type 'function test(a,b) { if(true) {} }' quickly, without stopping
2. Stop typing for 1 second
3. Verify error appears above editor: 'MUST use WHILE loop inside function block'


Test Blacklist Functionality:

1. 

###Notes on Process###

Things I learned: It was much easier to start off making all required functionality working with HTML text area first, then incorporate Ace code editor afterward. Another challenge I
had was sometimes when you install and start to use a js library, there are innate errors to that package. For example, in estraverse.js, once installed there was a module loader
error and I learned I had to install and configure the 'json-loader' package to webpack. Likewise, when I tried to use the react-ace library, there was a different error about not being
able to read 'acequire' of undefined. I eventually scrapped react-ace and aimed for the lightweight wrapper for ace code editor. Also this was my first time using estraverse.js and 

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