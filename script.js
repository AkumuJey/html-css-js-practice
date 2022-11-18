let x = document.getElementById('login')
let y = document.getElementById('register')
let z = document.getElementById('btn')
let t = document.getElementById('clock')

let clock = () => {
    now = new Date()
    t.innerHTML = now.toLocaleTimeString()
}


let login = () => {
    x.style.left = "10%"
    y.style.left = '-450px'
    z.style.left = '0'
}
let register = () => {
    x.style.left = "450px"
    y.style.left = '10%'
    z.style.left = '110px'
}
setInterval(clock, 1000)