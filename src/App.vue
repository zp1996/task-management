<template>
  <div>
    <header>
      <div class="header-wrapper">
        <div class="logo">
          <a href="http://www.lsgogroup.com/" target="_blank" title="Home Page"></a>
        </div>
        <nav class="navbar">
          <ul class="nav">
            <li>
              <a v-link="'/home'" class="nav-link">首页</a>
            </li>
            <li>
              <a v-link="'/time-entries'" class="nav-link">计划列表</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
*{
  margin: 0px;
  padding: 0px;
}
header{
  width: 100%;
  min-width: 1000px;
  height: 80px;
  line-height: 80px;
  background: #00A185;
  color: #fff;
}
.header-wrapper{
  width: 1000px;
  margin: auto;
}
.logo{
  width: 80px;
  height: 80px;
  background: url(./assets/logo.png);
  cursor: pointer;
  float: left;
}
.logo a{
  display: block;
  width: 80px;
  height: 80px;
}
.navbar{
  margin-left: 120px;
}
.nav{
  list-style-type: none;
}
.nav li{
  text-align: center;
  width: 120px;
  height: 80px;
  float: left;
}
.nav-link{
  color: #fff;
  text-decoration: none;
}
.nav-link:hover{
  color: #316747;
}
.container{
  padding: 50px;
  min-width: 1100px;
}
</style>
