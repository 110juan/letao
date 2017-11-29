$(function(){
    var $form = $("form");
    // 使用表单校验插件
    $form.bootstrapValidator({
        feedbackIcons: {
            //校验成功的图标
            valid: 'glyphicon glyphicon-ok',
            invalid:'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
          },
          //是定校验的字段,fields是字段的意思.里面写想要校验的字段
          fields:{
              //username对应变淡的name属性值
              username: {
                //username的规则
                validators: {
                  notEmpty: {
                    message: "用户名不能为空"
                  },
                  callback: {
                    message:"用户名不存在"
                  }
                }
        
              },
              //密码校验规则
              password:{
                  validators:{
                        //密码不能为空
                    notEmpty:{
                        message:"密码不能为空"
                    },
                    //密码长度6-12位
                    stringLength:{
                        min:6,
                        max:12,
                        message:"密码长度6-12位"
                    },
                      //密码错误的提示
                    callback:{
                        message:"密码错误"
                    }
                  }
              }
          }
    });
    //给表单注册校验成功事件
    $form.on("success.form.bv",function(e){
        //阻止浏览器默认行为
        e.preventDefault();
        //发送Ajax请求
        $.ajax({
            type:"post",
            url:"/employee/employeeLogin",
            data:$form.serialize(),
            success:function(data){
              if(data.success){
                location.href = "index.html";
              }
              if(data.error === 1000){
                  $form.data("bootstrapValidator").updateStatus("username","INVALID","callback");
              }
              if(data.error === 1001){
                $form.data("bootstrapValidator").updateStatus("password","INVALID","callback");
              }
            }
        });
    });
      //点击重置按钮,重置样式
      $("[type='reset']").on("click",function(){
        $form.data("bootstrapValidator").resetForm();
    });
});