<style lang="scss" scoped>
	.my-home-con{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: #ffffff;
		.my-home-box{
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			background-color: #ffffff;
		}
	}
	.el-container{
		height: 100%;
		border: 0 solid #eee;
	}
	.el-header{
		width: 100%;
		height: 60px;
		margin: 0;
		padding: 0;
	}
</style>

<template>
	<div class="my-home-con">
		<div class="my-home-box">
			<el-container>
				<el-header>

				</el-header>
			</el-container>
		</div>
	</div>




</template>

<script>
	import container from "@/components/views/home/container/Container"
	import myheader from "@/components/views/home/header/Header"

	export default {
		name: 'Home',
		data() {

			return {
			}
		},
		components:{
            myheader,
            container,
		}
}
</script>


