module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const checkBrackets = bracketsConfig.flat(2);
  const openBrackets = [];
  const closeBrackets = [];
   for(let i = 0; i < checkBrackets.length; i++) {
      if ( i % 2 === 0) {
         openBrackets.push(checkBrackets[i])
      } else {
         closeBrackets.push(checkBrackets[i])
      }
   }
   for ( let i = 0; i < str.length; i++) {
      let symbol = str[i];
      if (openBrackets.includes(symbol)) stack.push(symbol)
         else {
         if (checkBrackets.indexOf(symbol) - checkBrackets.indexOf(stack[stack.length - 1]) === 1) stack.pop()
            else return false
      }
      if (openBrackets.includes(symbol) && closeBrackets.includes(symbol)) {
         stack.pop()
         if (stack.includes(symbol) && stack[stack.length - 1] === symbol) stack.pop()
            else stack.push(symbol)
      }
   }
  return stack.length === 0;
}
