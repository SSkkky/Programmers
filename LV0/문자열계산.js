const solution = (str) => {
    str = str.split(" ").join("");
    let total = Number(str.charAt(0));

    for(let i=1; i<str.length; i+=2){
        if(str.charAt(i) === '+'){
            total += Number(str.charAt(i+1))
        } else if(str.charAt(i) === '-'){
            total -= Number(str.charAt(i+1))
        }
    }
    
    return total
}
console.log(solution("3 + 4"))

// eval(str) 이 간단한데 보안문제가 있으므로...