console.log(alphabetWar("zdqmwpbs"));

function alphabetWar(fight) {
    let countLeft = 0;
    let countRight = 0;


    const leftSide = {
        "w": 4,
        "p": 3,
        "b": 2,
        "s": 1,
    };
    const rightSide = {
        "m": 4,
        "q": 3,
        "d": 2,
        "z": 1,
    };

    if (fight.toLowerCase() !== fight) {
        return;
    }
    for (let i = 0; i < fight.length; i++) {
        const strr = fight[i];
        //   console.log(strr);
        for (let j in leftSide) {
            if (strr === j) {
                if (j === "w") {
                    countLeft = countLeft + 4;
                } else if (j === "p") {
                    countLeft = countLeft + 3;
                }
                else if (j === "b") {
                    countLeft = countLeft + 2;
                }
                else if (j === "s") {
                    countLeft = countLeft + 1;
                }

            }
        }
        for (let k in rightSide) {
            if (strr === k) {
                if (k === "m") {
                    countRight = countRight + 4;
                } else if (k === "q") {
                    countRight = countRight + 3;
                }
                else if (k === "d") {
                    countRight = countRight + 2;
                }
                else if (k === "z") {
                    countRight = countRight + 1;
                }
            }
        }
    }
    if (countLeft === countRight) {
        return "Let's fight again!";
    } else if (countLeft < countRight) {
        return "Right side wins!";
    } else
        return "Left side wins!";


}
