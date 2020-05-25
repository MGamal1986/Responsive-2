$(function(){
    // hover on Pages link to show drop down menu
$('li[data-menu=".submenu"]').hover(function(){
    $($(this).data('menu')).css({
        opacity : 1,
        visibility : "visible",
        top : "90px"
    })
},function(){
    $($(this).data('menu')).css({
        opacity : 0,
        visibility : "hidden",
        top : "170px"
    });
});
// change color of navbar on scroll
$(window).on('scroll',function(){
    if($(this).scrollTop() >= 50){
        $('.navbar-default').css({
            backgroundColor: "rgba(0,0,0,0.6)"
        })
    }else(
        $('.navbar-default').css({
            backgroundColor: "#000"
        })
    )
})
// add certain class to page link when window size is less than 767px
let pos = 1;
$('li[data-menu=".submenu"]').click(function(){
    if(window.innerWidth <= 767){
        if(pos == 1){
            $('.navbar-default .navbar-nav li.drop-items').slideDown(500);
            pos = 0;
        }else{
            $('.navbar-default .navbar-nav li.drop-items').slideUp(500);
            pos = 1;
        }
    }
});

// animation for header section
setInterval(function(){
    $('header .one .head-address').toggleClass('animated-head');
    $('header .one .content').toggleClass('animated-content');
    $('header .one .download').toggleClass('animated-download');
    $('header .one .trial').toggleClass('animated-trial');
    $('header .two .image').toggleClass('animated-image');
},3000)





// add selected class on clicked span in dots div
$('header  .dots span').on('click',function(){
    $(this).addClass('selected').siblings('span').removeClass('selected');
    if($(this).data('show') == 'first'){
        $('header .one .head-address').html('<span>Lesitn</span>To<br> new music');
        $('header .one .head-address').addClass('animated-head');
        $('header .one .content').addClass('animated-content');
        $('header .one .download').addClass('animated-download');
        $('header .one .trial').addClass('animated-trial');
        $('header .two .image').addClass('animated-image');
    }else if($(this).data('show') == 'second'){
        $('header .one .head-address').html('<span>New</span>PlayList<br> music');
        $('header .one .head-address').addClass('animated-head');
        $('header .one .content').addClass('animated-content');
        $('header .one .download').addClass('animated-download');
        $('header .one .trial').addClass('animated-trial');
        $('header .two .image').addClass('animated-image');
    }
    })

    // hover color on footer icons
    $('.footer .solomusic i').hover(function(){
        $(this).css({
            color: $(this).data('color')
        })
    },function(){
        $(this).css({
            color:'#979797'
        })
    })


});
