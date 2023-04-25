/*
1er ejercicio:

function findUniq(arr) {
   let val = arr.filter((a,b) => arr.indexOf(a) != b);
   return Number(arr.filter((a) => !val.includes(a)).join(''));
  }


  console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
  */


  function replaceDashesAsOne(str) {
 let cont = str.replace(/[-]+/g,'-');
 let value = cont.replace(/([-]\s)+/g, '- ');
 return value.replace(/(\s[-])+/g, ' -');
  
  
  }

  console.log(replaceDashesAsOne("we-are- - - code----warriors.-"));

/*
 2do Ejercicio:

  function arraysSimilar(arr1, arr2) {
    let val = arr1.sort();
    let cont = arr2.sort();
    return val.every((a,b) => a === cont[b] && val.length === cont.length ? true : false)
  }

  console.log(arraysSimilar([1,1,2], [4,3,2,1,1]));
  */


  
  function deepCount(a){
  let long = a.map((c,b) => c);
  return long
  }


  console.log(deepCount([1, 2, [3, 4, [5]]]));



  function selReverse(array, length) {
    let arr = array.map((val) => val.toString())
  }


  console.log(selReverse([1,2,3,4,5,6], 2));



  function wave(str){
  let cont = [];
  let value = 0;
 let arr = str.split('')
 for(let i = 0; i < arr.length; i++){
  let val = arr.map((a,b) => b === value ? a.toUpperCase() : a).join('')
  value++
  cont.push(val)
 }
 return cont
  }


  console.log(wave('hello'));


  function findOdd(A) {
    let arr = A.filter((val, b) => A.indexOf(val) != b);
    let cont = A.filter((c) => !arr.includes(c));
    if(cont){
      return cont.join('')
    }
    else{
      
    }
  }

  console.log(findOdd([1,2,2,3,3,3,3,3,3,2,2,1]));