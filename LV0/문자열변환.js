function solution(arr) {
    var answer = '';
    for(let n of arr){
    answer += n
    }
    console.log(answer)
}

solution(["a", "b", "c"])

/*
와 그냥 바로 Join 하면 되는구나

return arr.join("")

*/