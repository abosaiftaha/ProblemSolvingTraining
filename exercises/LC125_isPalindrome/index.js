// s = "A man, a plan, a canal: Panama" ===> return true
// s = "race a car" ===> return false

// My Suggested Solutions:
// 1. use reverse function ==> O(n)
// 2. 2 pointers & check single char each time ==> O(n);


function isPalindrome(s) {
    const finalString = s.replace(/[\W_]/g, '').toLowerCase();

    return finalString === finalString.split("").reverse().join("");
}

module.exports = isPalindrome;
