<template>
    <div class="relation-chart">
      <div id="myRelationEcharts" :style="mapStyle"></div>
    </div>
</template>

<script>
import * as echarts from "echarts";
import { onMounted, onUnmounted} from "vue";

export default {
  name: "relation-chart",
  props: {
    chart_width: Number,
    chart_height: Number,
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
      // console.log(echart)
    });

    onUnmounted(() => {
      echart.dispose;
    });
	
    // 基础配置一下Echarts
    function initChart() {
        let myCategories = [
            {name:"主队"}, 
            {name: "胜0"}, 
            {name: "胜1"}, 
            {name: "胜2"}, 
            {name: "胜3"}
        ];
        let chart = echart.init(document.getElementById("myRelationEcharts"), "light");
        chart.setOption({
            legend: [
                {
                    // selectedMode: 'single',
                    data: myCategories.map(function (a) {
                    return a.name;
                    })
                }
            ],
            series: [{
                type: "graph",          // 系列类型:关系图
                top: '15%',             // 图表距离容器顶部的距离
                roam: true,             // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                focusNodeAdjacency: true,   // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。[ default: false ]
                force: {                // 力引导布局相关的配置项，力引导布局是模拟弹簧电荷模型在每两个节点之间添加一个斥力，每条边的两个节点之间添加一个引力，每次迭代节点会在各个斥力和引力的作用下移动位置，多次迭代后节点会静止在一个受力平衡的位置，达到整个模型的能量最小化。
                                        // 力引导布局的结果有良好的对称性和局部聚合性，也比较美观。
                    repulsion: 1000,            // [ default: 50 ]节点之间的斥力因子(关系对象之间的距离)。支持设置成数组表达斥力的范围，此时不同大小的值会线性映射到不同的斥力。值越大则斥力越大
                    edgeLength: [150, 100]      // [ default: 30 ]边的两个节点之间的距离(关系对象连接线两端对象的距离,会根据关系对象值得大小来判断距离的大小)，
                                                // 这个距离也会受 repulsion。支持设置成数组表达边长的范围，此时不同大小的值会线性映射到不同的长度。值越小则长度越长。如下示例:
                                                // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50      edgeLength: [10, 50]
                },
                layout: "force",            // 图的布局。[ default: 'none' ]
                                        // 'none' 不采用任何布局，使用节点中提供的 x， y 作为节点的位置。
                                        // 'circular' 采用环形布局;'force' 采用力引导布局.
                // 标记的图形
                //symbol: "path://M19.300,3.300 L253.300,3.300 C262.136,3.300 269.300,10.463 269.300,19.300 L269.300,21.300 C269.300,30.137 262.136,37.300 253.300,37.300 L19.300,37.300 C10.463,37.300 3.300,30.137 3.300,21.300 L3.300,19.300 C3.300,10.463 10.463,3.300 19.300,3.300 Z",
                symbol: 'circle',
                lineStyle: {            // 关系边的公用线条样式。其中 lineStyle.color 支持设置为'source'或者'target'特殊值，此时边会自动取源节点或目标节点的颜色作为自己的颜色。
                    normal: {
                        color: "source",          // 线的颜色[ default: '#aaa' ]
                        width: 1,               // 线宽[ default: 1 ]
                        //type: 'solid',          // 线的类型[ default: solid ]   'dashed'    'dotted'
                        opacity: 1,           // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。[ default: 0.5 ]
                        curveness: 0.2           // 边的曲度，支持从 0 到 1 的值，值越大曲度越大。[ default: 0 ]
                    }
                },
                // 关系对象上的标签
                label: {                
                    normal: {
                        show: true,
                        position: "inside", 
                        textStyle: {                
                            fontSize: 12
                        }
                    }
                },
                // 连接两个关系对象的线上的标签
                edgeLabel: {                
                    normal: {
                        show: true,
                        textStyle: {                
                            fontSize: 11
                        },
                        // 标签内容
                        formatter: function(param) {
                            return param.data.category;
                        }
                    }
                },
                // link上的hover效果
                emphasis: {
                    focus: 'adjacency',
                    lineStyle: {
                        width: 8
                    }
                },
                data: [{
                    name: "76人",
                    draggable: true,                 // 节点是否可拖拽，只在使用力引导布局的时候有用。
                    symbolSize: [80, 80],            // 关系图节点标记的大小
                    itemStyle: {
                        color: 'rgba(0,107,182,1)'   // 关系图节点标记的颜色
                    },
                    category: "主队"            // 数据项所在类目的index。
                }, {
                    name: "公牛",
                    draggable: true,
                    symbolSize: [60, 60],
                    itemStyle: {
                        color: 'rgba(206,17,65,1)'
                    },
                    category: "胜2"
                }, {
                    name: "湖人",
                    draggable: true,
                    symbolSize: [60, 60],
                    itemStyle: {
                        color: 'rgba(85,37,130,1)'
                    },
                    category: "胜1"
                }, {
                    name: "热火",
                    draggable: true,
                    symbolSize: [60, 60],
                    itemStyle: {
                        color: 'rgba(152,0,46,1) '
                    },
                    category: "胜0"
                }, {
                    name: "凯尔特人",
                    draggable: true,
                    symbolSize: [60, 60],
                    itemStyle: {
                        color: 'rgba(0,122,51,1)'
                    },
                    category: "胜3"
                }],
                categories: [{                         // 节点分类的类目，可选。如果节点有分类的话可以通过 data[i].category 指定每个节点的类目，类目的样式会被应用到节点样式上。图例也可以基于categories名字展现和筛选。
                    name: "主队"                // 类目名称，用于和 legend 对应以及格式化 tooltip 的内容。
                }, {
                    name: "胜0"
                }, {
                    name: "胜1"
                }, {
                    name: "胜2"
                }, {
                    name: "胜3"
                }],
                links: [{                               // 节点间的关系数据
                    target: "公牛",
                    source: "76人",
                    category: "胜场: 2"                    // 关系对象连接线上的标签内容
                }, {
                    target: "湖人",
                    source: "76人",
                    category: "胜场: 1"
                }, {
                    target: "热火",
                    source: "76人",
                    category: "胜场: 0"
                }, {
                    target: "凯尔特人",
                    source: "76人",
                    category: "胜场: 1"
                },
                {
                    target: "76人",
                    source: "凯尔特人",
                    category: "败场: 2"
                },
                {
                    target: "热火",
                    source: "凯尔特人",
                    category: "败场: 2"
                },
                {
                    target: "公牛",
                    source: "热火",
                    category: "败场: 2"
                },
            ]
            }],

            animationEasingUpdate: "quinticInOut",          // 数据更新动画的缓动效果。[ default: cubicOut ]    "quinticInOut"
            animationDurationUpdate: 100
        })
    }
    return { initChart };
  }
}
</script>
