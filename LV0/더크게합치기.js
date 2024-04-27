function solution(a, b) {
    let q = (a * (10**b.toString().length)) + b;
    let w = (b * (10**a.toString().length)) + a;
    return q < w ? answer = w : answer = q;
}

solution(9, 91)
// solution(89, 8)



/*

와 백틱쓰면되는구나......
숫자 비교 Math.max = 큰 값을 반환함

return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))

*/