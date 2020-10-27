// const tableNumbers = [5, 14, 7, 10, 20, 11, 12, 15, 3]

// for (let i =0; i < tableNumbers.length; i++) {
//   if(tableNumbers[i] % 2 === 0) {
//     console.log(tableNumbers[i]);
//   }
// }


const people  = 60


for(let i =1; i<= people; i++)  {
  if(i % 2 === 0) {
    console.log( i +'番'+ '番の人は青チームです');
  } else {
    console.log( i +'番'+ '番の人は赤チームです')
  }
}