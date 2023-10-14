const image__container = document.querySelector('.image__container img');
const image__list =document.querySelectorAll('.image__list img');

image__list.forEach(image => {
    image.addEventListener('click', function(e) {
        const imgSrc = e.target.getAttribute('src');
        image__container.setAttribute('src', imgSrc);
        console.log(imgSrc);
    });
});
