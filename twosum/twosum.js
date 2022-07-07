function twoSum(arr, S) {

    var sums = [];
    var hashTable = {};
    for (var i = 0; i < arr.length; i++) {
      var sumMinusElement = S - arr[i];
      if (hashTable[sumMinusElement.toString()] !== undefined) { 
        sums.push([arr[i], sumMinusElement]);
      }
      hashTable[arr[i].toString()] = arr[i];
  
    }
    return sums;
  }
  var c=twoSum([3, 5, 2, -4, 8, 11], 7);  
  console.log(c);
