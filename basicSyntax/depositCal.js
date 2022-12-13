function depositCal(input){
    let amount = Number(input[0])
    let term = Number(input[1])
    let percent = Number(input[2])
    percent /= 100
    let month = amount * percent
    month /=term
    let sum = amount + term * month
    console.log(sum);
}
amount("200")
term("3")
percent("5.7")
