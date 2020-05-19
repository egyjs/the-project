
setTimeout(function () {
    // This hides the address bar:
    window.scrollTo(0, 32);
}, 1);
$(document).ready(function(){
    // $(".AE-page").niceScroll();

    $('.fa-heart').click(function () {
        $(this).toggleClass("text-danger");
    });

    $('.fa-share-alt').click(function () {

    });

});



function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated','fast', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
$('.navbar-nav>li>a,.next-perv,a,button').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
