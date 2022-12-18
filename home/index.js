let search_bar = document.getElementById('search_bar');

let data = search_bar.value;

let promise = fetch(`https://6399dcd016b0fdad774c0884.mockapi.io/products=${data}`)
