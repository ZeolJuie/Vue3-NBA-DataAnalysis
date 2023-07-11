<template>
    <div>

        <!-- 球队基本信息 -->
        <div id="Team-Basic-Info" >       
            <div style="width: 100%; height: 50px;">
                <img class="team-logo-info" src="../../static/team_logo/Philadelphia76ers.webp">
                <div class="team-name-info">Philadelphia 76ers</div>
            </div>
            <div class="team-info">
                本赛季战绩：54-28，  分区排名：第 2 名
            </div>
        </div>

        <!-- 各项数据指标统计 -->
        <div id="data-analysis"  style="background: rgba(255, 255, 255, 1);">
            <line-chart chart_height="300" chart_width="850" style="position: relative; top:-5px;"></line-chart>
            <div class="choose-data">
                <ul>
                    <li><button class="twinkle">得分</button></li>
                    <li><button class="twinkle">篮板</button></li>
                    <li><button class="twinkle">助攻</button></li>
                    <li><button class="twinkle">盖帽</button></li>
                    <li><button class="twinkle">抢断</button></li>
                    <li><button class="twinkle">投篮</button></li>
                    <li><button class="twinkle">三分</button></li>
                    <li><button class="twinkle">罚球</button></li>
                    <li><button class="twinkle">命中率</button></li>
                    <li><button class="twinkle">失误</button></li>
                    <li><button class="twinkle">犯规</button></li>
                    
                </ul>
            </div>
            
        </div>
        <!-- 球队近期战绩 -->
        <div class="Latest-Record"  style="background: rgba(255, 255, 255, 1);">
            <relation-chart chart_height="400" chart_width="500" style="position: absolute; top:10px;"></relation-chart>
        </div>

        <!-- 球队球员数据情况 -->
        <div class="players-in-team"  style="background: rgba(255, 255, 255, 1);">
            <vxe-table
                style="background: rgba(255, 255, 255, 0.8);"
                row-id="id"
                border="inner"
                round=true 
                stripe=true
                :data="tableData"
                :loading="loading"> 
                <vxe-table-column type="seq" width="25px" title="#"></vxe-table-column>
                <vxe-table-column field="name" width="120px" title="球员" >
                    <template #default="{ row }">
                        <div style="display: flex; position: relative;">
                            <img :src="row.pic" style="height: 40px;">
                            <div class="playerlist-name">{{ row.name.split(" ")[1] }}</div>
                            <div class="playerlist-number">23</div>
                        </div>
                    </template>
                </vxe-table-column>
                <vxe-table-column field="onfirst" width="120px" title="出场/首发"></vxe-table-column>
                <vxe-table-column field="PTS" width="80px" title="得分" sort-type="number" sortable ></vxe-table-column>
                <vxe-table-column field="REB" width="80px" title="篮板" sort-type="number" sortable></vxe-table-column>
                <vxe-table-column field="AST" width="80px" title="助攻" sort-type="number" sortable></vxe-table-column>
                <vxe-table-column field="BLK" width="80px" title="盖帽" sort-type="number" sortable></vxe-table-column>
                <vxe-table-column field="STL" width="80px" title="抢断" sort-type="number" sortable></vxe-table-column>
                <vxe-table-column field="FG_PCT" width="80px" title="投篮" sort-type="number" sortable></vxe-table-column>
                <vxe-table-column field="FG3_PCT" width="80px" title="三分" sort-type="number" sortable></vxe-table-column>
                <vxe-table-column field="FT_PCT " width="80px" title="罚球" sort-type="number" sortable></vxe-table-column>
                <vxe-table-column field="PF" width="100px" title="犯规数" sort-type="number" sortable></vxe-table-column>
                <vxe-table-column field="TO" width="80px" title="失误" sort-type="number" sortable></vxe-table-column>
            </vxe-table>

            <vxe-pager
                perfect
                :loading="loading"
                :current-page="tablePage.currentPage"
                :page-size="tablePage.pageSize"
                :total="tablePage.total"
                :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
                @page-change="handlePageChange">
            </vxe-pager>
        </div>
        

    </div>
</template>

<script>
import LineChart from '@/charts/Line-Chart.vue'
import RelationChart from '@/charts/Relation-Chart.vue'
export default {
    name: "team-detail",
    components: {
        LineChart,
        RelationChart
    },
    data() {
        return {
            loading: false,
            tableData: [],
            tablePage: {
                currentPage: 1,
                pageSize: 10,
                total: 0
            }
        }
    },
    created () {
        this.findList()
    },
    methods: {
        findList () {
            this.loading = true
            const list = [
                {name: 'Patrick Beverly', pic: require('../../static/players/Patrick Beverly.png')},
                {name: 'Furkan Korkmaz', pic: require('../../static/players/Furkan Korkmaz.png')},
                {name: 'James Harden', pic: require('../../static/players/James Harden.png')},
                {name: 'Joel Embiid', pic: require('../../static/players/Joel Embiid.png')},
                {name: 'Tobias Harris', pic: require('../../static/players/Tobias Harris.png')},
            ]
            this.tableData = list;
            this.tablePage.total = 40;
            this.loading = false
        },
        handlePageChange ({ currentPage, pageSize }) {
            this.tablePage.currentPage = currentPage;
            this.tablePage.pageSize = pageSize;
            this.findList();
        }, 
    }
}

</script>

<style>
#Team-Basic-Info {
    position: absolute;
    right: 0px;
    height: 120px;
    width: 25%;
    margin: 20px;
    padding: 15px;
    box-sizing:border-box;
}

.team-name-info {
    height: 50px;
    line-height: 50px;
    margin-right: 20px;
    font-size:x-large;
    font-family:'Times New Roman', Times, serif;
    text-align: right;
    float: right;
}

.team-logo-info {
    float: right;
    position: relative;
    height: 50px;
    width: 50px;
    right: 0;
}

.team-info {
    font-size: small;
    color:rgba(30, 30, 30, 0.829);
    text-align: right;
    margin: 15px 10px 10px 10px;
}

#data-analysis {
    position: absolute;
    left: 20px;
    top: 30px;
    width: 70%;
    height: 40%;
    min-height: 250px;
    border: solid 1px rgba(128, 128, 128, 0.454);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    box-shadow: 0 0 3px 1px #e3e3e3;
    box-sizing:border-box;
}

.choose-data {
    position: absolute;
    width: 100%;
    height: 50px;
    padding: 0 20px 0 20px;
    box-sizing: border-box;
    bottom: 0;
    
}
.choose-data ul {
    padding: 0;
    height: 40px;
    margin: 5px 0 5px 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
}
.choose-data li{
    width: 9%;
    height: 40px;
    display: inline;
}
.twinkle {
    width: 85%;
    height: 30px;
    margin: 5px 0 5px 0;
    overflow: hidden;
    position: relative;
    border: 1px solid #2c3e50;
    border-radius: 4px;
    color: #2c3e50;
    background: white;
    transition: background-color .2s;
}

.twinkle::before {
    content: "";
    position: absolute;
    width: 60px;
    height: 40px;
    background-color: rgba(255, 255, 255, .6);
    transform: skew(45deg) translate3d(-200px,0,0);
}

.twinkle:hover {
    background-color: #2c3e50;
    color: white;
}

.twinkle:hover::before {
    transition: ease-in-out .5s;
    transform: skew(45deg) translate3d(300px,0,0);
}

.Latest-Record {
    position: absolute;
    left: 20px;
    top: calc(40% + 50px);
    width: 40%;
    height: calc(60% - 65px);
    border: solid 1px rgba(128, 128, 128, 0.454);
    border-radius: 4px;
    box-sizing:border-box;
    box-shadow: 0 0 3px 1px #e3e3e3;
    display: flex;
    justify-content: center;
}


.playerlist-name {
    margin: 0 0px 0 15px; 
    position: absolute; 
    top: 0px; 
    right: 0; 
    height: 20px; 
    width: 60px
}
.playerlist-number {
    margin: 0 0px 0 15px;
    position: absolute; 
    bottom: 0px; 
    right: 0; 
    height: 20px; 
    width: 60px; 
    font-size: smaller;
}

.players-in-team {
    position: absolute;
    right: 20px;
    top: calc(40% + 50px);
    width: calc(60% - 70px);
    height: calc(60% - 65px);
    border: solid 1px rgba(128, 128, 128, 0.454);
    border-radius: 4px;
    box-sizing:border-box;
    overflow:hidden;
    box-shadow: 0 0 3px 1px #e3e3e3;
}


</style>