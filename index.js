alert ("Welcome!")
  $(document).ready(function() {
    $("#scroll1").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".png").offset().top
        },
        1000 
      );
    });
  });
  
  $(document).ready(function() {
    $("#scroll2").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".lastsect").offset().top
        },
        1000
      );
    });
  });
  
  $(document).ready(function() {
    $("#scroll3").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".mywork").offset().top
        },
        1000 
      );
    });
  });

  $(document).ready(function() {
    $("#scroll4").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".footer").offset().top
        },
        1000 
      );
    });
  });

  $(document).ready(function() {
    $(".about-me-button").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".png").offset().top
        },
        1000 
      );
    });
  });

  $(document).ready(function() {
    $("#footer1").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".png").offset().top
        },
        1000 
      );
    });
  });

  $(document).ready(function() {
    $("#footer2").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".lastsect").offset().top
        },
        1000 
      );
    });
  });

  $(document).ready(function() {
    $("#footer3").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(".mywork").offset().top
        },
        1000 
      );
    });
  });
