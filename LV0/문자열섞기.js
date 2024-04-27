function solution(str1, str2) {
    var answer = '';
    for(let i = 0; i < str1.length; i++){
        answer += str1[i]
        answer += str2[i]
    }
    console.log(answer);
}

solution("aaaaa","bbbbb")

/*

[문제 풀이]

배열의 아이템을 추출해 다른 배열 원소를 더하고 합침
function solution(str1, str2) {
    return [...str1].map((x, idx)=> x+str2[idx]).join("");
}

*/