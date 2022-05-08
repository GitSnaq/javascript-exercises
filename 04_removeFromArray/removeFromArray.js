const removeFromArray = function(array, to_remove_items){
    var args = Array.prototype.slice.call(arguments);
    return array.filter(v => {
        return !args.includes(v);
      });
    }






// Do not edit below this line
module.exports = removeFromArray;


//The first iteration of the array function:

// const removeFromArray = function (array, to_remove_items) {
//     let filteredArray = [];
//     array.forEach(function (arrayElement) {
//         if (arrayElement !== to_remove_items) {
//             filteredArray.unshift(arrayElement)
//         }
//     })
//     filteredArray.reverse();
//     return filteredArray;
// }