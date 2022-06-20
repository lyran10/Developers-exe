const fs = require("fs");

// let data = fs.readFileSync("file","utf-8")

// console.log(data)

// fs.writeFile("write.text","written",(err) => {
//   if(err){
//     console.log(err)
//   }
// })


// fs.appendFile("write.text","written again",(err) => {
//     if(err){
//       console.log(err)
//     }
// })

fs.unlink('write.text', err=>{
  if(err){
    console.log(err);
  }
})