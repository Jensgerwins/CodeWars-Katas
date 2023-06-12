function XO(str) {
    let countX = 0;
    let strr = str.toLowerCase();
    const arr = strr.split("");

    arr.forEach(arr => {
        if (arr === "x") {
            countX += 1;
        }
        if (arr === "o") {
            countX -= 1;
        }






    });
    return countX;
}

function XO(str) {
    let countX = 0;
    let strr = str.toLowerCase();


    str.split("").forEach(arr => {
        if ("x" === arr.toLowerCase()) {
            countX += 1;
        }
        if ("o" === arr.toLowerCase()) {
            countX -= 1;
        }

    });

    return countX === 0;
}



const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

console.log(XO("xoooxx"));