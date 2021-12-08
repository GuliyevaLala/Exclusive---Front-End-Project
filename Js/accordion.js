
$(document).ready(function() {
    // $('.headTitle').click(function() {
    //   if ($(this).hasClass('.symbol')) {
    //     $(this).removeClass('.symbol').next('.text').slideUp();
    //   } else {
    //     $('.headTitle').removeClass('.symbol');
    //     $('.text').slideUp();
    //     $(this).addClass('.symbol').next('.text').slideDown();
    //   }
    // });

    $(".accordion1 .accHeadd").click(function(){
      let article = $(this).children().last()

      let head =  $(this).children().first()
      
      $(".accordion1 .head").not(head).removeClass("active-head1")


      $(".accordion1 .text").not(article).slideUp("inactive")

      $(article).slideToggle("inactive")

      $(head).toggleClass("active-head1")
    })

    $(".accordion2 .accHeadd").click(function(){
      let article = $(this).children().last()

      let head =  $(this).children().first()
      
      $(".accordion2 .head").not(head).removeClass("active-head1")


      $(".accordion2 .text").not(article).slideUp("inactive")

      $(article).slideToggle("inactive")

      $(head).toggleClass("active-head1")
    })

    $(".accordion3 .accHeadd").click(function(){
      let article = $(this).children().last()

      let head =  $(this).children().first()
      
      $(".accordion3 .head").not(head).removeClass("active-head1")


      $(".accordion3 .text").not(article).slideUp("inactive")

      $(article).slideToggle("inactive")

      $(head).toggleClass("active-head1")
    })

    $(".accordion4 .accHeadd").click(function(){
      let article = $(this).children().last()

      let head =  $(this).children().first()
      
      $(".accordion4 .head").not(head).removeClass("active-head1")


      $(".accordion4 .text").not(article).slideUp("inactive")

      $(article).slideToggle("inactive")

      $(head).toggleClass("active-head1")
    })
  });