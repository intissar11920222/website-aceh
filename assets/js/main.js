$( document ).ready(function() {
    $margin_left_container = $("#container").css("margin-left");
    $padding_left_container = $("#container").css("padding-left");
    $left_container = parseInt($margin_left_container) + parseInt($padding_left_container);
    var nav = $('#navbar').outerHeight();
    var windowHeight = $(window).height();
    $marge_right = $("#slider_indic").css("width");

    
    $("#menu-navbar").css("height",windowHeight + nav );
    $("#menu-navbar").css("min-height",windowHeight + nav);
    $("#menu-navbar").css("margin-top",-nav);
    $("#welcome").css("top", -nav );
    
    $('#nousommes').css('padding-left', $left_container );
    $('#profilx').css('padding-left', $left_container );


    if(findBootstrapEnvironment() != "xs" || findBootstrapEnvironment() != "sm"  ){
     $(".slider-caption").css("right",$marge_right);
    }
    
    if(findBootstrapEnvironment() == "xs" || findBootstrapEnvironment() == "sm"  ){
        $(".slider-caption").css("right",0);
    }
  




        $('#customFile1').change(function(e){
            var fileName = e.target.files[0].name;
            $('#label_customFile1').html(fileName);
        });
        $('#customFile2').change(function(e){
            var fileName = e.target.files[0].name;
            $('#label_customFile2').html(fileName);
        });


        $('.clients_carousel .client_item').each(function () {
            var minPerSlide = 4;
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
    
            for (var i = 0; i < minPerSlide; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
    
                next.children(':first-child').clone().appendTo($(this));
            }
        });
        $('.clients_carousel5 .client_item5').each(function () {
            var minPerSlide = 3;
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
    
            for (var i = 0; i < minPerSlide; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
    
                next.children(':first-child').clone().appendTo($(this));
            }
        });

        $('#slider-clients').carousel({
            interval: 20000
        })
        $('#slider-clients1').carousel({
            interval: 20000
        })

        $('.car_sel .carousel-itemx').each(function () {
            var minPerSlide = 3;
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().appendTo($(this));
    
            for (var i = 0; i < minPerSlide; i++) {
                next = next.next();
                if (!next.length) {
                    next = $(this).siblings(':first');
                }
    
                next.children(':first-child').clone().appendTo($(this));
            }
        });

        $('#carouselExampleControls').carousel({
            interval: 20000
        })

});





$(window).on('resize', function () {
    $margin_left_container = $("#container").css("margin-left");
    $padding_left_container = $("#container").css("padding-left");
    $left_container = parseInt($margin_left_container) + parseInt($padding_left_container);
    var nav = $('#navbar').outerHeight();
    var windowHeight = $(window).height();
    
    $('#nousommes').css('padding-left', $left_container );
    $('#profilx').css('padding-left', $left_container );


    $("#menu-navbar").css("height",windowHeight + nav );
    $("#menu-navbar").css("min-height",windowHeight + nav);
    $("#menu-navbar").css("margin-top",-nav);

 if(findBootstrapEnvironment() != "xs" || findBootstrapEnvironment() != "sm"  ){
     $(".slider-caption").css("right",$marge_right);
    }
    
    if(findBootstrapEnvironment() == "xs" || findBootstrapEnvironment() == "sm"  ){
        $(".slider-caption").css("right",0);
    }

});

function findBootstrapEnvironment() {
    let envs = ['xs', 'sm', 'md', 'lg', 'xl'];

    let el = document.createElement('div');
    document.body.appendChild(el);

    let curEnv = envs.shift();

    for (let env of envs.reverse()) {
        el.classList.add(`d-${env}-none`);

        if (window.getComputedStyle(el).display === 'none') {
            curEnv = env;
            break;
        }
    }

    document.body.removeChild(el);
    return curEnv;
}

function close_depot(){


    $('#menu-navbar').collapse('hide');

}


$(window).scroll(function () {

    if ($(document).scrollTop() > 0) {

     //   $("#navbar").css("background-color", "white");
        $("#navbar").addClass("navshadow") ;
        
    } else {

      //  $("#navbar").css("background-color", "transparent");
        $("#navbar").removeClass("navshadow") ;
    }
});

function redirect_me($url){

if($url == "rec"){
    window.location.href = "formation_reconversion_pro.html";
}
if($url == "com"){
    window.location.href = "formation_commercial.html";  
}
if($url == "pos"){
    window.location.href = "formation_tech_poseur.html"; 
}
}