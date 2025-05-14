// cart.js
const itemName = localStorage.getItem("itemName");
const itemPrice = localStorage.getItem("itemPrice");

document.querySelector('.item-name').textContent = itemName || 'Product';
document.querySelector('.item-price').textContent = itemPrice || '$XX.XX';


document.getElementById("purchaseBtn").addEventListener("click", () => {
  localStorage.setItem("itemName", "Iconic-Public Rust Script");
  localStorage.setItem("itemPrice", "$29.99");
});


const thumbs = document.querySelectorAll('.thumbs img');
const mainImg = document.querySelector('.main-img');

thumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
        mainImg.src = thumb.src;
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
    });
});
