function disemvowel(str) {
    var newStr = "",
        i;

    for (i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) continue;
        newStr += str[i];
        console.log(newStr);
    }



}

disemvowel("No offense but,\nYour writing is among the worst I've ever read");