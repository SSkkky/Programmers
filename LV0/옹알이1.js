function solution(babbling) {
    let answer = 0;

    // 해당하지 않는 것을 소거하는 방식으로 전개?

    for(let item of babbling){
        item.replace('aya',' ').replace('ye',' ').replace('woo',' ').replace('ma',' ').trim().length<1 ? answer++ : null
    }
    
    return answer
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]))
