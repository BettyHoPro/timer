
// console.log(process.argv.sort((a,b)=>{return a-b}));
// console.log(process.argv.length-2);
//let arr=(process.argv).slice(2);

  // for (let i=2; i < process.argv.length-1; i ++ ) {
  //   //console.log(i);
  //   //timeout += i;
  //   if (process.argv[i] === Number) {
  //     beep=process.argv[i];
  //     setTimeout(() => {
  //     process.stdout.write('\x07');
  //     }, i );
  //   }
  //   // }else if( process.argv[i] < 0 || i !== Number){
  //   //   break;
  //   // }else if (i < 0 || i !== Number ){
  //   //    break;
  //   // }else{
  //   //   break;
  //   // }
  // }
let arr=process.argv.slice(2);
let newArr = [];
for (let i of arr ) {
    //console.log(i);
    //timeout += i;
    //console.log(process.argv);
    //console.log(arr);
    console.log(i);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, i);
  // if ( i === Number) {
  //   //beep=process.argv[i];
  //   setTimeout(() => {
  //     process.stdout.write('\x07');
  //   }, i);
  // }
}
