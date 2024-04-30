function solution(code) {
    let mode = 0;
    let ret = '';
    for(let i = 0; i<code.length; i++){
        code[i] !== "1"
        ? ((i % 2 === 0 && mode === 0) || (i % 2 === 1 && mode === 1) ? ret += code[i] : ret += '')
        : mode === 0 ? mode = 1 : mode = 0
    }
    return ret.length === 0 ? "EMPTY" : ret
}
console.log(
    solution("abc1abc1abc"))