/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function(){
  $("#t-collapse-1").on("hide.bs.collapse", function(){
    $("#btn-t-collapse-1").html('<i class="fa fa-angle-double-down"></i>');
  });
  $("#t-collapse-1").on("show.bs.collapse", function(){
    $("#btn-t-collapse-1").html('<i class="fa fa-angle-double-up"></i>');
  });
  $("#t-collapse-2").on("hide.bs.collapse", function(){
    $("#btn-t-collapse-2").html('<i class="fa fa-angle-double-down"></i>');
  });
  $("#t-collapse-2").on("show.bs.collapse", function(){
    $("#btn-t-collapse-2").html('<i class="fa fa-angle-double-up"></i>');
  });
  $("#t-collapse-3").on("hide.bs.collapse", function(){
    $("#btn-t-collapse-3").html('<i class="fa fa-angle-double-down"></i>');
  });
  $("#t-collapse-3").on("show.bs.collapse", function(){
    $("#btn-t-collapse-3").html('<i class="fa fa-angle-double-up"></i>');
  });
});
