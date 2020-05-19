$(document).ready(function () {
    var previousActiveTabIndex = 'index';
    $('.next-perv').attr('data-tab', $(".AE-page[data-tab='"+previousActiveTabIndex+"']").next().attr('data-tab'));
    $("[data-tab],.tab-switcher").on('click keydown', function (event) {
        var _parent = $(this);
        if (event.type === "click") {

            var tabClicked = $(this).attr('data-tab');
            if (tabClicked !== previousActiveTabIndex) {
                $('.next-perv').fadeOut(50);

                $(".AE-page").each(function (key, item) {
                    var is_last_item = (key == ($(".AE-page").length - 1));
                    if ($(this).attr('data-tab') === tabClicked) {
                        var _this = $(this);
                        $(".AE-page[data-tab='" + previousActiveTabIndex + "']").hide(50, function () {
                            $(_this).fadeIn(800);
                        });
                        if ($(this).is('[data-isPost]')){
                            $('.logo img').attr('src', $(this).data("logo"));
                            $('.navbar-brand .card-title').text($(_this).attr('title')+' | SiteBox');
                        }
                        document.title = $(this).find('h1').text() + ($(this).is('[data-isPost]')?' | Blog':"")+' | SiteBox';
                        previousActiveTabIndex = $(this).attr('data-tab');

                        animateCSS('body', 'fadeIn', function () {
                            history.pushState({}, null, '#' + previousActiveTabIndex);
                            $('.next-perv').fadeIn(500);
                            if (is_last_item) {
                                $('.next-perv')
                                    .attr('data-tab', $($(".AE-page")[key - 1]).attr('data-tab'))
                                    .html("<i class=\"fas fa-arrow-left\">");
                            } else {
                                $('.next-perv')
                                    .html("<i class=\"fas fa-arrow-right\">");
                            }
                        });
                        $('.next-perv').attr('data-tab', $($(".AE-page")[key + 1]).attr('data-tab'));

                        if ($(this).data("background")) {
                            $('.AE-wrapper').css('background', 'url(' + $(this).data("background") + ') no-repeat bottom right');
                        }
                        if ($(this).data("logo")) {
                            $('.logo img').attr('src', $(this).data("logo"));
                        }
                        // return;
                    }
                });
            }
        }

    });








    $('#navbarMenu').on('hide.bs.collapse', function () {
        $(".AE-page[data-tab='" + previousActiveTabIndex + "']").show();

    });
    $('#navbarMenu').on('show.bs.collapse', function () {
        $(".AE-page[data-tab='" + previousActiveTabIndex + "']").hide();
    })
});


