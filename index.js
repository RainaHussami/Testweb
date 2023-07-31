
$(document).ready(function() {
    // Smooth scroll to About Me section when clicking on "About Me" link
    $("#scroll1").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".png").offset().top
        },
        1000 // Adjust the duration of the slide animation in milliseconds (2 seconds in this case)
      );
    });
  });
  