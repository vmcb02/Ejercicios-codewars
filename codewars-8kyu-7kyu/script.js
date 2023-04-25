/*
2do ejercicio:

function nearestSq(n){
    let raiz = Math.sqrt(n);
    if( Number.isInteger(raiz) ){
        return n;
    }
    else{
        let arr = Math.round(raiz);
        let val = arr * arr;
        return val;
    }
  }


  console.log(nearestSq(111));
  */


  //Resolución de codewars:

  // const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

/*
  var countSquares = function(cuts){
    let arr = ((cuts * cuts) * 6) + 2;

return arr;
  }


  console.log(countSquares(23));
*/


/*
4to ejercicio: 

  function noSpace(x){
   return x.split(' ').join('');
  }



  console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));
  */



  /*

  5to ejercicio:

  function changeMe(moneyIn){
   switch(moneyIn){
    case '£5': 
    return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
    break;
    case '£2':
    return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
    break;
    case '£1':
    return '20p 20p 20p 20p 20p'
    break;
    case '50p':
    return '20p 20p 10p'
    break;
    case '20p':
    return '10p 10p'
    break;
    default:
    return moneyIn;
    
   }
  }


  console.log(changeMe("£6"));
*/


/*
6to ejercicio:

function getStatus(isBusy) {
  let msg = isBusy ? "busy" : "available";
  return { status: msg }
}


console.log(getStatus(true).status);
*/


/*

7mo ejercicio:

function countSheeps(arrayOfSheep) {
  let arr = arrayOfSheep.filter((val) => val === true);
  return arr.length;
}


console.log(countSheeps(array1 = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true, true ]));
*/

/*
8vo ejercicio:

function squareSum(numbers){
  let arr = numbers.map((val) => Math.pow(val, 2));
   return arr.reduce( (acc, val) => acc + val ,0);
 }

 console.log(squareSum([0, 3, 4, 5]));
 */


/*
9no ejercicio:

 function invert(array) {
  
   let arr = array.map((val) => val >= 0 ? -Math.abs(val) : Math.abs(val));
   return arr;
  
}

console.log(invert([0,1,-2,3,-4,5]));
*/


/*
10mo ejercicio:

function addLength(str) {
   let arr = str.split(' ');
   return arr.map((val) => val +' '+ val.length);
  }



console.log(addLength('you will win'));
*/


/*
11ro ejercicio:

function booleanToString(b){
  let arr = b.toString()
  return arr;
}

console.log(booleanToString(false));
*/


/*
12do ejercicio:

function divCon(x){
    let arr = x.map((val) => typeof val === 'string' ? -Math.abs(Number(val)) : val)
    let cont = arr.reduce((acc,val) =>  acc + val);
    return cont;
}


console.log(divCon([9, 3, '7', '3']));
*/



function realNumbers(n){
   return 1%5 == 0 ? true : false;
}

console.log(realNumbers(5));


/*
14to ejercicio:

var mispelled = function(word1, word2){
    if (word1.length < word2.length){
        let temp = word1;
        word1 = word2;
        word2 = temp;
      }
      let count=0;
      for (let i = 0,j = 0; i < word1.length; i++, j++){
        if (word1[i]!==word2[j]){
           count++
        if (word1.length > word2.length){
            i++
          }
        }
      }
      return count<2
}

console.log(mispelled('versed', '22versed'));
*/


/*
15to ejercicio:

function keepOrder(ary, val) {
  let arr = ary.push(val);
 let acc = ary.sort((a,b) => a - b);
  return acc.indexOf(val);
}


console.log(keepOrder([1, 1, 2, 2, 2], 2));
*/

/*
16to ejercicio:

function largest(n, array) {
  let arr = array.sort((a,b) => a - b);
  return n <= 0 ? arr.slice(0,0) : arr.slice(-n);
}


console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
*/

/*
17mo ejercicio:

function sortMyString(S) {
  let arr = S.split('');
  let cont = [];
  let acc = [];
  let signe = arr.map((a,b) => b%2 === 0 ? cont.push(a) : acc.push(a));
  return cont.join('') +' '+ acc.join('');
  
}


console.log(sortMyString("YCOLUE'VREER"));
*/



/*
18vo ejercicio:

function swap(string){
 let arr = string.split('');
let acc = arr.map((val) => val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u' ? val.toUpperCase() : val);
return acc.join('');
 
}


console.log(swap("HellaWorld!"));
*/

/*
19no ejercicio:

function betweenExtremes(numbers) {
  let arr = Math.max(...numbers);
 let val = Math.min(...numbers);
 return arr-(val);
}

console.log(betweenExtremes([-1,1]));
*/

/*
20mo ejercicio:

function sumEvenNumbers(input) {
  let cont = [];
  let arr =  input.map((val) => val%2 === 0 ? cont.push(val) : val);
  return cont.reduce((a,b) => a+b);
}


console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
*/

/*
function allNonConsecutive (arr) {
  let cont = [];
  let val = arr.reduce((a,b) => a + 2 === b ? b : cont.push(b));
  return cont;
}

console.log(allNonConsecutive([1,2,3,4,6,7,8,10]));
*/


function add(numbers,num,val,d) {
if(numbers){
 let arr = [numbers];
 return arr.map((val) => val/arr.indexOf(val+1)).join('');
}
if(numbers && num){
    let arr = [numbers,num];
    return arr.map((val) => val/arr.indexOf(val+1)).reduce((a,b) => a+b);
}


}

console.log(add(-1,5));


function isItANum(str) {
  
  let regex = /\D/g;

  let arr = str.replace(regex,'')
  for(let i = 0; i < arr.length; i++){
    if( str[i] === '02078834982'){
      return undefined;
    }
    if(str[i] != '02078834982'){
      if(arr.length > 11 || arr.length < 11){
        return "Not a phone number"
      }
      else{
        return arr;
      }

    }
  }
}
  

console.log(isItANum("2078834982"));

/*
21er ejercicio:
function disemvowel(str) {
  let regex = /[aeiouAEIOU]/g
  let arr = str.replace(regex,'');
  return arr;
}

console.log(disemvowel("This website is for losers LOL!"));
*/

/*
22do ejercicio:
function solution(str, ending){
 
 if(ending != ''){
  let arr = str.slice(-ending.length)
  if(arr === ending){
  return true;
  }
  else{
    return false
  }
 }
 else{
  return true;
 }
}

console.log(solution('abcde', 'df'));
*/

/*
23er ejercicio:

var greet = function(name) {
let arr = name.split('');
let val = arr.slice(0,1).join('');
let cont = arr.slice(1).join('');
let value = val.toUpperCase()+cont.toLowerCase();
return  'Hello '+value+'!'


};

console.log(greet('riley'));
*/

/*
24to ejercicio:

function nerdify(txt){
  let arr = txt.replace(/a/gi, 4);
  let val = arr.replace(/e/gi, 3);
  let cont = val.replace(/l/g, 1);
  return cont;
}

console.log(nerdify("Los Angeles"));
*/

/*
25to ejercicio:

function toNumberArray(stringarray){
  let arr = stringarray.map((val) => Number(val));
  return arr;
}

console.log(toNumberArray(["1.1","2.2","3.3"]));
*/

/*
26to ejercicio:

function removeConsecutiveDuplicates(string) {
  let arr = string.split(' ');
  return arr.filter((el, i) => el != arr[i+1]).join(' ');
}


console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));
*/


function consecutive(arr) {
  let cont = 0;
  let val = arr.indexOf(arr[0]);
  let acc = arr.sort((c,d) => c-d);
  let New =  val === -1 ? 0 : acc.reduce((a,b) => a - b === -1 ? true : cont++)
  return cont;
}

  console.log(consecutive([3]));


  /*
  27mo ejercicio:

  function solve(s){
  let arr = s.split('');
  let acc = arr.filter((val) => val === val.toUpperCase())
  let value = arr.filter((a) => a === a.toLowerCase());
  return acc.length <= value.length ? s.toLowerCase() : s.toUpperCase();
  }

console.log(solve("COde"));
*/


//https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/train/javascript


/*
28vo ejercicio:

function sortByLength (array) {
 
 return array.sort((a,b) => a.length-b.length);
};

console.log(sortByLength(["Beg", "Life", "I", "To"]));
*/

/*
29no ejercicio:

function noOdds( values ){
  return values.filter((val) => val%2 === 0);
}

console.log(noOdds( [0,1,2,3] ));
*/



/*
30mo ejercicio:

function sumNoDuplicates(numList) {
  let arr = numList.sort((a,b) => a-b);
  let val = arr.filter((c,d) => c === arr[d+1])
  let cont = arr.filter((e) => !val.includes(e));
  return cont.reduce((f,g) => f+g,0);

  
}

console.log(sumNoDuplicates([10, 10, 1, 4, 10, 3, 9, 6, 10, 10, 9, 9, 10, 5, 6, 10, 4, 1]));

//https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2/train/javascript

resolución codewars:
function sumNoDuplicates(numList) {
  return numList.filter((i)=> numList.indexOf(i) == numList.lastIndexOf(i)).reduce((a,b)=> a + b, 0)
}
*/



function last(x){
 let arr = x.split(' ');

 

 
}


console.log(last('man i need a taxi up to ubud'));
//https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/train/javascript


/*
31er ejercicio:

function reverseWords(str) {
 let arr = str.split('').reverse().join('');
 let val = arr.split(' ').reverse();
 return val.join(' ')
}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
*/


/*
32do ejercicio:

function descendingOrder(n){
  let arr = n.toString().split('');
  return Number(arr.sort((a,b) => b-a).join(''));
}

console.log(descendingOrder(123456789));
*/


/*
33er ejercicio:

function consonantCount(str) {
  let arr = str
  let val = arr.replace(/[aeiou]/gi,'');
  let cont = val.replace(/\d/gm,'');
  let acc = cont.replace(/[\s]+/g,'');
  let value = acc.replace(/\_/g,'');
  return value.replace(/\W/g,'').length;
}


console.log(consonantCount('#%&'));
*/