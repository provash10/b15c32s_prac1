
// // for loop
// for (initialization; Range/CSSConditionRule; increment/decrement){
//     //statement
// }

// // nested loop ---> Like 2D Array 
// for (initialization; Range/CSSConditionRule; increment/decrement){
//     //statement

//     for (initialization; Range/CSSConditionRule; increment/decrement){
//     //statement
// }
// }

// for (let i = 0; i <=10; i++){
//     //statement
//     for (let i = 0; i <=10; i++){
//     //statement
// }
// }

let marks = [
    [34, 65, 89,98, 32],
    [56, 78, 88, 67, 99],
    [43, 67, 89, 78, 9],
];

// marks[0][0]
// marks[0][1]
// marks[0][2]
// marks[0][3]
// marks[0][4]


// marks[1][0]
// marks[1][1]
// marks[1][2]
// marks[1][3]
// marks[1][4]

// marks[2][0]
// marks[2][1]
// marks[2][2]
// marks[2][3]
// marks[2][4]

// console.log(marks[0][0]);
// console.log(marks[0][1]);
// console.log(marks[0][2]);
// console.log(marks[0][3]);
// console.log(marks[0][4]);

// console.log(marks[1][0]);
// console.log(marks[1][1]);
// console.log(marks[1][2]);
// console.log(marks[1][3]);
// console.log(marks[1][4]);

// console.log(marks[2][0]);
// console.log(marks[2][1]);
// console.log(marks[2][2]);
// console.log(marks[2][3]);
// console.log(marks[2][4]);

// row * column = 3* 5 = 15

// for(i = 0; i <= 2; i++){
//     for(j = 0; j <= 4; j++){
//         // console.log(marks[0][0]);
//           console.log(marks[i][j]);

//           if(marks[i][j] >=33){
//             console.log('Passed');
//           }
//           else{
//             console.log('Failed');
//           }
//     }
// }


// for(i = 0; i <= 2; i++){
//     for(j = 0; j <= 4; j++){
//         // console.log(marks[0][0]);
//         //   console.log(marks[i][j]);

//           if(marks[i][j] >=33){
//             console.log(marks[i][j] + ' = Passed');
//           }
//           else{
//             console.log(marks[i][j] + ' = Failed');
//           }
//     }
// }

// section create ===============>

for(i = 0; i <= 2; i++){
    // for section A, B, C
    if( i == 0 ) {
        console.log("Section A")
    }
    else if ( i == 1 ) {
        console.log("Section B")
    }

    // else if ( i == 2 ) {
    //     console.log("Section c")
    // }
    else {
        console.log("Section C")
    }



    for(j = 0; j <= 4; j++){
        // console.log(marks[0][0]);
        //   console.log(marks[i][j]);

          if(marks[i][j] >=33){
            console.log(marks[i][j] + ' = Passed');
          }
          else{
            console.log(marks[i][j] + ' = Failed');
          }
    }
}

// =======Function=====

// function sum(){
//     let x = 30;
//     let y = 20;
//     let result = x+y;
//     console.log(result);
// }

// // functionName ();
// sum();