var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

var swiper = new Swiper(".mySwiper_1", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
});
var swiper = new Swiper(".mySwiper_2", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});
var swiper = new Swiper(".mySwiper_3", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".mySwiper_6", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".mySwiper_7", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});

var swiper = new Swiper(".mySwiper_4", {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper_5", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

$(document).ready(function () {
    var count = 0;
    var countes = count;
    $(".click").click(function () {
        $(this).siblings(".minus").addClass("active");
        $(this).siblings(".input_hide").addClass("active");
        $(this).addClass("active_1");
        $(this).siblings(".input_hide").val(count);
        $(this).siblings(".input_hide").val(countes++);
    });
    $(".minus").click(function () {
        $(this).siblings(".input_hide").removeClass("active");
        $(this).removeClass("active");
        $(this).siblings(".click").removeClass("active_1");
    });

    $(".add_cart").click(function () {
        $(this).siblings(".add_product").addClass("addShow_product")
        $(this).addClass("addHide_product")
    });

    $(".product_main").click(function () {
        $(this).children(".product_main_1").toggleClass("product_main_2");
        $(this).children(".product_1").toggleClass("product_main_3");
        $(this).children(".product_main_child").children(".product_quality").children("img").toggleClass("product_main_4");
    });

    $(".slot_block").click(function () {
        $(this).parent(".delivery_schedule_btn").siblings(".slot").slideToggle("slot_1");
        $(this).siblings("button").css({ "backgroundColor": "#ECECEC", "color": "#848484" })
        $(this).css({ "backgroundColor": "#7CB118", "color": "#FFFFFF" })
    });
    $(".slot_none").click(function () {
        $(this).parent(".delivery_schedule_btn").siblings(".slot").slideUp("slot_1");
        $(this).siblings("button").css({ "backgroundColor": "#ECECEC", "color": "#848484" })
        $(this).css({ "backgroundColor": "#7CB118", "color": "#FFFFFF" })
    });

    $("#side_bar_block").click(function () {
        $("#side_bar_time").addClass("side_bar_id_block")
        $(".side_bar_back").addClass("side_bar_id_block")
        $("body").addClass("overflow_hide")
    });

    $("#payment_methood").click(function () {
        $("#side_bar_pay").addClass("side_bar_id_block")
        $(".side_bar_back").addClass("side_bar_id_block")
        $("body").addClass("overflow_hide")
    });

    $("#side_bar_promo_none").click(function () {
        $("#side_bar_promo").addClass("side_bar_id_block")
        $(".side_bar_back").addClass("side_bar_id_block")
        $("body").addClass("overflow_hide")
    });

    $(".cros").click(function () {
        $("#side_bar_time").removeClass("side_bar_id_block")
        $(".side_bar_back").removeClass("side_bar_id_block")
        $("body").removeClass("overflow_hide")
        $("#side_bar_date").removeClass("side_bar_id_block")
        $("#side_bar_pay").removeClass("side_bar_id_block")
        $("#side_bar_promo").removeClass("side_bar_id_block")
        $("#side_bar_id").removeClass("side_bar_id_block")
        $("#side_bar_id_pl").removeClass("side_bar_id_block");
    });

    $(".changes_sidebar>li").click(function () {
        $(".changes_sidebar>li>a").removeClass("changes_sidebar_li");
        $(this).children("li>a").addClass("changes_sidebar_li");
    });

    $(".overflow_auto>.overflow_auto_1>button").click(function () {
        $("button").removeClass("changes_sidebar_li");
        $(this).addClass("changes_sidebar_li");
    });

    $("#side_bar_pay>div>.overflow_auto>.overflow_auto_1>div>button").click(function () {
        $("#side_bar_pay>div>.overflow_auto>.overflow_auto_1>div>button").removeClass("btn_setting_side");
        $(".btn_set_12>button").removeClass("btn_set_098");
        $(this).addClass("btn_setting_side");
    });

    $(".btn_set>button").click(function () {
        $(".payment_card").removeClass("payment_card_1");
    });

    $(".visa_btn").click(function () {
        $(".payment_card").addClass("payment_card_1");
    });

    $('.special_card_main').click(function () {
        $('.span_main').removeClass('bg-[#7CB118] border-[#7CB118] border-solid border-[1px] width_setting block rounded-full width_setting').addClass('fa fa-circle-o');
        $(this).children(".radio_btn").children(".span_main").removeClass('fa-circle-o').addClass('bg-[#7CB118] border-[#7CB118] border-solid border-[1px] width_setting block rounded-full');
        // $(this).prev('input.radio').prop('checked', true);
    });

    $(".login_sign_up").click(function () {
        $(".login_sign_up").removeClass("login_sign_up_1")
        // $(".login_sign_up:nth-child(2)").addClass("login_sign_up_1")
        // $(".login_sign_up").attr("disabled", true)
        // $(this).attr("disabled", false)
        $(this).addClass("login_sign_up_1")
    });

    $(".login_block").click(function () {
        $(".signup_block").addClass("signup_none")
        $(".signup_none_1").removeClass("signup_none")
    });
    $(".sign_block").click(function () {
        $(".signup_block").removeClass("signup_none")
        $(".signup_none_1").addClass("signup_none")
    });

    $(".ongoing_heading").click(function () {
        $(".ongoing_heading").removeClass("ongoing_heading_1")
        $(this).addClass("ongoing_heading_1")
    });
    // $(".History").click(function () {
    //     $(".product_1_height_none").addClass("signup_none")
    //     $(".signup_none_1").removeClass("signup_none")
    // });
    // $(".History_1").click(function () {
    //     $(".product_1_height_none").removeClass("signup_none")
    //     $(".signup_none").removeClass("signup_none")
    // });

    $(".History").click(function () {
        $(".product_1_height_none").addClass("signup_none")
        $(".signup_none_1").removeClass("signup_none")
    });
    $(".History_1").click(function () {
        $(".product_1_height_none").removeClass("signup_none")
        $(".signup_none_1").addClass("signup_none")
    });

    $(".product_1_height").click(function () {
        $(this).children(".product_main_1").toggleClass("product_main_2")
        $(this).toggleClass("product_main_6")
    });

    $(".summary_heading_input_box_block").click(function () {
        $(this).children(".item_2_main").slideToggle();
        $(this).children("img").toggleClass("rotate_img");
    });

    $(".General_btn>button").click(function () {
        $(".General_btn>button").removeClass("General_btn_1");
        $(this).addClass("General_btn_1");
    });

    $("#side_bar_id_block").click(function () {
        $(".side_bar_back").addClass("side_bar_id_block")
        $("#side_bar_id").addClass("side_bar_id_block");
        $("body").addClass("overflow_hide")
    });

    $(".language_btn>button").click(function () {
        $(".language_btn>button").removeClass("language_btn_button");
        $(this).addClass("language_btn_button");
    });
    $("html[dir='rtl']").attr("dir", "");
    $(".arabic").bind('click', function (event) {
        if ($("html").attr("dir") !== "rtl") {
            $("html").attr("dir", "rtl");
            // $(this).children("head").children("#direction_link").remove()
        }
    });
    $(".english").bind('click', function (event) {
        if ($("html").attr("dir") === "rtl") {
            $("html").removeAttr("dir", "rtl");
            $("html").children("head").children("#direction_link").remove()
        }
    });

    // $('.english').click(function (e) {
    //     // in case it's an element with a default action:
    //     e.preventDefault();
    //     $("html").children("head").children("#direction_link").last().remove();
    //     // n--;
    // });

    $(".arabic").click(function () {
        $("html").children("head").append("<link rel='stylesheet' id='direction_link' class='hidden' href='assets/css/direction_change.css'>")
        $("html").children("head").append("<link rel='stylesheet' id='direction_link' class='hidden' href='../assets/css/direction_change.css'>")
    });

    $("#side_bar_block_1").click(function () {
        $("#side_bar_date").addClass("side_bar_id_block");
        $(".side_bar_back").addClass("side_bar_id_block");
        $('body').addClass("overflow_hide");
    });
    $("#side_bar_id_block_1").click(function () {
        $("#side_bar_id_pl").addClass("side_bar_id_block");
        $(".side_bar_back").addClass("side_bar_id_block");
        $('body').addClass("overflow_hide");
    });
    $("#hame_buger").click(function () {
        $("#side_bar_id_menu").addClass("side_bar_id_block");
        $(".side_bar_back").addClass("side_bar_id_block");
        $('body').addClass("overflow_hide");
    });

    $(document).click(function (event) {
        var div = $("#side_bar_id,#side_bar_block_1,.language_btn_main,#hame_buger,#side_bar_id_block_1,#side_bar_promo_none,#payment_methood,#side_bar_block,.payment_card,.special_card_main,.overflow_auto,.side-bar-heading,.changes_sidebar,.side_bar_btn,#side_bar_id_block");
        if (!div.is(event.target) && div.has(event.target).length === 0) {
            $('#side_bar_id').removeClass("side_bar_id_block");
            $('#side_bar_date').removeClass("side_bar_id_block");
            $('#side_bar_promo').removeClass("side_bar_id_block");
            $('#side_bar_pay').removeClass("side_bar_id_block");
            $('#side_bar_time').removeClass("side_bar_id_block");
            $('.side_bar_back').removeClass("side_bar_id_block");
            $('#side_bar_id_pl').removeClass("side_bar_id_block");
            $("#side_bar_id_menu").removeClass("side_bar_id_block");
            $('body').removeClass("overflow_hide");
        }
    });

    $(".search_icon_black").click(function () {
        $(this).parent(".search-icon").parent(".option_setting_px").children(".none_input").toggleClass("block_input")
    });

    // if (window.width() <= 425) {
    //     alert("size is less than 900");
    //     var sc = document.createElement('script');
    //     sc.src = 'https://cdn.tailwindcss.com';
    //     sc.type = 'text/javascript';
    //     if (typeof sc['async'] !== 'undefined') {
    //         sc.async = true;
    //     }
    //     document.getElementsByTagName('head')[0].appendChild(sc);
    // }

    const progress = document.querySelector('.progress');

    progress.addEventListener('input', function () {
        const value = this.value;
        this.style.background = `#D7FF96`
    })
});