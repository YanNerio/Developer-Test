//Task 2:
//Make this work (no vowels, lowercase except the first letter):
//reformat("liMeSHArp DeveLoper TEST") //Lmshrp dvlpr tst

var str = "liMeSHArp DeveLoper TEST";
reformat(str);

/**
 * @desc Removes vowels from string and capitalize the first letter in string
 * @param str initial str
 * @return String
 */
function reformat(str) {
  if (!(typeof str === "string") || str === undefined)
    throw new Error("String not valid!");
    
  let noVowels = str.replace(/[aeiou]/gi, "").toLowerCase();
  const finalStr = noVowels.replace(/^\w/, c => c.toUpperCase());

  return finalStr;
}
