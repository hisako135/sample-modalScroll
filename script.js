const header    = document.getElementById('js-header');
const contents  = document.getElementById('js-contents');
const btn       = document.getElementById('js-areaModalBtn');
const modal     = document.getElementById('js-modal');


btn.addEventListener('click', function(){
    const openHeight = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    modal.classList.toggle('is-open');
    contents.classList.toggle('is-none');
});

window.addEventListener('scroll', function(){
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(scrollTop > 110){
        header.classList.add('is-sticky');
    } else {
        header.classList.remove('is-sticky');
    }
    console.log(scrollTop);
})