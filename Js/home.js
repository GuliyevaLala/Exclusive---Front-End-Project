$(document).ready(function () {
    




    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    // sticky header
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 100){
      $("nav").addClass("sticky");
    }else{
      $("nav").removeClass("sticky");
    }
  },)
     // sticky header

    //  climbup
    if ($(window).scrollTop() > 500) {
        $('.climbup').show();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.climbup').show();
        } else {
            $('.climbup').hide();
        }
    });

    $('.climbup').click(function () {
        $('html').animate({ scrollTop: 0 }, 'slow');
    });

    $('.climbup').hover(function () {
        $('.upper').animate({ "top": "-38%" }, 'fast');
        $('.lower').animate({ "top": "31%" }, 'fast');
    }, function () {
        $('.upper').animate({ "top": "31%" }, 'fast');
        $('.lower').animate({ "top": "100%" }, 'fast');
    });
})       // climbup

  
    }
)
  
let list = document.querySelectorAll("#shop .categories ul li a");
let types = document.querySelectorAll("#shop .types .type");


    for (let element of list) {
        element.onclick = function () {
            document.querySelector(".activeCategory").classList.remove("activeCategory");
            this.classList.add("activeCategory");
            let data_id = this.getAttribute("data-id");
            for (let type of types) {
                if (data_id == type.getAttribute("data-id")) {
                    document.querySelector(".activetype").classList.remove("activetype");
                    type.classList.add("activetype");
                }
            }
        }
    }

    $('.flower').hover(function () {
        let text = $(this).children().last();
        text.children().eq(2).stop(true, true).animate({ "margin-right": "-400px" });
        text.children().eq(1).stop(true, true).animate({ "margin-left": "107" });
    }, function () {
        let text = $(this).children().last()
        text.children().eq(2).stop(true, true).animate({ "margin-right": "0px" });
        text.children().eq(1).stop(true, true).animate({ "margin-left": "-400px" });


    });
   

// pagesssssssssssssssssssssssssssssssssssssss


