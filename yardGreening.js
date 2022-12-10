function greening(input){
    let metres = Number(input[0])
    let sum = metres * 7.61
    let discount = sum * 0.18
    sum -=discount
    console.log(`The final price is: ${sum} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}