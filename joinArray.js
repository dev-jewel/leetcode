/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
  const arrMap = new Map();
  for(const item of arr1) {
    const { id, ...others } = item;
    arrMap.set(id, others);
  }


  for(let item of arr2) {
    const { id } = item;
    if(arrMap.has(id)) {
      console.log(arrMap.get(id), item);
      const item1 = arrMap.get(id);
      item = {...item1, ...item};
      arrMap.delete(id);
    }
  }
  console.log(arrMap);
  arrMap.forEach((value, key) => {
    arr2.push({id: key, ...value});
  });

  return arr2.sort((a, b) => a.id - b.id);

};

const arr1 = [{"id":1,"b":{"b": 94},"v":[4,3],"y":48}]
const arr2 = [{"id":1,"b":{"c": 84},"v":[1,3]}]

console.log(join(arr1, arr2));


console.log("adsd", { ...arr1[0], ...arr2[0] });