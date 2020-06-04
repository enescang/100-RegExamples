/**
 * @kodcanlisi
 * Twitter: @kodlibcom || @enes_cang
 *
 * 100 Regular Examples With Javascript
 * (Each examples is seperated)
 */

//1 Match String (case sensitive)
{
  const str = "Hello Regex Examples";
  const str2 = "Hello regex Examples";
  const regex = /Regex/;
  //console.log(regex.test(str)); //true
  //console.log(regex.test(str2)); //false
}

//2 Match String (case insensitive)
// /str/i "i" is ignoring the wheter case is upper or lower
{
  const str = "Hello Regex Examples";
  const str2 = "Hello regex Examples";
  const regex = /Regex/i;
  // console.log(regex.test(str)); //true
  // console.log(regex.test(str2)); //true
}

//3 Char set (case insesitive)
{
  const str = "axe";
  //if there is any string between f-k =>true so it is false
  const regex = /[f-k]/i;
  //if there is any string between a-z =>true so it is true
  const regex2 = /[a-z]/i;
  console.log(regex.test(str)); //false
  console.log(regex2.test(str)); //true
}
