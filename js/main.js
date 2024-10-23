
//this is faster that event load
$(document).ready(function(){
  //start global variables
  let eventDate = '25/10/2024';
  // end global variables
  $('#openSideBtn').click(function(){
      if($('#sidebar').css('left') == '0px') {
        $('#sidebar').animate({left: `-${$('#sidebar').innerWidth()}`}, 1000);
        $('#openSideBtn').animate({marginLeft: 0}, 1000);

      } else {
        $('#sidebar').animate({left: 0}, 1000);
        $('#openSideBtn').animate({marginLeft: `${$('#sidebar').innerWidth() + 10}`}, 1000);

      }
  })

  $('#closeBtn').click(function(){
    $('#sidebar').animate({left: `-${$('#sidebar').innerWidth()}`}, 1000);
    $('#openSideBtn').animate({marginLeft: 0}, 1000);
  })

  // slider down section
  $('#sliderDown .section .title').click(function(){
    // if()
    // $('.paragraph').addClass('d-none')
    if($(this).siblings('.paragraph').hasClass('d-none')) {
      $('.paragraph').addClass('d-none');
      $(this).siblings('.paragraph').addClass('d-block')
      $(this).siblings('.paragraph').removeClass('d-none')
    } else {
      $('.paragraph').addClass('d-none');
      $(this).siblings('.paragraph').addClass('d-none');
      $(this).siblings('.paragraph').removeClass('d-block')
    }

    // $(this).siblings('.paragraph').slideToggle("slow");
  })
  let limit =  parseInt($('#chars').text());

  $('#formMsg').on('input', function() {
    let str = $(this).val();
    let strlength = str.length;
    let remain = limit - strlength; 

    if (remain < 0) {
      remain = 0;
    }
    $('#chars').text(remain);
  });
  $('form').on('submit', function(event) {
    event.preventDefault();
    console.log('Form submission prevented!');
  });
  //count down function
  function counterDownEvent() {
    let ddate = eventDate.split('/');
    let eventTime = new Date(ddate[2], ddate[1] - 1, ddate[0]).getTime(); 

    let timer = setInterval(function() {
      let now = new Date().getTime(); 
      let timeRemaining = eventTime - now; 

      let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      if (timeRemaining < 0) {
        clearInterval(timer);
        days = 0;
        hours = 0
        minutes = 0
        seconds = 0;
      }
      $('.days span').text(days);
      $('.hour span').text(hours);
      $('.min span').text(minutes);
      $('.second span').text(seconds);

    }, 1000); 
  }

  counterDownEvent();
  
})



