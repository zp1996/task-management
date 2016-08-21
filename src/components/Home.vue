<template>
	<div class="home-main">
		<h1 class="home-title">开启任务管理</h1>
		<a v-link="'/time-entries'" class="create-link">创建任务</a>
		<div class="task-list">
			<p>123</p>
		</div>
	</div>
</template>

<style>
	.home-main{
		width: 1000px;
		margin: auto;
	}
	.home-title{
		text-align: center;
	}
	.create-link{
		float: left;
		padding: 5px;
		background: blue;
		margin-top: -30px;
		color: #fff;
		text-decoration: none;
	}
</style>
