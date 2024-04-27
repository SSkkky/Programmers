const solution = (num_list) => {
    let sum1 = 0;
    let sum2 = 0;

    num_list.map((item, i) => (
        i % 2 === 0
        ? sum1 += item
        : sum2 += item
    ))
    return Math.max(sum1, sum2)
}

console.log(solution([4, 2, 6, 1, 7, 6]))