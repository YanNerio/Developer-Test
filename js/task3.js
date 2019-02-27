//Task 3
//Make this work (without using any built in functions, only a `for` loop,
//return the next binary number in a string or as an array)
//next_binary_number([1,0]) // [1,1]

next_binary_number([1, 0]); // [1,1]

/**
 * @desc Return next binary number
 * @param array initial array
 * @return array
 */

function next_binary_number(array) {

  if (!(array instanceof Array) || array.length == 0)
    throw new Error("Invalid array!");

  //if all the elements in the array are 1
  //add 1 to the first position and add with 0 based on the array length.
  if (array.indexOf(0) == -1) {
    for (var i = array.length, array = [1]; i--; ) {
      array.push(0);
    }
    return array;
  }
  
  //if the array contains 0 then change the last 0 by 1
  var x = array.lastIndexOf(0, array.lastIndexOf(0));
  array[x] = 1;
  
  //Replace with 0 starting on the index just changed to 1 up to the array length
  for (x++; x < array.length; x++) array[x] = 0;

  return array;
}
