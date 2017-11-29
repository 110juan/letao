$(function () {
   // 基于准备好的dom，初始化echarts实例
   var myChart = echarts.init(document.querySelector('.pic_left'));
   // 指定图表的配置项和数据
   var option = {
       //标题
       title:{
           text:"我是仙女我最美",
           textStyle:{
               color:"#FFB2CC"
           }
       },

       //图例组件
       legend:{
           data:["颜值","花痴程度"]
       },
       //提示框组件
       tooltip:{},
       //x轴
       xAxis:{
           data:["吴亦凡","白敬亭","鹿晗","胡歌","黄轩","吴尊","黄轩"],
           axisLabel: {
               show: true,
               textStyle: {
                   color: 'black',
                   fontSize:'12'
               }
           }
       },
       //y轴
       yAxis:{
           // y 轴刻度一般不写, 可以根据数据动态生成
       },
       //后台数据
       series:[
           {
               name:"颜值",
               type: 'bar',  // type bar 柱状图, pie 饼状图,  line折线图
               data:[100,50,20,80,75,38,85],
               barWidth: 40,
               itemStyle:{
                   normal:{
                       color:'#ffb2cc'
                   }
               }
           },
       ]
   };
   // 使用刚指定的配置项和数据显示图表。
   myChart.setOption(option);
           // 基于准备好的dom，初始化echarts实例
           var myChart1 = echarts.init(document.querySelector('.pic_right'));
        //   console.log(document.querySelector('.pic_right'));
           option1 = {
               title : {
                   text: '我是仙女我最美',
                   textStyle:{
                       color:"#FFB2CC",
                       fontSize:18
                   }
               },
               //提示框组件
               tooltip : {
                   trigger: 'item',
                   formatter: "{a} <br/>{b} : {c} ({d}%)"
               },
               //图例组件
               legend: {
                   orient: 'vertical',
                   left:0,
                   bottom:0,
                   data:["吴亦凡","白敬亭","鹿晗","胡歌","黄轩","吴尊","黄轩"]
               },
               series : [
                   {
                       name:"颜值",
                       type:"pie",
                        // style="color:#FF0000;">
                        radius : '60%',  
                        center: ['55%','55%'],  
                        data:[
                           {value:100, name:'吴亦凡'},
                           {value:80, name:'白敬亭'},
                           {value:70, name:'黄轩'},
                           {value:80, name:'吴尊'},
                           {value:80, name:'胡歌'},
                           {value:90, name:'鹿晗'},
                       ]
                   }
               ],
               color:['green','pink','yellow','palegreen','plum','peru','blue']
           };
           // 使用刚指定的配置项和数据显示图表。
           myChart1.setOption(option1);
})