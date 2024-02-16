function fizzBuzz(n) {
    var answer = []
    var number = n
    while (number > 0) {
        if( number % 3 == 0 && number % 5 == 0){
            answer.push('Fizz')
            number--
        }else{
            number--
        }
    }
    return answer

}

fizzBuzz(15)
console.log(fizzBuzz(15));

console.log('hello')