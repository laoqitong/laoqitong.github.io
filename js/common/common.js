define(['jquery'], function ($) {

    // 左侧导航下拉列表
    $('.navs a').on('click', function () {
        $(this).next().slideToggle();
    });


    // 退出功能
    $('#loginout').on('click', function () {
        $.post('/v6/logout', function (data) {
            if (data.code == 200) {
                location.href = '/html/home/login.html';
            }
        })
    })
})
