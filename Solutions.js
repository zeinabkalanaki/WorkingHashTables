const message = "hello world";

function findFirstRepeativeChar(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === str[i]) {
        return str[j];
      }
    }
  }
}

function findFirstRepeativeCharWithHashTable(str) {
  const table = {}; // empty object

  for (let ch of str) {
    if (table[ch]) return ch;
    table[ch] = 1;
  }
}

console.log(findFirstRepeativeChar(message));
console.log(findFirstRepeativeCharWithHashTable(message));

//********************* */

function itemInCommon_notEfficient(arr1, arr2){
  for (let i = 0; i < arr1.length; i++) {
   for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) return true;
   }
  }
  return false;
}

function itemInCommon(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }

  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) return true;
  }

  return false;
}

let arr1 = [1,3,5]
let arr2 = [2,4,5]

itemInCommon(arr1,arr2)