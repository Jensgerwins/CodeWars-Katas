function friend(friends) {
    const arr = [];


    friends.forEach(item => {
        if (item.length === 4) {
            arr.push(item);
            return arr;
        }


    })
}


function friend(friends) {
    return friends.filter(n => n.length === 4)
}




const friend = friends => friends.filter(friend => friend.length == 4);


console.log(friend(["Ryan", "Kieran", "Mark"]));