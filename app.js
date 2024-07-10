// write code here
function first(arr, n) {
    if (n === undefined || n === 1) {
        let result = arr[0];
        return result;
    } if (n > 1) {
        let result = arr.slice(0,n)
        return result;
    }
}

console.log(first([7, 9, 0, -2])); // 7
console.log(first([], 3)); // []
console.log(first([7, 9, 0, -2], 3)); // [7, 9 ,0]


