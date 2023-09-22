const toggle = document.querySelector('#check');
const firstPrice = document.querySelector('.first');
const secondPrice = document.querySelector('.second');
const thirdPrice = document.querySelector('.third');
const annualPrice = document.querySelectorAll('.hidden');

toggle.addEventListener('click', getPrice);

function getPrice () {
    annualPrice.forEach((price) =>  {
        if (toggle.checked === true) {
            price.classList.remove('hidden');
            firstPrice.classList.add("hidden");
			secondPrice.classList.add("hidden");
			thirdPrice.classList.add("hidden");
        } else {
            price.classList.add("hidden");
            firstPrice.classList.remove("hidden");
			secondPrice.classList.remove("hidden");
			thirdPrice.classList.remove("hidden");
        }
    })
}