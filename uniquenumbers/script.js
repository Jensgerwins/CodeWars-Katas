



function findUniq(arr) {
    console.log(arr);
    arr.sort((a, b) => a - b);
    const number = arr[0] == arr[1] ? arr.pop() : arr[0]
    return number;
}

console.log(findUniq([1, 0, 0]));

return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));

return arr.filter(function (elem) {
    return arr.indexOf(elem) === arr.lastIndexOf(elem)
})[0];




