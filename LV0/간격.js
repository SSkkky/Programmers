const solution = (num_list, n) => {
    return num_list.filter((item, i) => i % n === 0)
}

console.log(solution([4, 2, 6, 1, 7, 6], 2))