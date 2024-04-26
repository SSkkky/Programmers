function solution(numbers, n) {
    let answer = 0;
    answer = numbers.reduce((acc, el, i) => {
        console.log(`${i}번째 요소는 ${el}이고 총합은 ${acc}`)
        if (acc > n) {
            console.log('종료!')
            return;
        }
        return el + acc;
    })
    return answer;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123))
//console.log(solution([58, 44, 27, 10, 100], 139))
// 239