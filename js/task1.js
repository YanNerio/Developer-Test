//### Task 1:
//Make this work (repeat 3 times the contents of an array):
// repeat([1,2,3]) => [1,2,3,1,2,3,1,2,3]

repeat([1, 2, 3], 3);

/**
 * @desc Repeat array as many times as i
 * @param array initial array
 * @param i times to be repeated
 * @return array
 */
function repeat(array, i) {
  if (i === undefined) {
    i = 3;
  }
  let result = [];
  if (!(array instanceof Array) || array.length == 0 || !Number.isInteger(i))
    throw new Error("One or more parameters are not valid!");

  for (var j = 0; j < i; j++) {
    result = result.concat(array);
  }
  return result;
}
