function solution(my_string, overwrite_string, s) {
    var answer = {};
    for(let i in my_string){
        i < (overwrite_string.length + s) && i >= s
        ? answer[i] = overwrite_string[i - s]
        : answer[i] = my_string[i]
    }
    console.log((Object.values(answer)).join(""))
}

solution("He11oWor1d", "lloWorl", 2)

/*

// [문제풀이]
// slice(n,m) 메소드 사용
function solution(my_string, overwrite_string, s) {    
    return my_string.slice(0,s)+overwrite_string+my_string.slice(s+overwrite_string.length);
}

*/