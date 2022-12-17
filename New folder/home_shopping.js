let container = document.getElementById('home_shopping_container')

let promise = fetch('https://6399dcd016b0fdad774c0884.mockapi.io/products?page=5&limit=10')
promise.then((responseObject)=>{
    return responseObject.json();
})
.then((actualdata)=>{
    console.log(actualdata);
    women(actualdata)
})
.catch((error)=>{
    console.log(error);
})

function women(data){
    data.forEach(element => {
        let box = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute('src',element.avatar);
        let description = document.createElement('p');
        description.innerText = element.descriptions;
        let price = document.createElement('p');
        price.textContent = 'INR'+"-" + element.price;
        let button = document.createElement('button');
        button.innerText = '❤'
        button.setAttribute('id','button')
        button.addEventListener('click',()=>{
            let favourite = JSON.parse(localStorage.getItem('favourite'))||[]
            favourite.push(element)
            localStorage.setItem('favourite',JSON.stringify(favourite))
        })
        let button1 = document.createElement('button');
        button1.innerText = '🛒'
        button1.setAttribute('id','button')
        button1.addEventListener('click',()=>{
            let cart = JSON.parse(localStorage.getItem('cart'))||[]
            cart.push(element)
            localStorage.setItem('cart',JSON.stringify(cart))
        })

        box.append(img,description,price,button,button1)
        container.append(box);
        box.addEventListener('click',()=>{
            console.log(element.price)
        })
    });
}