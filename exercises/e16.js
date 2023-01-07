import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const yearCount = data.asteroids
  .map(asteroid => {
    return asteroid.discoveryYear
  })
  .reduce((acc, val) => {
    acc[val] = acc[val]
      ? acc[val] += 1 : acc[val] = 1;
    
    return acc
  },{});
  
  let sortedYear = Object.entries(yearCount).sort((a,b) => {
    if(a[1] > b[1]){
      return 1
    }
    if(a[1] < b[1]){
      return -1
    }
  })
  // console.log(sortedYear.pop().shift());
  return Number(sortedYear.pop().shift());
}
// export function getGreatestDiscoveryYear(data) {
//   var getDiscoveryYear = data.asteroids.map(asteroid => asteroid.discoveryYear)
//   const count = getDiscoveryYear.reduce((acc, val) => {return{ ...acc, [val]: (acc[val] || 0) + 1}})
//   var yearMostDiscoveries = Object.keys(count).reduce((a,b) => count[a] > count[b] ? a : b)
//   console.log(typeof(yearMostDiscoveries), yearMostDiscoveries);
//   return Number(yearMostDiscoveries)
// }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
