// s = "A man, a plan, a canal: Panama" ===> return true
// s = "race a car" ===> return false

// My Suggested Solutions:
// 1. use reverse function ==> O(n)
// 2. 2 pointers & check single char each time ==> O(n);


// function isPalindrome(s) {
//     const finalString = s.replace(/[\W_]/g, '').toLowerCase();

//     return finalString === finalString.split("").reverse().join("");
// }

function isPalindrome(s) {
    const finalString = s.replace(/[\W_]/g, '').toLowerCase();
    let leftPointer = 0;
    let rightPointer = finalString.length - 1;

    console.log(leftPointer < rightPointer, finalString[leftPointer], finalString[rightPointer]);
    while (leftPointer <= rightPointer) {
        if(finalString[leftPointer] !== finalString[rightPointer]) return false;
        leftPointer++;
        rightPointer--;
    }

    return true;
}

module.exports = isPalindrome;
