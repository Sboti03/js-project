import _ from "lodash"
import { random } from './matek.js'
import { LOREM, NAME } from './texts/unique.js'



console.log(random(5,10))
console.log(NAME + ' ' +  LOREM)

let t1 = [1, 2, 3]
let t2 = [ 123, 32, 32]
let t3 = [2]

let combine = _.concat(t1, t2, t3)

console.log(combine)

function katt(){
    alert('Rányomtál erre a gombra')
}


document.getElementById('gomb').addEventListener('click', katt)