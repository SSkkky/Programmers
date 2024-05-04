const solution = (array) => {
    return array.toString().split('').filter((word) => word === '7').length;
}
console.log(solution([7, 77, 17]))