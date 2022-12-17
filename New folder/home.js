var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let form = document.getElementsByClassName('modal-content animate');

let data = JSON.parse(localStorage.getItem('data'))||[];


function form_data(data){
    data.forEach(element => {
        let name = document.createElement('p');
        name.innerText = element.name
        let password = document.createElement('p');
        password.textContent = element.password;
        let email = document.createElement('p');
        email.innerText = form.email;
        
    });
}