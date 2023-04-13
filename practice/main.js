
import { createCard } from "./app.js";


fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => render(data))

  .catch(error => console.error(error));

  function render(data) {
    data.map((product) =>{
        document.getElementById('root').innerHTML += createCard({...product});
    });
  }