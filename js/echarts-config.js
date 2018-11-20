option1 = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  color:['#ffb716','transparent'],
  series: [
    {
      name: "html",
      type: "pie",
      radius: ["50%", "70%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center"
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "30",
            fontWeight: "bold"
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: [
        { value: 90, name: "已掌握" },
        { value: 10, name: "未掌握" },
      ]
    }
  ]
};
let htmlChart = echarts.init(document.getElementById("ehtml"));
htmlChart.setOption(option1);
