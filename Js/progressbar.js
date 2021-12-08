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

    })})
    // let percentages = document.querySelectorAll("main #progress-bar .percentage");
    
    
    // for(let percentage of percentages){
    //     let count = percentage.innerText
    //     let temp = 0
    //     function counting(){
    //         if(temp<count){
    //             setTimeout(function(){
    //                 percentage.innerText = temp;
    //                 temp+=1;
    //                 counting();
    //             },50)
    //         }
    //         else{
    //             setTimeout(function(){
    //                 percentage.innerText = count
    //             },1000)
    //         }
    //     }
    //     counting()
    // }
    let percentages = document.querySelectorAll(".progress-bar-1 .sides .percentage");
    
    
    for(let percentage of percentages){
        let count = percentage.innerText
        let temp = 0
        function counting(){
            if(temp<count){
                setTimeout(function(){
                    percentage.innerText = temp;
                    temp+=1;
                    counting();
                },50)
            }
            else{
                setTimeout(function(){
                    percentage.innerText = count
                },1000)
            }
        }
        counting()
    }
    