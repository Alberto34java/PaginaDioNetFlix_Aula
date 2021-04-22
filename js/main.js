$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2        },
        1000:{
            items:3
        }
    }
})

function redirecionar()
{
    window.location.href = 'page.html';
}

function redirecionarOutro()
{
    window.location.href = 'index.html';
}