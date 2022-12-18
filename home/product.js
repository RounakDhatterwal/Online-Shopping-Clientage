let heart = document.getElementById('favourite')
heart.addEventListener('click',()=>{
    let favourite = JSON.parse(localStorage.getItem('favourite'))||[];
    favourite.push(element);
    localStorage.setItem('favourite',JSON.stringify(favourite));
})

let cart = document.getElementById('cart')
cart.addEventListener('click',()=>{
    let cart = JSON.parse(localStorage.getItem('cart'))||[];
    cart.push(element);
    localStorage.setItem('cart',JSON.stringify(cart));
})

// let img = document.getElementById('img');
// img.setAttribute('src','https://www.jcrew.com/s7-img-facade/BM302_RD6052_m?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540')
// let image = document.getElementById('image');
// image.append(img)
