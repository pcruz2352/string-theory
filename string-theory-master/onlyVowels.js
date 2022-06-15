// doing it with !== and &&'s


// function vowels(str) {
//     let newStr = ""

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u") {
//             // newStr = newStr + ""
//         } else {
//             newStr = newStr + str[i]
//         }

//     }
//     return newStr
// }

// console.log(vowels("Pedro Cruz"))
// console.log(vowels("smooth"))
// console.log(vowels("ozzy osbourne"))



///////////////////////////////////////////////////////////////////////////////

// doing it with === and ||'s instead

function vowels(str) {
    let newStr = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        newStr = newStr + str[i]
        } else {
            newStr = newStr + ""
        }

    }
    return newStr
}

console.log(vowels("Pedro Cruz"))
console.log(vowels("smooth"))
console.log(vowels("ozzy osbourne"))