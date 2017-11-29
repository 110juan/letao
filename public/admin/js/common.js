$(function(){
    //进度条功能
// 关闭进度环
NProgress.configure({
    showSpinner:false
});
// NProgress.start();
//ajax请求开始发送时触发
$(document).ajaxStart(function(){
    NProgress.start();
});
//ajax请求发送结束时触发
$(document).ajaxStop(function(){
   setTimeout(function(){
    NProgress.done();
   },500);
});
});
// 二级菜单显示隐藏功能
$(".child").prev().on("click",function(){
    $(this).next().slideToggle();
})
//侧边栏隐藏
$(".icon-menue").on("click",function(){
    $(".lt_aside").toggleClass("now");
    $(".le_main").toggleClass("now");
});
//点击退出显示模态框
$(".icon-logout").on("click",function(){
    $(".modal").modal('show');
})
// 点击模态框退出按钮退出页面
$(".btn_logout").on("click",function(){
    $.ajax({
        type:"get",
        url:"/employee/employeeLogout",
        success:function(data){
            if(data.success){
                location.href = "login.html";
            }
        }
    });
});



