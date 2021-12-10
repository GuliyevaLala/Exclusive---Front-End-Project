$(document).ready(function(){
    $(".instagram").owlCarousel(
        {
            items: 4,
            loop: true,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                576:{
                    items:2
                },
                768:{
                    items:3
                },
                992:{
                    items:4
                }
            }
        }
    );
  

  $(document).ready(function(){
    $(".say").owlCarousel(
        {
            items: 1,
            loop: true,
            autoplay: true
        }
    );
  });
})
    




    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
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

// function of navbar
function myFunction(x) {
    if (x.matches) { 
        $(".main").mouseenter(function () {
            $(this).children().last().css({ "display": "block" });
        })
        $(".main").mouseleave(function () {
            $(this).children().last().css({ "display": "none" });

        })

        // function of navbar arrows

        $(".rightsideoption").mouseenter(function () {
            $(".rightsideoptioninfo").not($(this).next()).hide();
            $(this).children().last().fadeIn();
        })

        $(".rightsideoption").mouseleave(function () {
            $(this).children().last().hide();

        })

        $(".leftsideoption").mouseenter(function () {
            $(".leftsideoptioninfo").not($(this).next()).hide();
            $(this).children().last().fadeIn();
        })

        $(".leftsideoption").mouseleave(function () {
            $(this).children().last().hide();

        })

    } else {
        $(".fa-window-close").click(function(){
            $(".sidebar").animate({"right":"-1000px"})
        })
        $(".fa-bars").click(function(){
            $(".sidebar").animate({"right":"0"})
        })
        $(".main").click(function (event) {
            $(".option").not($(this).children().last()).hide();
            $(this).children().last().not($(".subcontent")).css({ "display": "block" });
            if($(this)==$(".subcontent").parent().parent().parent()){
                console.log("hello")
            }
        })
        $(".subs").click(function () {
            $(".subcontent").not($(this).children().last()).hide();
            $(this).children().last().css({ "display": "block" });
        })
        $(".rightsideoption").click(function (event) {
            event.preventDefault()
            $(".rightsideoptioninfo").not($(this).next()).hide();
            $(this).children().last().fadeIn();
        })

        $(".leftsideoption").click(function (event) {
            event.preventDefault()
            $(".leftsideoptioninfo").not($(this).next()).hide();
            $(this).children().last().fadeIn();
        })
    }
}
var x = window.matchMedia("(min-width: 992px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes


