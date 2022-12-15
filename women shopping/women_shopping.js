let container = document.getElementById('women_shopping_container')

let promise = fetch('https://6399dcd016b0fdad774c0884.mockapi.io/products?page=1&limit=10')
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

        box.append(img,description,price)
        container.append(box);
        box.addEventListener('click',()=>{
            console.log(element.price)
        })
    });
}