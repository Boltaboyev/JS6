// 1 --------------------------------------------------------------------------Roman To Integer
// function romanToInt(s) {
//     let result = 0

//     for (let i = 0; i < s.length; i++) {
//         switch (s[i]) {
//             case "I":
//                 if (
//                     (i + 1 < s.length && s[i + 1] === "V") ||
//                     s[i + 1] === "X"
//                 ) {
//                     result -= 1
//                 } else {
//                     result += 1
//                 }
//                 break
//             case "X":
//                 if (
//                     (i + 1 < s.length && s[i + 1] === "L") ||
//                     s[i + 1] === "C"
//                 ) {
//                     result -= 10
//                 } else {
//                     result += 10
//                 }
//                 break
//             case "C":
//                 if (
//                     (i + 1 < s.length && s[i + 1] === "D") ||
//                     s[i + 1] === "M"
//                 ) {
//                     result -= 100
//                 } else {
//                     result += 100
//                 }
//                 break
//             case "V":
//                 result += 5
//                 break
//             case "L":
//                 result += 50
//                 break
//             case "D":
//                 result += 500
//                 break
//             case "M":
//                 result += 1000
//                 break
//         }
//     }

//     return result
// }

// console.log(romanToInt("MCMXCIV"))






// 3 -------------------------------------------------------------------------Length Of Last Word
// function lengthOfLastWord(s) {
//     let trimStr = s.trim();
//     let str = trimStr.split(" ");
//     let lengthWord = str[str.length - 1];
//     return lengthWord.length;
// }

// console.log(lengthOfLastWord(" Hello World "));





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





// 5 -------------------------------------------------------------------Add Digits
// function addDigits(num) {
//     let count = 0
//     let count2 = 0

//     for (let i = 0; i < String(num).length; i++) {
//         count += Number(String(num)[i])
//         if (count === 10) {
//             count = 1
//         }
//     }
//     for (let j = 0; j < String(count).length; j++) {
//         count2 += Number(String(count)[j])
//         if (count2 === 10) {
//             count2 = 1
//         }
//     }

//     return count2
// }

// console.log(addDigits(38))
