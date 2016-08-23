<template>
	<div class="create-main">
		<h1 class="title">创建任务</h1>
		<div class="add-content">
			<input type="text" placeholder="请输入任务" class="task-name" v-model="content" v-on:keyup="checkcontent">
			<p class="attention">{{msgcontent}}</p>
		</div>
		<div class="add-time">
			<input type="text" placeholder="请输入任务耗时" class="task-time" v-model="time" v-on:keyup="checktime">
			<p class="attention">{{msgtime}}</p>
		</div>
		<div class="buttons">
			<button class="submit" v-on:click="add">添加</button>
			<button class="cancel">取消</button>
		</div>
<!-- 		<div class="status">
			添加成功
		</div> -->
	</div>
</template>
<script>
	import Data from "../assets/js/data.js";

	const numberRE = /^(\d+)(\.\d+)?$/,
		contentRE = /^\S{1,25}$/,
		contentError = "请正确填写任务内容",
		timeError = "请正确填写任务耗时";
	var time = 0, content = 0;

	const statusHandle = {
		0: function () {
			this.msgcontent = contentError;
			this.msgtime = timeError;
		},
		1: function () {
			this.msgcontent = contentError;
		},
		2: function () {
			this.msgtime = timeError;
		},
		3: function () {
			let flag = Data.tabData.pushTask({
				content: this.content,
				time: this.time,
				status: 0
			});
		}
	};

	export default{
		data: () => {
			return {
				content: '',
				time: '',
				msgtime: '',
				msgcontent: ''
			};
		},
		methods: {
			checktime: function () {
				if (numberRE.test(this.time)) {
					time = 1;
					this.msgtime = '';					
				} else {
					time = 0;
					this.msgtime = "请输入数字,如1.5"
				}
			},
			checkcontent: function () {
				if (contentRE.test(this.content)) {
					content = 2;
					this.msgcontent = '';					
				} else {
					content = 0;
					this.msgcontent = "请限制在25字之内,且不能存在空格";
				}
			},
			add: function () {
				var flag = time + content;
				statusHandle[flag].call(this);
			}
		}
	}
</script>
<style>
	.create-main{
		width: 1000px;
		margin: auto;
	}
	.task-name, .task-time{
		margin: auto;
		display: block;
		padding: 10px;
	}
	.add-content, .task-name{
		width: 400px;
	}
	.add-time, .task-time{
		width: 120px;
	}
	.add-time, .add-content{
		margin: 35px auto;
	}
	.attention{
		color: #6d2121;
		font-size: 12px;
		text-indent: 5px;
		margin-top: 2px;
		height: 18px;
	}
	.buttons{
		text-align: center;
	}
	.submit, .cancel{
		cursor: pointer;
		padding: 10px 20px;
    color: #fff;
    background: #00A185;
    text-align: center;
    box-shadow: 0 9px 0 #2e796c,0 9px 15px rgba(0,0,0,0.5);
    border-radius: 10px;
    border: none;
    position: relative;
    top: 10px;
	}
	.submit:active, .cancel:active {
    top: 16px;
    box-shadow: 0 3px 0 #2e796c,0 5px 8px rgba(0,0,0,0.5);
	}
	.submit{
		margin-left: -20px;
		margin-right: 40px;
	}
</style>