let shopping_bag = document.getElementById('shopping_bag');
let favourite_items = document.getElementById('favourite_items');

let cart = JSON.parse(localStorage.getItem('cart'))||[]
let favourite = JSON.parse(localStorage.getItem('favourite'))||[];
bag(cart)
console.log(true)


let cart_total = document.getElementById('cart_total');
cart_total.innerText = cart.length;
let fav_total = document.getElementById('fav_total');
fav_total.textContent = favourite.length;


function bag(data){
    shopping_bag.innerHTML = null
    data.forEach((element,index) => {

        let div = document.createElement('div');
        div.setAttribute('id','item_price');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        let div1 = document.createElement('div');
        div1.setAttribute('id','div1');

        let div2 = document.createElement('div');

        let diva = document.createElement('div');
        let image = document.createElement('img');
        image.setAttribute('src',element.avatar);

        let divb = document.createElement('div');
        let h31 = document.createElement('h3');
        h31.innerText = element.descriptions;
        let p = document.createElement('p');
        p.innerText = 'Item ADD3527'
        let pa = document.createElement('p');
        pa.innerText = 'Color: Evergreen'
        let pb = document.createElement('p');
        pb.innerText = 'Size: XX-Small'
        let remove = document.createElement('button');
        remove.innerText = 'remove';
        remove.addEventListener('click',()=>{
            let cart = JSON.parse(localStorage.getItem('cart'))
            splice(index,1);
            localStorage.setItem('cart',JSON.stringify(cart))
            bag(cart)
        })
        let favourite = document.createElement('button');
        favourite.innerText = 'favourite'
        favourite.addEventListener('click',()=>{
            let favourite = JSON.parse(localStorage.getItem('favourite'))||[];
            favourite.push(element);
            localStorage.setItem('favourite',JSON.stringify(favourite));
            fav()
        })

        

        let div3 = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.innerText = 'Price'+ '-'+element.price;

        div1.addEventListener('click',()=>{
            let buy = JSON.parse(localStorage.getItem('buy'))||[];
            buy.push(element);
            localStorage.setItem('buy',JSON.stringify(buy));
            splice(index,1);
            cart.push(element)
            localStorage.setItem('cart',JSON.stringify(cart))
            bag(cart)
        })
        // div.addEventListener('click',()=>{
        //     let checkout = JSON.parse(localStorage.getItem('checkout'))||[]
        //     checkout.push(element);
        //     localStorage.setItem('checkout',JSON.stringify(checkout))
        //     console.log(true)
        // })
        

        divb.append(h31,p,pa,pb,remove,favourite)
        diva.append(image);
        div3.append(h3)
        div2.append(diva,divb)
        div1.append(div2,div3)
        div.append(p1,p2)
        shopping_bag.append(div,div1)
    });
}



// FAVOURITESSSS

fav(favourite)


function fav(data){
    data.forEach((element,index) => {

        let div = document.createElement('div');
        div.setAttribute('id','item_price');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        let div1 = document.createElement('div');
        div1.setAttribute('id','div1');

        let div2 = document.createElement('div');

        let diva = document.createElement('div');
        let image = document.createElement('img');
        image.setAttribute('src',element.avatar);

        let divb = document.createElement('div');
        let h31 = document.createElement('h3');
        h31.innerText = element.descriptions;
        let p = document.createElement('p');
        p.innerText = 'Item ADD3527'
        let pa = document.createElement('p');
        pa.innerText = 'Color: Evergreen'
        let pb = document.createElement('p');
        pb.innerText = 'Size: XX-Small'
        let remove = document.createElement('button');
        remove.innerText = 'remove';
        remove.addEventListener('click',()=>{
            let cart = JSON.parse(localStorage.getItem('cart'))
            splice(index,1);
            localStorage.setItem('cart',JSON.stringify(cart))
            bag(cart)
        })
        let cart = document.createElement('button');
        cart.innerText = 'cart'
        cart.addEventListener('click',()=>{
            let cart = JSON.parse(localStorage.getItem('cart'))||[];
            cart.push(element);
            localStorage.setItem('cart',JSON.stringify(cart));
            bag()

        })

        let a  = document.createElement('a');
        a.setAttribute('href','./checkout.html')
        

        let div3 = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.innerText = 'Price'+ '-'+element.price;

        div1.addEventListener('click',()=>{
            let buy = JSON.parse(localStorage.getItem('buy'))||[];
            buy.push(element);
            localStorage.setItem('buy',JSON.stringify(buy));
            splice(index,1);
            cart.push(element)
            localStorage.setItem('cart',JSON.stringify(cart))
            bag(cart)
        })
        

        divb.append(h31,p,pa,pb,remove,cart)
        a.append(image)
        diva.append(a);
        div3.append(h3)
        div2.append(diva,divb)
        div1.append(div2,div3)
        div.append(p1,p2)
        favourite_items.append(div,div1)
    });
}
