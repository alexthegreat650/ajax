// Use container

const container = document.getElementById('container');
const btn = document.getElementById('unsplash');
const mediaQueryOne = window.matchMedia('(max-width: 375px)');
const mediaQueryTwo = window.matchMedia('(max-width: 768px)');
const mediaQueryThree = window.matchMedia('(max-width: 1400px)')

// When button is clicked the fetchDogImage() function runs
btn.addEventListener('click', fetchDogImage);

// Function for alling dog API and making sure images fit in the box they're in
function fetchDogImage() {
    // fetch API
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(data => {
            // If and else statements for adjusting image based on dimensions
            if (mediaQueryOne.matches) {
                container.innerHTML = `<img src="${data.message}" width="408" height="198"/>`;
            } else if (mediaQueryTwo.matches) {
                container.innerHTML = `<img src="${data.message}" width="441" height="198"/>`;
            } else if (mediaQueryThree.matches) {
                container.innerHTML = `<img src="${data.message}" width="820" height="198"/>`;
            }
        });
    };



