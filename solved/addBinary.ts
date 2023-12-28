function addBinary(a: string, b: string): string {
  let str = "";
  const maxLength = a.length > b.length ? a.length : b.length;
  let memorized = 0;
  for(let i = 0; i < maxLength; i++) {
    let currentA = a[a.length - i - 1];
    let currentB = b[b.length - i - 1];
    if(!currentA) currentA = "0";
    if(!currentB) currentB = "0";    

    if(memorized + +currentA + +currentB > 1 && maxLength - i - 1 === 0) {
      str = "1" + (memorized + +currentA + +currentB) % 2 + str;
    }
    else if(memorized + +currentA + +currentB > 1) {
      str = (memorized + +currentA + +currentB) % 2 + str;
      memorized = 1;
    } else {
      str = (+currentA + +currentB + memorized) + str;
      memorized = 0;
    }
  }

  return str;
};

console.log(addBinary("1010", "1011"));
