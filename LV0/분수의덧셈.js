// function solution(n1, d1, n2, d2) {
//     let answer = [(n1*d2) + (n2*d1),(d1*d2)]
//     if(d1%d2 === 0){
//         answer = [answer[0]/d1*d2, answer[1]/d1*d2]
//     } else if(d2%d1 === 0){
//         answer = [answer[0]/d2*d1, answer[1]/d2*d1]
//     }
//     return answer;
// }

function solution(n1, d1, n2, d2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    const bj = (n1*d2) + (n2*d1)
    const bm = d1 * d2
    const cg = gcd(bj, bm)

    return [bj/cg,bm/cg]
}

function solution(n1, d1, n2, d2) {
    const gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    let answer = [(n1*d2)+(n2*d1),(d1*d2)]
    return [answer[0]/gcd(answer[0], answer[1]), answer[1]/gcd(answer[0], answer[1])]
}

console.log(solution(4, 8, 8, 16))
//console.log(solution(1,2,3,4))