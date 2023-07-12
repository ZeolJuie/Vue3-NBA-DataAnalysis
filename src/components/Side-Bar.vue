<template>
    <div class="side-bar">
        <img class="side-bar-logo" src="../../static/sidebar_logo2.png">
        <div class="menu">
            <div class="menu-title">MAIN MENU</div>
            <ul>
                <li v-for="item in items" :key="item">
                    <img class="menu-icon" :src="item.icon">
                    <router-link class="menu-text" :to="item.router">{{ item.message }}</router-link>
                    
                </li>
            </ul>

        </div>
    </div>
</template>


<script>
export default {
name:"side-bar",
data() {
    return {
        items:[
            {message: 'Teams', router: '/team-details',icon: require('../../static/menu/team.png')},
            {message: 'Players', router: '/home', icon: require('../../static/menu/player.png')},
            {message: 'Games', router: '/teams', icon: require('../../static/menu/game.png')},
            {message: 'Ranking', router: '/teams', icon: require('../../static/menu/range.png')}
        ],
    }
}
}
</script>

<style>
.side-bar {
    height: 100vh;
    width: 200px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgb(255, 255, 255);
    border-right: solid 1px rgb(219, 219, 219);
    box-sizing:border-box;
}
.side-bar-logo {
    width: 100px;
    position: relative;
    margin: 20px 50px 20px 50px;
}
.menu {
    width: 100%;
    position: relative;
    margin-top: 30px;
}
.menu-title {
    font-size: small;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(121, 121, 121);
    margin-left: 20px;
}
.menu-icon{
    height: 20px;
    width: 20px;
    margin-left: 10px;
    margin-top: 10px;
    margin-right: 15px; 
    pointer-events: none;    
}
.menu>ul {
    margin: 20px 15px 20px 15px;
    list-style: none;
    display: list-item;
    padding-left: 5px;
}
.menu>ul>li {
    position: relative;
    width: 150px;
    height: 40px;
    margin-top: 10px;
    box-sizing: border-box;
}
.menu ul li:hover {
    border: solid 1px rgb(231, 231, 231);
    border-radius: 10px;
    background: rgb(242, 242, 242);
}
.menu-text {
    position: absolute; 
    top: 0;
    font-size: small;
    height: 40px;
    line-height: 40px;
    color:rgb(16, 36, 62);
    text-decoration: none;
}


</style>