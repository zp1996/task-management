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
			<div class="single-content" v-show="titles[$key] === active">
				<p v-for="i in item">
					{{i.content}}
				</p>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">

export default{
	data: () => {
		return {
			msg: "Hello World"
		};
	},
	methods: {
		"change": function (event) {
			var text = event.target.innerText;
			if (text) {
				if (text === this.active) 
					return void 0;
				this.active = text;
			}
		}
	},
	props: ["titles", "active", "items"]
};

</script>

<style type="text/css">
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
		border-bottom: 1px solid #000;
		color: #fff;
	}
	.single-content{
		height: 400px;
		background: #e8e6e6;
		clear: both;
		animation: show 1.5s;
	}
	.active{
		background: blue;
	}
	@keyframes show{
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>