let file = require('fs');   // fs = file system?

// file.writeFile('경로', '내용', '인코딩', '콜백함수');
// file.readFile('경로', '인코딩', '콜백함수');

// file.writeFile('love.txt', '사랑해', 'utf-8', error => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log("성공!");
//     }
// })

file.readFile('love.txt', 'utf-8', (error, content) => {
    if(error){
        console.log(error);
    }else{
        console.log(content);
    }
})