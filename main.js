let image = document.querySelector('#image')
let txt = document.querySelector('#txt')
let btn = document.querySelector('#btn')


let firstStart = false

let quotes = [
    'Если в автобусе нет места-подожди следущий',
    'Не хочешь идти в школу-жди выходные',
    'Хочешь купить воды-попроси 50 рублей',
    'Если голоден-поешь гороховый суп',
    'Хочешь отдых-жди лето',
    'Волк не заяц,но волк ест зайцев... ',
    'Маша не медведь, но медведь любит мёд...',
]

const check = () => {
    firstStart = true
    image.style.display = 'none'
    txt.style.display = 'block'
}

btn.addEventListener('click', () => {
    if(firstStart === false) {
    check()
    }

    let randomFloat = Math.random(0,quotes.length)
    let randomFormat = randomFloat * quotes.length
    let randomInt = Math.floor(randomFormat)

    let randomPhrase = quotes[randomInt]




    txt.innerText = randomPhrase
})
