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
          if (index === 1 && $("#echarts-wrapper .echart1").html() === "") {
            for (let i = 0; i < 6; i++) {
              setTimeout(() => {
                echarts(`.echart${i + 1}`, i);
              }, i * 500);
            }
          } else if (index === 2 && $(".evaluation p:eq(0)").html() === "") {
            for (let i = 0; i < textList.length; i++) {
              let delay = textList.slice(0, i).reduce((acc, cur) => {
                return acc + cur.length;
              }, 0);

              setTimeout(() => {
                new Typewriter($(`.evaluation p:eq(${i})`), textList[i]);
              }, delay * 150);
            }
          } else if (index === 3 && $(".tel .left-tel p:eq(0)").html() === "") {
            for (let i = 0; i < intrLeftList.length; i++) {
              let delay = intrLeftList.slice(0, i).reduce((acc, cur) => {
                return acc + cur.length;
              }, 0);

              setTimeout(() => {
                new Typewriter($(`.tel .left-tel p:eq(${i})`), intrLeftList[i]);
              }, delay * 150);
            }

            let delayL = intrLeftList.reduce((acc, cur) => {
              return acc + cur.length;
            }, 0);

            for (let i = 0; i < intrRightList.length; i++) {
              let delay = intrRightList.slice(0, i).reduce((acc, cur) => {
                return acc + cur.length;
              }, 0);

              setTimeout(() => {
                new Typewriter(
                  $(`.tel .right-tel p:eq(${i})`),
                  intrRightList[i]
                );
              }, (delay + delayL) * 150);
            }
          }
        }
      }
    );
  gravity(0, 0, $("#news"),false);
  $("#news").css({
    visibility: "hidden",
    top: "80px",
    left: "200%",
    height: "67px"
  });
  
  $("#workslatest").velocity(
    {
      right: "-30%"
    },
    {
      duration: 1000
    }
  );
});

// 路径配置
require.config({
  paths: {
    echarts: "http://echarts.baidu.com/build/dist"
  }
});

var colorList = [
  "#44b7d3",
  "#e42b6d",
  "#ff69b4",
  "#ba55d3",
  "#cd5c5c",
  "#ffa500"
];

function labelTops(i) {
  return {
    normal: {
      label: {
        show: true,
        position: "center",
        formatter: "{b}",
        textStyle: {
          baseline: "bottom",
          color: colorList[i]
        }
      },
      labelLine: {
        show: false
      },
      color: colorList[i]
    }
  };
}

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

let seriesList = [
  {
    type: "pie",
    center: ["50%", "30%"],
    radius: radius,
    itemStyle: labelFromatter,
    data: [
      { name: "other", value: 10, itemStyle: labelBottom },
      { name: "HTML+CSS", value: 90, itemStyle: labelTops(0) }
    ]
  },
  {
    type: "pie",
    center: ["50%", "60%"],
    radius: radius,
    itemStyle: labelFromatter,
    data: [
      { name: "other", value: 15, itemStyle: labelBottom },
      { name: "JavaScript", value: 85, itemStyle: labelTops(1) }
    ]
  },
  {
    type: "pie",
    center: ["50%", "30%"],
    radius: radius,
    itemStyle: labelFromatter,
    data: [
      { name: "other", value: 30, itemStyle: labelBottom },
      { name: "Vue.js", value: 70, itemStyle: labelTops(2) }
    ]
  },
  {
    type: "pie",
    center: ["50%", "60%"],
    radius: radius,
    itemStyle: labelFromatter,
    data: [
      { name: "other", value: 40, itemStyle: labelBottom },
      { name: "React.js", value: 60, itemStyle: labelTops(3) }
    ]
  },
  {
    type: "pie",
    center: ["50%", "30%"],
    radius: radius,
    itemStyle: labelFromatter,
    data: [
      { name: "other", value: 70, itemStyle: labelBottom },
      { name: "Webpack", value: 30, itemStyle: labelTops(4) }
    ]
  },
  {
    type: "pie",
    center: ["50%", "60%"],
    radius: radius,
    itemStyle: labelFromatter,
    data: [
      { name: "other", value: 65, itemStyle: labelBottom },
      { name: "node.js", value: 35, itemStyle: labelTops(5) }
    ]
  }
];

// 使用
function echarts(el, i) {
  require([
    "echarts",
    "echarts/chart/pie" // 使用柱状图就加载pie模块，按需加载
  ], function(ec) {
    // 基于准备好的dom，初始化echarts图表
    var myChart = ec.init(document.querySelector(el));
    option = {
      series: [seriesList[i]]
    };

    // 为echarts对象加载数据
    myChart.setOption(option);
  });
}
