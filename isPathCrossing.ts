function isPathCrossing(path: string): boolean {

  let subPath = "";
  let _path = "";
  for(let i = 0; i < path.length; i++) {
    if(!_path || _path[_path.length - 1] !== path[i]) {
      _path += path[i];
    }
  }

  console.log(_path);
  

  for(let i = 0; i < path.length; i++) {
    
    if(subPath.length === 4) return true;

    switch (path[i]) {
      case "N": {        
        if(subPath[subPath.length - 1] === "S") return true;
        break;
      }
      case "S": {
        if(subPath[subPath.length - 1] === "N") return true;
        break;
      }
      case "E": {
        if(subPath[subPath.length - 1] === "W") return true;
        break;
      }
      case "W": {
        if(subPath[subPath.length - 1] === "E") return true;
        break;
      }
    }

    if(subPath[subPath.length - 1] !== path[i] && subPath.includes(path[i])) {      
      subPath = "";
    }

    if(!subPath || subPath[subPath.length - 1] !== path[i]) {
      subPath += path[i];      
    }
  }
  return false;  
};

console.log(isPathCrossing("SESESSEEENWWNEENESEEE"));
