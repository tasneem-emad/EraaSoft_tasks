const hero__banner  =document.querySelector('.hero__banner')
const container__images  =document.querySelectorAll('.container__images img');
container__images.forEach(image => {
    image.addEventListener('click', function(e) {
        const imgSrc = e.target.getAttribute('src');
        hero__banner.style.backgroundImage = `url(${imgSrc})`;
    });
}); 


