function solution(arr) {
    let answer = [];
    for (let num of arr) {
        console.log(num)
        if (num >= 50 && num % 2 === 0) {
            answer.push(num / 2)
        } else if (num < 50 && num % 2 === 1) {
            answer.push(num * 2)
        } else {
            answer.push(num)
        }
    }
    return answer;
}

console.log(solution([1, 2, 3, 100, 99, 98]))
// [2, 2, 6, 50, 99, 49]