let ism = prompt('Ismingizni kiriting. ')
let hz = +prompt('hozirgi yilni kiriting. ')
let tg = +prompt('Tuglgan yilingizni kiriting. ')
function hisob( a = hz , b= tg) {
    return a - b
}
alert(ism+ '. Yoshingiz ' +hisob( hz ,tg) +'da');




let qoy = +prompt("Qo'ylar sonini kiriting")
let sheep = ''
for (let i = 1  ; i <= qoy; i++) {
    if (qoy == 1 || i <2 ) {
        sheep = sheep + i+'qoy...'
    }else  {
        sheep= sheep + i+'qoylar...'
    }
}
console.log(sheep);



let son = +prompt('kvadratning tomoni uzunligini kiriting.')
while (isNaN(son) || son == 0) {
        son = +prompt('kvadratning tomoni uzunligini boshqattan kiriting.')
    }
let box = ''
for (let row = 0; row < son; row++) {
    for (let col = 0; col < son; col++) {
        if (son == son) {
            box = box + '😉'
        } else {
            box = box + '😉'
        }
    }
    console.log(box);
    box = ''
}




let s = +prompt('Qancha misol yechmoqchisiz.')
 while (isNaN(s) || s == 0) {
    s = +prompt('Faqatgina son kirita olasiz.')
}
function random(min, max) {
    return math.round(math.random(s)*(max-min) + min)
} 
let misol = +prompt(random(min , max)*s)

