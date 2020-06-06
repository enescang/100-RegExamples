/**
 * @kodcanlisi
 * Twitter: @kodlibcom || @enes_cang
 *
 * 100 Regular Examples With Javascript
 * (Each examples is seperated)
 */

console.log("1 Match String (case sensitive)")
{
  const str = "Hello Regex Examples";
  const str2 = "Hello regex Examples";
  const regex = /Regex/;
  console.log(regex.test(str)); //true
  console.log(regex.test(str2)); //false
}

console.log("2 Match String (case insensitive)")
// /str/i "i" is ignoring the wheter case is upper or lower
{
  const str = "Hello Regex Examples";
  const str2 = "Hello regex Examples";
  const regex = /Regex/i;
  console.log(regex.test(str)); //true
  console.log(regex.test(str2)); //true
}

console.log("3 Char set (case insesitive)");
{
  const str = "axe";
  //if there is any string between f-k =>true so it is false
  const regex = /[f-k]/i;
  //if there is any string between a-z =>true so it is true
  const regex2 = /[a-z]/i;
  console.log(regex.test(str)); //false
  console.log(regex2.test(str)); //true
}

console.log("4: Number set")
{
  const str  = "one day 1 pc";
  const str2 = "one day one pc";
  const regex = /[0-9]/;
  console.log(regex.test(str));//true
  console.log(regex.test(str2));//false
}

console.log("5: Char rules (num-str-num)");
{
  const str = "1b2";
  const str2 = "acb";
  const regex = /[0-9][a-z][0-9]/
  console.log(regex.test(str));//true
  console.log(regex.test(str2));//false
}

console.log("6: Char rules 2 (str-str-num)");
{
  const str = "1b2";
  const str2 = "acb9";
  const regex = /[a-z][a-z][0-9]/
  console.log(regex.test(str));//false
  console.log(regex.test(str2));//true
}

console.log("7: Char Rules 3 ([a-z] and exact string");
{
  const str = "set";
  const str2 = "get";
  const str3 = "tat";
  const regex = /[a-z]et/
  console.log(regex.test(str))//true
  console.log(regex.test(str2))//true
  console.log(regex.test(str3))//false
}

console.log("8: Use or (c or x allowed)");
{
  const str = "ace";
  const str2 = "axe";
  const str3 = "ate";
  const regex = /a[c|x]e/
  console.log(regex.test(str))//true
  console.log(regex.test(str2))//true
  console.log(regex.test(str3))//false
}

console.log("9: Start with 'at'");
{
 const str = "ate";
 const str2 = "ata"
 const str3 = "ala"
 const regex = /at./
 console.log(regex.test(str))//true
 console.log(regex.test(str2))//true
 console.log(regex.test(str3))//false
}