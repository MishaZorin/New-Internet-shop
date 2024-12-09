let user = document.getElementById('user')
let user_modal = document.getElementById('user_modal')
let modal_page = document.getElementById('modal_page')
let total_price = document.getElementsByClassName('total_price')[0]
let cards = document.getElementsByClassName('card')
let __name= document.getElementsByClassName('__name')
let main__page = document.getElementsByClassName('main__page')
let shop_cart_modal = document.getElementById('shop_cart_modal')
let shopping_cart_button = document.getElementById('shopping_cart_button')
let img_modal = document.getElementsByClassName('img_modal')[0]
for (let card of cards) {
    card.onclick = function () {
        modal_page.style.display = 'block'
        let card_price = card.getElementsByClassName('price')[0]
        total_price.innerHTML = card_price.innerHTML
        window.scrollTo(0,0)

        let card_img = card.getElementsByClassName('dress_img')[0]
        img_modal.src = card_img.src 

    }
    
}
shopping_cart_button.onclick=function(){
    shop_cart_modal.style.display = 'block'
    user_modal.style.display = 'none'
}


__name.onclick=function(){
    main__page.style.display= 'block'

}


user.onclick = function () {
    user_modal.style.display = 'block'
    shop_cart_modal.style.display = 'none'
}