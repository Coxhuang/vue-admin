<style scoped lang="scss">
	.my-aside{
		width: 230px;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: #B3C0D1;
		.el-aside{
			background-color: inherit;
			height: 100%;
		}
	}
</style>


<template>
	<div class="my-aside">
		<el-aside style="width: 230px">
			<el-menu :default-openeds="['1', '3']">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-message"></i>
						导航一
					</template>
						<el-menu-item index="1-1">
							选项1
						</el-menu-item>
						<el-menu-item index="1-2">
							选项2
						</el-menu-item>
				</el-submenu>
			</el-menu>
		</el-aside>
	</div>
</template>

<script>
    export default {
        name: "Aside"
    }
</script>



