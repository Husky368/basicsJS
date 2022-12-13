function basketballEquipment(input) {
    //•	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
    //•	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
    //•	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
    //•	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
    let money = Number(input[0])
    let shoesMoney = money * 0.6
    let clothesMoney = shoesMoney * 0.8
    let ballMoney = clothesMoney * 0.25
    let accoarsMoney = ballMoney * 0.20
    let sum = money + shoesMoney + clothesMoney+ ballMoney + accoarsMoney
    console.log(sum);
}
basketballEquipment(["550 "])