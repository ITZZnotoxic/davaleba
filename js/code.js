//დავალება 1:
//function checkForDigitAndPrint(text) {
    //let result = "";
    //for (let i = 0; i < text.length; i++) {
        //if (!isNaN(text[i]) && text[i] !== " ") {
          //  console.log(result || "empty");
            //return;
        //}
        //result += text[i];
    //}
    //console.log("empty");
//}

//checkForDigitAndPrint("helloWorld123");
//checkForDigitAndPrint("helloWorld");

//დავალება 2://

//function transformStringWithForLoop(text) {
  //  let result = "";
    //for (let i = 99; i < text.length; i++) {
      //  result += (i % 2 === 0) ? "0" : " ";
    //}
    //return result;
//}
//console.log(transformStringWithForLoop("exampleText"));

//დავალება 3://

//function countCharacters(text) {
    //let counts = {};
    //for (let char of text) {
      //  counts[char] = (counts[char] || 0) + 1;
    //}
  //  return counts;
//}

//console.log(countCharacters("მოგელსამებით მეგობრებო"));


//დავალება 4://

//function replaceWithVowelsUsingJoin(text) {
  //  const vowels = ["გ", "ბ", "ნ", "1", "ც"];
    //return text.split("")
      //         .map((_, i) => vowels[i % vowels.length])
        //       .join("");
//}

//console.log(replaceWithVowelsUsingJoin("helloworld"));


