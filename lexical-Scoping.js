function prantFunction(){
     let a = 6;
     function childFunction(){
          let b = 4;
          console.log('sum:' + (a+b));
     }
     childFunction();
}

const lexical = prantFunction();
console.log(lexical)