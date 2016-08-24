<template>
	<div class="tab">
		<div class="titles">
			<ul class="tab-titles" v-on:click="change">
				<li v-for="title in titles" track-by="$index" class="tab-title" v-bind:class="{'active': title === active}">
					{{title}}
				</li>
			</ul>
		</div>
		<div class="tab-content" v-for="item in items">
			<div class="single-content" v-show="titles[$key] === active" v-on:click="changestatus">
				<ul v-if="type(item.data)" class="items">
					<li v-for="i in item.data" class="single-item">
						<span class="item-content">
							{{i.content}}
						</span>
						<span class="item-time">
							耗时：{{i.time}}小时
						</span>
						<span class="handle-area" v-show="item.handles" data-index="{{$key}}">
							<button v-for="handle in item.handles" class="{{$key}}">
								{{handle}}
							</button>
						</span>
					</li>
				</ul>
				<p v-else class="no-data">
					{{item.data}}
				</p>
			</div>
		</div>
	</div>
</template>
<script>
import Data from "../assets/js/data";

const handlesObj = {
	del: (id) => {
		Data.tabData.delTask(id);
	},
}
export default{
	data: () => {
		return {
			msg: "Hello World"
		};
	},
	methods: {
		change: function (event) {
			var text = event.target.innerText;
			if (text) {
				if (text === this.active) 
					return void 0;
				this.active = text;
			}
		},
		type: (obj) => {
			return Object.prototype.toString.call(obj) === "[object Object]";
		},
		changestatus: (event) => {
			var className = event.target && event.target.className;
			handlesObj[className] && handlesObj[className](event.target.parentNode.getAttribute("data-index"));
		}
	},
	props: ["titles", "active", "items", "handles"]
};
</script>

<style>
.tab-titles{
	list-style-type: none;
}
.titles{
	height: 40px;
}
.tab-title{
	float: left;
	width: 100px;
	height: 40px;
	background: #aaa;
	cursor: pointer;
	line-height: 40px;
	text-align: center;
	margin-right: 5px;
	border-radius: 8px 8px 0px 0px;
	border-bottom: 1px solid #aaa;
	color: #fff;
}
.single-content{
	min-height: 400px;
	background: #e8e6e6;
	clear: both;
	animation: show 1.5s;
}
.active{
	background: #2e8ded;
	border-bottom: 1px solid #2e8ded;
}
.items{
	list-style-type: none;
	padding: 30px 50px;
}
.single-item{
	height: 30px;
	line-height: 30px;
	padding: 0px 10px;
	border: 1px solid #fff;
	margin-top: -1px;
}
.item-content{
	display: inline-block;
	width: 65%;
}
.item-time{
	font-size: 13px;
	color: #666;
	display: inline-block;
	width: 120px;
}
@keyframes show{
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
.no-data{
	text-align: center;
	line-height: 400px;
	color: #aaa;
	font-size: 20px;
}
.handle-area button{
	margin: 0px 10px;
	padding: 2px 10px;
	border: none;
	cursor: pointer;
	border-radius: 5px;
}
.finish, .start{
	background: #2e8ded;
	color: #fff;
}
.del{
	background: #aaa;
	color: #fff;
}
</style>