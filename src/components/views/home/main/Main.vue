<style lang="scss" scoped>
	.my-main-con{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 20px;
		background-color: inherit;
		.my-main-box{
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			background-color: inherit;
		}
	}
</style>

<template>
	<div class="my-main-con">
		<div class="my-main-box">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

