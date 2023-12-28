type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
  const result: Obj[][] = []
  for(let i = 0; i < arr.length; i++) {
    if(result.length > 0 && result[result.length - 1].length < size) {
      result[result.length - 1].push(arr[i]);
    } else {
      result[result.length] = [];
      result[result.length - 1].push(arr[i]);
    }
  }
  return result;
};