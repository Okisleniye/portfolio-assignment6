$(document).ready(function () {
  console.log("jQuery is ready!");

  $("h1").css("color", "#4a90d9");

  $("#changeHeadline").click(function () {
    $("#headline").text("Fariddin | AITU Student");
  });

  $("#changeStyle").click(function () {
    $(".intro").html("<b>I am learning web development with jQuery!</b>");
    $(".intro").css("color", "green");
  });

  $("#darkTheme").click(function () {
    $("body").css({ "background-color": "#222", "color": "#fff" });
  });

  $("#lightTheme").click(function () {
    $("body").css({ "background-color": "#fff", "color": "#000" });
  });

  $("#hideBtn").click(function () {
    $("#status").hide();
    $("#funFacts").hide();
  });

  $("#showBtn").click(function () {
    $("#status").show();
    $("#funFacts").show();
  });

  $("#toggleBtn").click(function () {
    $("#status").toggle();
    $("#funFacts").toggle();
  });

  $("#fadeInBtn").click(function () {
    $(".gallery-img").fadeIn();
  });

  $("#fadeOutBtn").click(function () {
    $(".gallery-img").fadeOut();
  });

  $("#fadeToggleBtn").click(function () {
    $(".gallery-img").fadeToggle();
  });

  $(".panel-title").click(function () {
    $(this).next(".panel").slideToggle();
  });

  $("#slideDownBtn").click(function () {
    $(".panel").slideDown();
  });

  $("#slideUpBtn").click(function () {
    $(".panel").slideUp();
  });

  $("#addSkill").click(function () {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      $("#skillMessage").text("Please enter a skill!");
      return;
    }
    $("#skillList").append("<li>" + skill + "</li>");
    $("#skillMessage").text("");
    $("#skillInput").val("");
  });

  $("#prependSkill").click(function () {
    var skill = $("#skillInput").val().trim();
    if (skill === "") {
      $("#skillMessage").text("Please enter a skill!");
      return;
    }
    $("#skillList").prepend("<li>" + skill + "</li>");
    $("#skillMessage").text("");
    $("#skillInput").val("");
  });

  $("#removeSkill").click(function () {
    $("#skillList li:last").remove();
    $("#skillMessage").text("");
  });

  $("#changeLink").click(function () {
    $("#myLink").attr("href", "https://www.linkedin.com");
    $("#myLink").text("LinkedIn");
  });

  $("#nameInput").keyup(function () {
    $("#nameOutput").text($(this).val());
  });

  $("#emailInput").keyup(function () {
    $("#emailOutput").text($(this).val());
  });

  var animated = false;

  $("#animateSkills").click(function () {
    if (animated === false) {
      $(".bar").each(function () {
        var level = $(this).data("level");
        $(this).animate({ width: level + "%" }, 1500);
      });
      animated = true;
    } else {
      $(".bar").animate({ width: "0%" }, 1500);
      animated = false;
    }
  });
});
