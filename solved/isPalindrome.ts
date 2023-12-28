function isPalindrome(s: string): boolean {
  let str = "";
  s = s.toUpperCase();
  for(let i = 0; i < s.length; i++) {
    if(
      s[i].charCodeAt(0) >= 48 && s[i].charCodeAt(0) <= 57 ||
      s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90
    ) {
      str += s[i];
    }
  }

  for(let i = 0; i < str.length/2; i++) {
    if(str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

// if(/^[a-zA-Z0-9]*$/.test(s[i])) {
//   str += s[i].toUpperCase();
// }

console.log(isPalindrome(
  "A man, a plan, a canal: Panama"));
