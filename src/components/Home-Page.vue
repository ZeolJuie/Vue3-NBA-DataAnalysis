<template>
    <div>
        <!-- <div class="home-pic-box">
           <img class="home-pic" src="../../static/home_pic.webp"> 
        </div> -->
        <img class="ils1" src="../../static/home_ils_1.webp">
        <img class="ils2" src="../../static/home_ils_2.webp">
        <img class="ils3" src="../../static/home_ils_3.webp">
        <!-- <img class="ils4" src="../../static/home_ils_4.webp"> -->
        <div class="home-text">
            <div class="line1">NBA</div>
            <div class="line2">Analystics<br> Home</div>
        </div>
    </div>
</template>

<style>
.ils1 {
    width: calc(20% - 20px);
    min-width: 200px;
    margin: 20px;
    top: 50px;
    position: absolute;
    border-radius: 7px;
    box-shadow: 0 0 3px 1px #787878a0;
}
.ils2 {
    width: calc(25% - 20px);
    min-width: 200px;
    margin: 20px;
    position: absolute;
    border-radius: 7px;
    box-shadow: 0 0 3px 1px #787878a0;
    bottom: 40px; 
    left: 20%;
}
.ils3 {
    width: calc(18% - 20px);
    min-width: 200px;
    margin: 20px;
    position: absolute;
    border-radius: 7px;
    box-shadow: 0 0 3px 1px #787878a0;
    top: 0; 
    left: 45%;
}
.ils4 {
    width: calc(23% - 20px);
    min-width: 200px;
    margin: 20px;
    position: absolute;
    border-radius: 7px;
    box-shadow: 0 0 3px 1px #787878a0;
    bottom: 0; 
    left: 53%;
}
.home-text {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 100%;
    position: absolute;
    top: 25%;
    height: 300px;
    box-sizing: border-box;
    padding:0 100px 0 80px;
}
.line1 {
    height: 180px;
    font-size: 140px;
    font-weight: 400;
    text-align: right ;
    color: rgb(37, 37, 37);
}
.line2 {
    height: 140px;
    line-height: 140px;
    font-size: 95px;
    font-weight: 400;
    text-align: right ;
    color: rgb(37, 37, 37);
}
.home-pic-box {
    width: calc(100% - 720px);
    height: 100vh;
    position: absolute;
    left: 0px;
    display: flex;
    justify-content: center;
    border-right: solid 1px rgb(230, 230, 230);
}
.home-pic {
    width: 100%;
    object-fit:contain;
}
</style>