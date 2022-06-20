let fs = require("fs")

let read = fs.readFileSync("RightLeft.txt","utf-8",(err) => {
  if(err){
    console.log(err)
  }
})

let splitted  = read.split("")

let getRightSteps = () => {
  let count = 0
  splitted.forEach((ele,index) => {
    if(ele === ">"){
      count++
    }else{
      count--
    }
  })

  console.log(`Right Steps : ${count}`)
}

// getRightSteps()

let positionMinusOne = () => {
 let reduced =  splitted.reduce((acc,cur,index) => {
  if(acc === -1){
    console.log(`Steps : ${index} , for -1`)
    return acc
  }
  else if(cur === ">"){
    return acc+1
  }else{
    return acc-1
  }
},0)
  return reduced
}

console.log(positionMinusOne())
