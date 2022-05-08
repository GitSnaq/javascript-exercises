const sumAll = function(num1, num2) {
    if(num1<0 || num2<0){
        return "ERROR"
    }
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return "ERROR"
    }
    let largerNum = 0;
    let smallerNum = 0;
    if (num1 > num2){
        largerNum = num1
        smallernum = num2
    }
    else{
       smallerNum = num1
       largerNum = num2
    }
    total = ((largerNum-smallerNum)+1)*(smallerNum+largerNum)/2
    return total
}

// Do not edit below this line
module.exports = sumAll;
