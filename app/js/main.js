$( document ).ready(function() {
    console.log( "ready!" );
    // Get the modal
    let modal = document.getElementById('myModal');

    // Get the button that opens the modal
    let btn = document.getElementById("callbackBtn");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
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

