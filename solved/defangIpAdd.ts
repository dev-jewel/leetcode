function defangIPaddr(address: string): string {
  let result: string = "";

  for(let i = 0; i < address.length; i++) {
      if(address[i] === ".") {
          result += "[.]";
      }
      else {
          result += address[i];
      }
  }
  return result;
};