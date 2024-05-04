function solution(n) {
    let answer = 0;
    for(let i = 0; i<=n; i++){
        i%2===0 ? answer+=i : null
    }
    return answer;
}

/*
[다른 사람의 풀이]

1) 반복 횟수 줄이기
for(let i=2; i<=n; i+=2){ answer+=i }

2) 수학공식을 코드로 (하 짱이당)
function solution(n) {
    var half = Math.floor(n/2); 9이면 8로 컷팅
    return half*(half+1);
}

짝수 합 공식이 (n/2)(n/2 + 1) 인데 n이 홀수일 수 있으니 floor로 깔꼼하게 자르고 계산!
*/