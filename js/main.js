$(function () {
    let currentSlide = 0;
    let sliderLine = $('.slider-line');
    let sliderItem = $('.slide');
    let currentPug;
    function rollSlide() {
        $(sliderLine).css({
            'transform': 'translateX(' + (-currentSlide * 100) + '%)'
        });
    }
    $('.prev-slide').click(function (e) {
        currentSlide--
        if (currentSlide < 0) {
            currentSlide = sliderItem.length - 1
        }
        rollSlide()
        e.preventDefault();
    });
    $('.next-slide').click(function (e) {
        currentSlide++
        if (currentSlide >= sliderItem.length) {
            currentSlide = 0
        }
        rollSlide()
        e.preventDefault();
    });
    for (let i = 0; i < sliderItem.length; i++) {
        $('.slider__pugination').prepend('<div class="pag_el"></div>')
    }
    $('.pag_el').click(function (e) { 
        $('.pag_el').removeClass('active')
        $(this).addClass('active');
        const node = e.target.parentNode;
         currentPug =  ([...node.children].indexOf(e.target))
        currentSlide = currentPug;
        rollSlide()
        e.preventDefault();
    });
})
// let currentSlide = 0;
// const sliderLine = document.querySelector('.slider-line');
// const sliderItem = document.querySelectorAll('.slide');
// let sliderPag = document.querySelector('.slider__pugination');

// function rollSlide() {
//     sliderLine.style.transform = 'translateX(' + (-currentSlide * 100) + '%)'
// }

// document.querySelector('.prev-slide').addEventListener('click', function () {
//     currentSlide--;
//     if (currentSlide < 0) {
//         currentSlide = sliderItem.length - 1;
//     }

//     rollSlide();
// })
// document.querySelector('.next-slide').addEventListener('click', function () {
//     currentSlide++;
//     if (currentSlide >= sliderItem.length) {
//         currentSlide = 0
//     }
//     rollSlide();
// })
// sliderItem.forEach(() => {
//     let slderPagItem = document.createElement('div');
//     slderPagItem.className = 'pag_el';
//     sliderPag.prepend(slderPagItem);
// });