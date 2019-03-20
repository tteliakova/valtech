$(document).ready(function () {
    let scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();

        if (scrollTop >= 100) {
            $('.stuckMenu').addClass('isStuck');
        } else {
            $('.stuckMenu').removeClass('isStuck');
        }

    });

});

$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});