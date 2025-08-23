function inceToFeet(ince) {
    const result = ince / 12;

    return result;

}

const result1 = inceToFeet(75)
console.log(result1)

function mail(clo) {
    const meter = clo * 1.60934;
    return meter
}
console.log(mail(3))

function number(number1, number2) {
    var result = number1 * number2
    return result;
}
console.log(number(1.60934, 3))

function clo (mail){
    const ans = mail * 0.621371;
    return ans
}
console.log(clo(4))

// odd condison

function oddAverage(numbers){
   for(const number of numbers){
    if(number % 2 === 1){
        console.log('thes is add number' + number)
    }
    else if(number % 2 === 0){
        console.log('even number' + number)
    }else{
        console.log('stope')
    }
   }
}
const numbers = [12,44,56,78,98,66,43,53,21]

var avg = oddAverage(numbers)
console.log(avg)
