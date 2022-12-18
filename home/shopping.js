let container = document.getElementById('shopping_container')

let promise = fetch('https://6399dcd016b0fdad774c0884.mockapi.io/products')
promise.then((responseObject)=>{
    return responseObject.json();
})
.then((actualdata)=>{
    console.log(actualdata);
    shopping(actualdata)
})
.catch((error)=>{
    console.log(error);
})

function shopping(data){
    data.forEach(element => {
        let box = document.createElement('div');
        box.setAttribute('id',"box")

        let img = document.createElement('img');
        img.setAttribute('src',element.avatar);

        let description = document.createElement('p');
        description.innerText = element.descriptions;
        
        let price = document.createElement('p');
        price.setAttribute('id','price')
        price.textContent = 'INR'+"-" + element.price +'--'+ 'INR - 22,234';

        
        let heart = document.createElement('button');
        heart.setAttribute('id','heart');
        heart.innerText = '❤';
        heart.addEventListener('click',()=>{
            let favourite = JSON.parse(localStorage.getItem('favourite'))||[];
            favourite.push(element);
            localStorage.setItem('favourite',JSON.stringify(favourite));
        })

        let a  = document.createElement('a');
        a.setAttribute('href','./product.html')

        let cart = document.createElement('button');
        cart.setAttribute('id','cart');
        cart.innerText = '🛒';
        cart.addEventListener('click',()=>{
            let cart = JSON.parse(localStorage.getItem('cart'))||[];
            cart.push(element);
            localStorage.setItem('cart',JSON.stringify(cart));
        })

        a.append(img)
        box.append(a,description,price,heart,cart)
        container.append(box);
        box.addEventListener('click',()=>{
            console.log(element.price)
        })
    });
}