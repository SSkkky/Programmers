const solution = (arr) => {
    let index = []
    arr.map((item, i) => ( item === 2 ? index.push(i) : null ))
    return index.length === 0 ? [-1] : arr.slice(index[0], index[index.length - 1] + 1);
}

console.log(solution([1, 2, 1, 4, 5, 2, 9]))


// 통과는 했으나 아래 코드처럼 indexOf 와 lastIndexOf를 사용했으면 더 간결했을 것 같다.
/*
function solution(arr) {
    const from = arr.indexOf(2);
    const end = arr.lastIndexOf(2);

    return from === -1 ? [-1] : arr.slice(from, end+1);
}
*/