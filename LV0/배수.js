const solution = (n) => {
    let answer = 0;
    for (let i = 0; i <= n; i+=2) {
        n % 2 === 0
        ? answer += (i**2)
        : answer += (i+1)
    }
    return answer;
}


/*
수열 공식 개념 필요 ㅇㅅㅇ

// 홀수 합 계산 (n + 1) * n) / 4;
// 제곱 합 계산 : n(n+1)(2n+1)/6
function solution(n) {
    return n % 2 === 1 ? (n+1)/2**2 : n*(n+1)*(n+2)/6;
}

*/
