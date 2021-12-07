$(document).ready(function(){
    $(".left .background-growing").css("width","95%")
    $(".left .background-watering").css("width","80%")
    $(".left .background-furtilizing").css("width","55%")

    $(".right .background-growing").css("width","95%")
    $(".right .background-watering").css("width","80%")
    $(".right .background-furtilizing").css("width","55%")

    
    $(window).scroll(function(){
        let top = $(window).scrollTop()
        if(top>85){
            $(".bottom .background-growing").css("width","95%")
            $(".bottom .background-watering").css("width","80%")
            $(".bottom .background-furtilizing").css("width","55%")
        }

    }
}