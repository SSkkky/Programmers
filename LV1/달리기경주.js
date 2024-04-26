function solution(players, callings) {
    // callings.forEach((item, i) => {
    //     let index = players.indexOf(item);
    //     [players[index - 1], players[index]] = [players[index], players[index - 1]]
    // })

    // 배열은 순회, 객체는 어드레스 개념!!
    const keyPlayers = {} // value[key] {mumu: 1, soe: 2 ... }
    const keyRanks = {} // key[value] { '1': 'mumu', '2': 'soe' ... }

    players.forEach((player, idx) => {
        const rank = idx + 1;
        keyPlayers[player] = rank
        keyRanks[rank] = player
    })

    callings.forEach((calling) => {
        const losePlayer = keyRanks[keyPlayers[calling] - 1];

        // 추월한 선수와 불린 선수 값 변경
        keyRanks[keyPlayers[calling]] = losePlayer;
        keyRanks[keyPlayers[losePlayer]] = calling;

        // 순위 업데이트
        keyPlayers[calling] -= 1;
        keyPlayers[losePlayer] += 1;
    })

    return Object.values(keyRanks)
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]))

// result
// ["mumu", "kai", "mine", "soe", "poe"]