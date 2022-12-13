function foodDelivery(input){
    //	Брой пилешки менюта – цяло число в интервала [0 … 99]
    //•	Брой менюта с риба – цяло число в интервала [0 … 99]
    //•	Брой вегетариански менюта – цяло число в интервала [0 … 99]
    let chickenMenu = Number(input[0])
    let fishMenu = Number(input[1])
    let vegetarianMenu = Number(input[2])
    //•	Пилешко меню –  10.35 лв. 
    //•	Меню с риба – 12.40 лв. 
    //•	Вегетарианско меню  – 8.15 лв. 
    let sum = 1.20*((chickenMenu * 10.35)+(fishMenu * 12.40)+ (vegetarianMenu * 8.15))
    sum += 2.50
    console.log(sum);
}
foodDelivery(["9 ",
"2 ",
"6 "]

)