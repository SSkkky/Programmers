const solution = (names) => {
    let answer = [];
    for(let a in names){
        if(a % 5 === 0) answer.push(names[a])
    }
    return answer
}

console.log(solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"]))

//["nami", "vex"]