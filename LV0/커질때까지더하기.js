function solution(numbers, n) {
    return numbers.reduce((acc, el) => (acc > n) ? acc : el + acc)
}

// console.log(solution([34, 5, 71, 29, 100, 34], 123))
console.log(solution([58, 44, 27, 10, 100], 139))
// 239