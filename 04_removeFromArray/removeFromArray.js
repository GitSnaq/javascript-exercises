const removeFromArray = function (array, to_remove_items){
    let filteredArray = [];
    array.forEach(function(arrayElement){
      if (arrayElement !== to_remove_items){
       filteredArray.unshift(arrayElement)
      }
    })
    filteredArray.reverse();
    return filteredArray;
  }
// Do not edit below this line
module.exports = removeFromArray;
