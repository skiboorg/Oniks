$( document ).ready(function() {
    console.log( "ready!" );
    let modal = document.getElementById('myModal');
    let btn = document.getElementById("callbackBtn");
    let span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    $('.carousel').slick({
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:'170px',
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        centerMode: false,





    });
    $('.carousel1').slick({
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:'50px',
        prevArrow: $('.prev1'),
        nextArrow: $('.next1'),
        centerMode: false,


    });
});

