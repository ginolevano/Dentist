'use strict'

    let title = document.querySelectorAll('.acordeon__titlecont')
    let info  = document.querySelectorAll('.acordeon__info')
    let arrow = document.querySelectorAll('.arrow__title')
    
    
    title.forEach((cadaItem,i)=>{
        title[i].addEventListener('click',()=>{
            title.forEach((cadaitem,g)=>{
                info[g].classList.remove('active')
            })
                info[i].classList.add('active')
            

        arrow.forEach((cadaArrow,i)=>{
            
            arrow[i].classList.remove('active')
        })
            arrow[i].classList.add('active')
        })
    })

    const card      = document.querySelectorAll('.card__all')
    const lightbox  = document.querySelectorAll('.lightbox__cont')
    let  close    = document.querySelectorAll('.lightbox__x') 


    card.forEach((cadaCard,i)=>{
        card[i].addEventListener('click',()=>{
            console.log('tarjeta')
            lightbox.forEach((cadaCard,i)=>{
                lightbox[i].classList.remove('active')
            })
            lightbox[i].classList.add('active')
        })  
    })

    close.forEach((cadaClose,i)=>{
        close[i].addEventListener('click',()=>{
            console.log('closeee')
            close.forEach((cadaClose,i)=>{
                lightbox[i].classList.remove('active')
            })
                
        })
    })