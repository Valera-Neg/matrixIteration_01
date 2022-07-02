const whereCanIPark = function (spots, vehicle) {
  
  const freeSpot = [];
  for (let r = 0; r < spots.length; r++) {
      for (let c = 0; c < spots[r].length; c++) {
        // search for Motorcycles
        if (spots[r][c] === "R" && vehicle === "motorcycle" || spots[r][c] === "S" && vehicle === "motorcycle" || spots[r][c] === "M" && vehicle === "motorcycle") {
          freeSpot.push(c);
          freeSpot.push(r);
          return freeSpot;
          // Search for Small cars
        } else if (spots[r][c] === "R" && vehicle === "small" || spots[r][c] === "S" && vehicle === "small" ) {
          freeSpot.push(c);
          freeSpot.push(r);
          return freeSpot;
          //search for regular cars
        } else if (spots[r][c] === "R" && vehicle === "regular") {
          freeSpot.push(c);
          freeSpot.push(r);
          return freeSpot;
        } 
         
    }
    
  }
  // checking if no available spots 
  if (!freeSpot.length) {
    return false;
  } 
  
  return freeSpot;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))