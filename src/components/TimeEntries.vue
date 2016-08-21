<template>
	<div class="task-main">
		<button 
			v-if="$route.path !== '/time-entries/log-time'"
			v-link="'/time-entries/log-time'"
			class="create-btn">
		</button>
	</div>

	<style type="text/css">
		.create-btn{
			
		}
	</style>
</template>