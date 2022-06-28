'use strict'

console.log('hola mundoooo')
// CUANDO HAGO CLICK DERECHO ++

let left  = document.querySelector('.arrow__left')
let right = document.querySelector('.arrow__right')
let imgs  = document.querySelectorAll('.img__pacientes')
let foto  = 0


//CUANDO LE DOY CLICK EN menu__movil 
//ACTIVE lines__menu 
let menuMovile =  document.querySelector('.menu__movil')
let linesMenu  = document.querySelectorAll('.lines__menu')
let menuCont   = document.querySelector('.cont__menumovil')

menuMovile.addEventListener('click',()=>{
    console.log("btnmenu")
    linesMenu.forEach((cadaLine,i)=>{
        linesMenu[i].classList.toggle('active')
        menuCont.classList.toggle('active')
    })
})


right.addEventListener('click',()=>{

    foto++
    console.log('rightttt')
    if ( foto === imgs.length){
        foto = 0
    }

    imgs.forEach((cadaImg,i)=>{
        imgs[i].classList.remove('active')

        imgs[foto].classList.add('active')
    })
})

left.addEventListener('click',()=>{
    
    console.log('menos')
    if( foto === 0 ){
        foto = imgs.length
    }

    foto--
    
    imgs.forEach((cadaImg,i)=>{
        imgs[i].classList.remove('active')
        imgs[foto].classList.add('active')
    })
})

