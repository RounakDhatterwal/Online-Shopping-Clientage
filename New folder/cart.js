let shopping_bag = document.getElementById('shopping_bag');
let cart = JSON.parse(localStorage.getItem('cart'))||[];
let total = document.getElementById('b')


function bag(data){
shopping_bag.innerHTML = null;
    data.forEach((element,index) => {
        let card = document.createElement('div');
        let image = document.createElement('img');
        image.setAttribute('src',element.avatar);
        let p = document.createElement('p');
        p.innerText = 'INR' + "-" + element.price;
        let button = document.createElement('button');
        button.innerText = '❤Favourite';
        button.addEventListener('click',()=>{
            favourite.push(element);
            localStorage.setItem('favourite',JSON.stringify('favourite'))
            let cart = JSON.parse(localStorage.getItem('cart'))||[];
            cart.splice(index,1);
            localStorage.setItem('cart',JSON.stringify(cart))
            bag()
        })
        let button1 = document.createElement('button');
        button1.innerText = '💔remove';
        button1.addEventListener('click',()=>{
            let cart = JSON.parse(localStorage.getItem('cart'))||[];
            cart.splice(index,1);
            localStorage.setItem('cart',JSON.stringify(cart))
            bag()
        })

        card.append(image,p,button,button1)
        shopping_bag.append(card);
    });
}
bag(cart)
total.innerText = cart.length

// 
let count = document.getElementById('a')
let fav_items = document.getElementById('fav_items');
let favourite = JSON.parse(localStorage.getItem('favourite'))||[];
// favourite

console.log(favourite)



function fav(data){
    fav_items.innerHTML = null;
        data.forEach((element,index) => {
            let card = document.createElement('div');
            let image = document.createElement('img');
            image.setAttribute('src',element.avatar);
            let p = document.createElement('p');
            p.innerText = 'INR' + "-" + element.price;
            let button = document.createElement('button');
            button.innerText = '🛒 Cart';
            button.addEventListener('click',()=>{
                favourite.push(element);
                localStorage.setItem('favourite',JSON.stringify('favourite'))
                let cart = JSON.parse(localStorage.getItem('cart'))||[];
                cart.splice(index,1);
                localStorage.setItem('cart',JSON.stringify(cart))
                fav()
            })
            let button1 = document.createElement('button');
            button1.innerText = '💔remove';
            button1.addEventListener('click',()=>{
                let cart = JSON.parse(localStorage.getItem('cart'))||[];
                cart.splice(index,1);
                localStorage.setItem('cart',JSON.stringify(cart))
                fav()
            })
    
            card.append(image,p,button,button1)
            shopping_bag.append(card);
        });
    }
    fav()
