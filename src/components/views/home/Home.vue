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
				<el-header style="background-color: #409eff">
				</el-header>

				<el-main style="width: 100%;height: 100%;margin: 0;padding: 0;">
					<el-container>
						<el-aside style="width: 230px;height: 100%;margin: 0;padding: 0;">
							<myaside></myaside>
						</el-aside>

						<el-main style="width: 100%;height: 100%;margin: 0;padding: 0;">

						</el-main>
					</el-container>
				</el-main>
			</el-container>
		</div>
	</div>




</template>

<script>
	import mycontainer from "@/components/views/home/container/Container"
	import myheader from "@/components/views/home/header/Header"
	import myaside from "@/components/views/home/aside/Aside"
	import mymain from "@/components/views/home/main/Main"

	export default {
		name: 'Home',
		data() {
			return {}
		},
		components:{
            myheader,
            mymain,
            myaside,
		}
}
</script>


