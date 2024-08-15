module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack =[];
  let brackets = new Map(bracketsConfig);
  let openBrackets = new Set(bracketsConfig.map(pair => pair[0]));
  
  for (let i=0; i < str.length; i++){
    
    let currentBracket = str[i];
    
    if (brackets.has(currentBracket)) {
      if (stack.length > 0 && brackets.get(stack[stack.length - 1]) === currentBracket){
        stack.pop();
      } else {
        stack.push(currentBracket);
      }
    } else {
      let lastOpenedBracket = stack.pop();
      if (brackets.get(lastOpenedBracket) !== currentBracket){
        return false;
      }
    }
  }
  return stack.length === 0;
}
