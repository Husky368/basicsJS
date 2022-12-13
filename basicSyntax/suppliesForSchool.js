function suppliesForSchool(input){
    //•	Брой пакети химикали - цяло число в интервала [0...100]
    //•	Брой пакети маркери - цяло число в интервала [0...100]
    //•	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
    //•	Процент намаление - цяло число в интервала [0...100]
    let packPens = Number(input[0])
    let packMarkers = Number(input[1])
    let litresPreparate = Number(input[2])
    let percentDiscout = Number(input[3])
    //•	Пакет химикали - 5.80 лв. 
    //•	Пакет маркери - 7.20 лв. 
    //•	Препарат - 1.20 лв (за литър)
    let pens = packPens * 5.80
    let markers = packMarkers * 7.20
    let litres = litresPreparate * 1.20
    let sumMoney = pens + markers + litres
    percentDiscout /= 100
    sumMoney = sumMoney - (sumMoney * percentDiscout)
    console.log(sumMoney);
}
suppliesForSchool(["4 ",
"2 ",
"5 ",
"13 "]
)