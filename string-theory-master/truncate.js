function truncate(str) {
    let newStr = ""

    for (let i = 0; i < 15; i++) {
        if (str[i] > 15) {
            newStr = newStr //+ "..."
        } else {
            newStr = newStr + str[i]
        }  
    }
    return newStr + "..."
}
//                                   |
console.log(truncate("Today was the worst."))
console.log(truncate("Well, you should have woke up sooner."))
//                                   |



