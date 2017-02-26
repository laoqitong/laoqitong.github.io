define(['jquery'], function ($) {

    // 左侧导航下拉列表
    $('.navs a').on('click', function () {
        $(this).next().slideToggle();
    });


    $.ajax({
        url: '/v6/login',
        type: 'post',
        data: {
            tc_name: 11111,
            tc_pwd: 1111,
        },
        success: function () {
            console.log('ok!');
        },
        error: function () {
            console.log('failed');
        }
    })
})
