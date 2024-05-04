const solution = (start, end) => {
    let answer = [];
    for(let i=end; i<=start; i++){ answer.push(i) }
    return answer.sort(function(a,b){return b-a})
}
console.log(solution(10,3))

/*
아니 --를 쓰면 되잖아...그러게용....
    for(let i = start; i>=end; i--){
        answer.push(i)
    }
*/