/*
const solution = (todo_list, finished) => {
    var answer = [];
    for(let a in todo_list){
        if(!finished[a]) answer.push(todo_list[a])
    }
    return answer;
}
*/

// Array 인스턴스의 filter() 메서드는 주어진 배열의 일부에 대한 얕은 복사본을 생성하고, 주어진 배열에서 제공된 함수에 의해 구현된 테스트를 통과한 요소로만 필터링 합니다.(조건이 true인)

const solution = (todo_list, finished) => {
    console.log(todo_list.filter((item, i) => !finished[i] ))
}

solution(["problemsolving", "practiceguitar", "swim", "studygraph"], [true, false, true, false])