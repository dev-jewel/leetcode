function convertTemperature(celsius: number): number[] {
    return [
      parseFloat((celsius + 273.15).toFixed(5)),
      parseFloat((celsius*1.8 + 32).toFixed(5)),
    ]  
};

console.log(convertTemperature(36.50));