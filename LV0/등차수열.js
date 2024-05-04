const solution = (a, d, included) => {
    let answer = 0;
    included.map((item, i) => (
        item ? answer+=(i*d + a) : null 
    ))
    return answer
}

// 등차수열이니까 reduce 써도되는구나...!
/*
function solution(a, d, included) {
    return included.reduce((acc, flag, i) => {
        return flag ? acc + a + d * i : acc
    }, 0)
}
*/

console.log(solution(3,4,[true, false, false, true, true]))