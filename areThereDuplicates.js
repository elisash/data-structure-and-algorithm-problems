function areThereDuplicates(){
    // create a hash that stores the counted value
    let hash ={}
    // loop through the array 
    for(let val in arguments){
       hash(arguments[val]) = (hash(arguments[val]) || 0) + 1
    }
    
 // iterate through the hash
    for( key in hash){
// if hash key is greater than 1 then return true
    if (hash[key] > 1) return true 
    }
    return false
    
    
    
    
    
}




// function areThereDuplicates() {
//     let counters = {};
//     let args = Array.from(arguments);
    
//   for (let i = 0; i<args.length; i++) {
//       console.log(args[i])
//     if (counters[args[i]]) {
//       return (args, true);
//     } else {
//       counters[args[i]] = 1;
//     }
//   }
//   return false;
// }