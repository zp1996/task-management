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
				<ul v-if="type(item)">
					<li v-for="i in item">
						{{i.content}}
					</li>
				</ul>
				<p v-else class="no-data">
					{{item}}
				</p>
			</div>
		</div>
	</div>
</template>
<script>

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
			console.log(obj[0], obj[0] instanceof Object);
			return obj[0] instanceof Object;
		}
	},
	props: ["titles", "active", "items"]
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
	.no-data{
		text-align: center;
		line-height: 400px;
		color: #aaa;
		font-size: 20px;
	}
</style>