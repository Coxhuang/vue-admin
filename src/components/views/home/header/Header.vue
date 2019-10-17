<style scoped lang="scss">
	.my-header-con{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		.my-header-box{
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			/*.head-left{*/
			/*	width: 230px;*/
			/*	height: 100%;*/
			/*	margin: 0;*/
			/*	padding: 0;*/
			/*}*/
		}
	}
	.el-container{
		height: 100%;
		border: 0 solid #eee;
	}
</style>

<template>
	<div class="my-header-con">
		<div class="my-header-box">
			<el-container>
				<el-aside style="width: 230px;height: 100%;background-color: #48576a">
					<div style="">

					</div>
				</el-aside>
			</el-container>
		</div>
	</div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>



