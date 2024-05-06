function solution(num_list) {
    let a = [];
    let b = [];
    for(let n of num_list){ n%2===1 ? a.push(n) : b.push(n) }
    return Number(a.join("")) + Number(b.join(""))
}

console.log(solution(	[5, 7, 8, 3]))