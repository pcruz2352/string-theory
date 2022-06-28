function exclaim(str) {
    let newStr = ""

    for (let i = 0; i < str.length; i++){
if (str[i] === "?" || str[i] === "."){
    newStr = newStr + "!"
} else {
    newStr = newStr  + str[i]
}
}  
    return newStr
}

console.log(exclaim("Where are you going? Are you lost?")) 
console.log(exclaim("This is great.")) 