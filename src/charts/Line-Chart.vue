<template>
    <div class="echarts-box">
      <div id="myEcharts" :style="mapStyle"></div>
    </div>
</template>


<script>
import * as echarts from "echarts";
import { onMounted, onUnmounted} from "vue";

export default {
  name: "echartsBox",
  props: {
    chart_width: Number,
    chart_height: Number,
    datatype: String,   // 统计维度：得分/篮板/失误...
    lasttime: Number,   // 统计时长，最近10场/20场/30场
    isYear: Boolean,    // 是否按赛年统计

  },
  data(){
    return {
      mapStyle:  {
        width: this.chart_width + 'px',
        height: this.chart_height + 'px',
      }
    }
  },
  setup() {
    /// 声明定义一下echart
    let echart = echarts;

    onMounted(() => {
      initChart();
    });

    onUnmounted(() => {
      echart.dispose;
    });
	
    // 基础配置一下Echarts
    function initChart() {
      let chart = echart.init(document.getElementById("myEcharts"), "light");
      let anls_data = {
        my_data: ["1","2","3","4","5","6","7"],
        my_series: ["666","555","904","200","400","790","600"]
      }
      let anls_data_2 = {
        my_data: ["1","2","3","4","5","6","7"],
        my_series: ["800","700","950","500","800","950","750"]
      }
      // 把配置和数据放这里
      chart.setOption({
        xAxis: {
          type: "category",
          data: anls_data["my_data"]
            
        },
        tooltip: {
          trigger: "axis"
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: anls_data["my_series"], 
            type: "line",
            itemStyle: {
                color: '#0770FF'
            },
            stack: 'a',
            // smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(58,77,233,0.8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(58,77,233,0.3)'
                    }
                ])
            }
          },
          {
            data: anls_data_2["my_series"], 
            type: "line",
            itemStyle: {
                color: '#F2597F'
            },
            stack: 'a',
            // smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgba(213,72,120,0.8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(213,72,120,0.3)'
                    }
                ])
            }
          },
        ]
      });
      window.onresize = function() {
        //自适应大小
        chart.resize();
      };
    }
    return { initChart };
  }
};
</script>
