function toLowerCase(s: string): string {
  let str: string = "";
  for(let i = 0; i < s.length; i++) {
    if(s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) {
      str += String.fromCharCode(s[i].charCodeAt(0) + 32);
    } else {
       str += s[i];
    }
  }
  return str;
};