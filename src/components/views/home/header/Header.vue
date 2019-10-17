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
		}
	}
	.el-container{
		height: 100%;
		border: 0 solid #eee;
	}
	h1{
		margin: 0;
		padding: 0;
		text-align: center;
	}
</style>

<template>
	<div class="my-header-con">
		<div class="my-header-box">
			<el-container>
				<el-aside style="width: 230px;height: 100%;">
					<div style="height: 100%;width: 100%;margin: 0;padding: 0;border-right: 1px solid#d4e2cc">
						<div style="height: 100%;width: 100%;margin: 0;padding: 8px 50px;">
							<span style="text-align: center;font-size: 30px;color: white;font-weight: bold">Admin</span>
						</div>
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



