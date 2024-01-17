function addStrings(num1: string, num2: string): string {
  const maxLength = num1.length > num2.length ? num1.length : num2.length;
  let resultStr = "";
  let memorizedDecade = 0;
  for(let i = 0; i < maxLength; i++) {
    let current1 = num1[num1.length - i - 1] || "";
    let current2 = num2[num2.length - i - 1] || "";
    console.log(+current1, +current2);
    
    if(memorizedDecade + +current1+ +current2 >= 10 && (maxLength - i - 1 === 0)) {
      resultStr = "1" + (memorizedDecade + +current1+ +current2 - 10) + resultStr;
    }
    else if(memorizedDecade + +current1+ +current2 >= 10) {
      resultStr = (memorizedDecade + +current1+ +current2 - 10) + resultStr;
      memorizedDecade = 1;
    }
    else {
      resultStr = (memorizedDecade + +current1+ +current2) + resultStr;
      memorizedDecade = 0;
    }
  }  

  return resultStr;
};

console.log(addStrings("408", "6"));
