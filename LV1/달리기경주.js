function solution(players, callings) {
    // a > b 이면(say(a)) answer.push(a)
    // ["a","b","c"]

    // callings.forEach((item, i) => {
    //     let index = players.indexOf(item);
    //     [players[index - 1], players[index]] = [players[index], players[index - 1]]
    // })

    // return players

    let index = [];
    callings.forEach((item, i) => {
        index.push(players.indexOf(item));
    })

    for (let i = 0; i < index.length; i++) {
        [players[index[i] - 1], players[index[i]]] = [players[index[i]], players[index[i] - 1]]
    }

    return players
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]))

// result
// ["mumu", "kai", "mine", "soe", "poe"]