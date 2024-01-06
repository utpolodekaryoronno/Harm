$("document").ready(function () {

    // counter up
	$('.counter').counterUp({
    delay: 10,
    time: 3000
  });


  
  // HUMBERGAR
  $(".mobile__bar").click(function () {
    $(".mobile_menu").addClass("active");
    $("body").addClass("overflowCT");
  });

  // HUMBERGAR
  $(".close_icon").click(function () {
    $(".mobile_menu").removeClass("active");
    $("body").removeClass("overflowCT");
  });



  // Type JS

  typing(0, $('.typewriter-text').data('text'));

  function typing(index, text) {

    var textIndex = 1;

    var tmp = setInterval(function () {
      if (textIndex < text[index].length + 1) {
        $('.typewriter-text').text(text[index].substr(0, textIndex));
        textIndex++;
      } else {
        setTimeout(function () { deleting(index, text) }, 2000);
        clearInterval(tmp);
      }

    }, 150);

  }

  function deleting(index, text) {

    var textIndex = text[index].length;

    var tmp = setInterval(function () {

      if (textIndex + 1 > 0) {
        $('.typewriter-text').text(text[index].substr(0, textIndex));
        textIndex--;
      } else {
        index++;
        if (index == text.length) { index = 0; }
        typing(index, text);
        clearInterval(tmp);
      }

    }, 150)

  }
});


// Aos Animation
AOS.init({
  delay: 100,
  duration: 1000
});

// Chat Box
function doBounce(element, times, distance, speed) {
  for (var i = 0; i < times; i++) {
    element.animate({ marginTop: '-=' + distance }, speed)
      .animate({ marginTop: '+=' + distance }, speed);
  }
}

function showMessage(id) {
  var message = $('#message-' + id);
  message.css('display', 'flex');
  doBounce(message, 1, '4px', 150);
}

function start() {
  var messages = $('.message');
  var timeOut = 1000;

  messages.each(function (index) {
    index += 1;
    if (index === messages.length) window.setTimeout(function () { writer.remove(); }, timeOut);
    window.setTimeout(function () { showMessage(index); }, timeOut);
    timeOut += 1000;
  });
}

$(document).ready(function () {
  start();



});





// Counter

// $('.stat-number').each(function () {
//   var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
//   $(this).prop('Counter', 0).animate({
//      Counter: $(this).text()
//   }, {
//      duration: 5000,
//      step: function (func) {
//         $(this).text(parseFloat(func).toFixed(size));
//      }
//   });
// });