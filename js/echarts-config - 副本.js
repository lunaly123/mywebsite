$("#nav ul li:gt(0)").click(function() {
  $("#nav ul li").removeClass("navative");
  $(this).toggleClass("navative");
  let index = $(this).index() - 1;
  // console.log($("#showWrapper li").eq(index));
  $("#showWrapper li").each(function() {
    if ($(this).hasClass("show")) {
      $(this).removeClass("show");
      $(this).velocity(
        { bottom: -386 },
        {
          duration: 1000,
          easing: [300, 20],
          complete: () => {
            $(".content li").css({ visibility: "hidden" });
          }
        }
      );
    }
  });
  if (index === 1) {
    $("#showWrapper li")
      .eq(index)
      .addClass("show");
    $("#showWrapper li")
      .eq(index)
      .css({ visibility: "visible" });
    $("#showWrapper li")
      .eq(index)
      .velocity(
        { bottom: 386 },
        {
          duration: 1000,
          easing: [300, 20],
          complete: () => {
            echarts();
          }
        }
      );
  } else {
    $("#showWrapper li")
      .eq(index)
      .addClass("show");
    $("#showWrapper li")
      .eq(index)
      .css({ visibility: "visible" });
    $("#showWrapper li")
      .eq(index)
      .velocity(
        { bottom: 386 },
        {
          duration: 1000,
          easing: [300, 20]
        }
      );
  }

  $("#news").css({'visibility':'hidden','top':'80px','left':'200%','height':'67px'})
  $("#workslatest").velocity(
    {
      right: "-30%"
    },
    {
      duration: 1000
    }
  );
});

function echarts() {
  // 路径配置
  require.config({
    paths: {
      echarts: "http://echarts.baidu.com/build/dist"
    }
  });

  // 使用
  require([
    "echarts",
    "echarts/chart/pie" // 使用柱状图就加载pie模块，按需加载
  ], function(ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.getElementById("echartsWrapper"));

    var labelTop = {
      normal: {
        label: {
          show: true,
          position: "center",
          formatter: "{b}",
          textStyle: {
            baseline: "bottom"
          }
        },
        labelLine: {
          show: false
        }
      }
    };
    var labelFromatter = {
      normal: {
        label: {
          formatter: function(params) {
            return 100 - params.value + "%";
          },
          textStyle: {
            baseline: "top"
          }
        }
      }
    };
    var labelBottom = {
      normal: {
        color: "#cfcfcf",
        label: {
          show: true,
          position: "center"
        },
        labelLine: {
          show: false
        }
      },
      emphasis: {
        color: "rgba(0,0,0,0)"
      }
    };
    var radius = [55, 70];
    option = {
      legend: {
        x: "center",
        y: "bottom",
        data: [
          "HTML+CSS",
          "JavaScript",
          "Vue.js",
          "React.js",
          "Webpack",
          "node.js"
        ]
      },
      title: {
        text: "个人技能",
        x: "center"
      },
      series: [
        {
          type: "pie",
          center: ["10%", "30%"],
          radius: radius,
          itemStyle: labelFromatter,
          data: [
            { name: "other", value: 10, itemStyle: labelBottom },
            { name: "HTML+CSS", value: 90, itemStyle: labelTop }
          ]
        },
        {
          type: "pie",
          center: ["25%", "60%"],
          radius: radius,
          itemStyle: labelFromatter,
          data: [
            { name: "other", value: 15, itemStyle: labelBottom },
            { name: "JavaScript", value: 85, itemStyle: labelTop }
          ]
        },
        {
          type: "pie",
          center: ["40%", "30%"],
          radius: radius,
          itemStyle: labelFromatter,
          data: [
            { name: "other", value: 30, itemStyle: labelBottom },
            { name: "Vue.js", value: 70, itemStyle: labelTop }
          ]
        },
        {
          type: "pie",
          center: ["55%", "60%"],
          radius: radius,
          itemStyle: labelFromatter,
          data: [
            { name: "other", value: 40, itemStyle: labelBottom },
            { name: "React.js", value: 60, itemStyle: labelTop }
          ]
        },
        {
          type: "pie",
          center: ["70%", "30%"],
          radius: radius,
          itemStyle: labelFromatter,
          data: [
            { name: "other", value: 70, itemStyle: labelBottom },
            { name: "Webpack", value: 30, itemStyle: labelTop }
          ]
        },
        {
          type: "pie",
          center: ["85%", "60%"],
          radius: radius,
          itemStyle: labelFromatter,
          data: [
            { name: "other", value: 65, itemStyle: labelBottom },
            { name: "node.js", value: 35, itemStyle: labelTop }
          ]
        }
      ]
    };

    // 为echarts对象加载数据
    myChart.setOption(option);
  });
}
