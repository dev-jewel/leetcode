function isValid(s: string): boolean {
  const openedParantheses: string[] = [];
  const checkingMap: Map<string, string> = new Map([
    ['}', '{'],
    [']', '['],
    [')', '(']
  ]);

  for(let i = 0; i < s.length; i++) {
    if(
      s[i] === "(" ||
      s[i] === "{" ||
      s[i] === "["
    ) {
      openedParantheses.push(s[i]);
    }
    else {
      if(openedParantheses.pop() !== checkingMap.get(s[i])) return false;
    }
  }
  
  if(openedParantheses.length > 0) return false;

  return true;
};

console.log(isValid("["));


const arr = [14,2,3,4];

