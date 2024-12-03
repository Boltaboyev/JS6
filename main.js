// 3 -------------------------------------------------------------------------Length Of Last Word
function lengthOfLastWord(s) {
    let trimStr = s.trim();
    let str = trimStr.split(" ");
    let lengthWord = str[str.length - 1];
    return lengthWord.length;
}

console.log(lengthOfLastWord(" Hello World "));




// 4 ----------------------------------------------------------------------------Valid Palindrome
// var isPalindrome = function (s) {
//     let res = s.toLowerCase().replace(/[,:]/g, "").split(" ").join("")
//     let reverse = ""

//     for (let i = res.length - 1; i >= 0; i--) {
//         reverse += res[i]
//     }
//     if (s === "") {
//         return ""
//     } else if (reverse === res) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isPalindrome("A man, a plan , a canal: Panama"))