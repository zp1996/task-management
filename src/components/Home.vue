<template>
	<div class="home-main">
		<h1 class="title">今日任务</h1>
		<a v-link="'/time-entries'" class="create-link">创建任务</a>
		<div class="task-list">
			<tab :titles="titles" :active="active" 
					 :items="tasks" :handles="handles"></tab>
		</div>
	</div>
</template>
<script type="text/javascript">

import Tab from "./Tab";
import Data from "../assets/js/data";

export default {
	data: () => {
		return {
			titles: Data.tabData.title,
			active: Data.tabData.start,
			tasks: Data.tabData.tasks,
			handles: Data.tabData.handles
		};
	},
	components: { Tab }
};


</script>
<style>
.home-main{
	width: 1000px;
	margin: auto;
}
.title{
	text-align: center;
	color: #00A185;
}
.create-link{
	float: right;
	padding: 5px;
	background: #2e8ded;
	margin-top: -30px;
	color: #fff;
	text-decoration: none;
}
.task-list{
	margin-top: 20px;
}
</style>
