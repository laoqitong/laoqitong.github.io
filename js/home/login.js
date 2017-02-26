define(['jquery'], function ($) {
    /*
    * 1.先监听form表单的提交事件，
    * 2.事件回调中return false阻止默认的提交
    * 3.事件回调中通过ajax的方式提交表单数据
    * 4.如果返回的结果中的code为200，证明登陆成功，跳转到首页
    * */
    $('#form-login').on('submit', function () {

        $.ajax({
            url:'/v6/login',
            type:'post',
            data:$(this).serialize(),
            success: function () {
                window.location.href = '/';
            },
            error: function () {
                console.log('失败咯');
            }
        })

        return false;
    })

})