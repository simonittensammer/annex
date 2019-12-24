/*
Smooth scrolling
*/
$(document).ready(function () {
    var headerHeight = $('.navBar').outerHeight();

    $('.scrollButton').click(function (e) {
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight + 20
        }, 800);

        e.preventDefault();
    });
});

/*
Parallax Effect
*/

// $(window).scroll(function(){
//     var wScroll = $(this).scrollTop();
//
//     $('.scrollButton').css({
//         'transform' : 'translate(-50%, ' + wScroll * -1 + '%)'
//     });
// });

/*
invisible Navigation-Bar
*/

$(document).ready(function () {

    $(window).scroll(function () {
        if (window.innerWidth > 767) {
            if ($(window).scrollTop() > 50) {
                document.getElementById("navBar").style.background = "rgba(255, 255, 255, 1)";
                document.getElementById("navBar").style.height = "11vh";
                document.getElementById("navBarUl").style.paddingTop = "0";
                document.getElementById("navBar").style.boxShadow = "0 .5vh 5vh 0 rgba(51, 51, 51, .2)";
            } else {
                document.getElementById("navBar").style.background = "rgba(255, 255, 255, 0)";
                document.getElementById("navBar").style.height = "13vh";
                document.getElementById("navBarUl").style.paddingTop = "1vh";
                document.getElementById("navBar").style.boxShadow = "none";
            }
        }

    });

});