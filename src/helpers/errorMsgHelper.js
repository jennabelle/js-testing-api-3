// helper method for all error messages

const errorMap = {
	needTwoParams : 'MUST have 2 parameters e.g. function test(a,b)', // structure
	needWhileLoop : 'MUST have While loop inside function block', // whitelist
	needOneWhileLoop : 'Must NOT have more than 1 While loop inside function block', // blacklist
}

export default {

  getErrorMsg(val) {
    return errorMap[val]
  }
}