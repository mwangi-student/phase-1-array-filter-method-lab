// Code your solution here
// 1. findMatching: returns all drivers that match the passed-in name (case-insensitive)
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// 2. fuzzyMatch: returns drivers whose names begin with the provided letters
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

// 3. matchName: returns driver objects whose 'name' property matches the provided string
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
