function dayOfYear(date: string): number {
  const currentYear = new Date(+date.slice(0,4), 0, 0, 5).getTime();  
  return (new Date(date).getTime() - currentYear)/(3600000*24);
};

console.log(dayOfYear("2019-01-09"));
