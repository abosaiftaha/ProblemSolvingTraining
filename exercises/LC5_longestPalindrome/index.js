//Given a string s, find the longest palindromic substring in s
// --- Example
// longestPalindrome("cbbd") --> "bb"
// longestPalindrome("abba") --> "abba"
// longestPalindrome("a") --> "a"

// 💭 Suggested Solutions
// 1- loop over each substring & check is it's palindrome then return the longest palindrome ===> O(n^2)
// 2- Expand on left & right of each letter ==> O(n)

// function longestPalindrome(s) {
// }

//! Gave TLE
function longestPalindrome(s) {
    s = `${s}`;
    let arr= [];
    let result = "";
    
    for(let i = 0; i < s.length; i++){
        for(let j = 0; j < s.length; j++){
            const subStringValue = s.slice(i,j+1); 
            arr.push(subStringValue);
        }
    }

    for(let element of arr){
        if(element === element.split("").reverse().join("") && element.length > result.length) result = element;
    }

    return result;
}

module.exports = longestPalindrome;
