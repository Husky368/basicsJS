function fishTank(input) {
    //1.	Дължина в см – цяло число в интервала [10 … 500]
    //2.	Широчина в см – цяло число в интервала [10 … 300]
    //3.	Височина в см – цяло число в интервала [10… 200]
    //4.	Процент  – реално число в интервала [0.000 … 100.000]
    let L = Number(input[0])
    let W = Number(input[1])
    let H = Number(input[2])
    let percent = Number(input[3])
    percent /= 100
    let volume = L * W * H
    volume /= 1000
    let litres = volume * (1 - percent)
    console.log(litres);
}
fishTank(["105 ",
"77 ",
"89 ",
"18.5 "]
)