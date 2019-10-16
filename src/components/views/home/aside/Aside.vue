<style scoped lang="scss">
	.my-aside-con{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: #eef1f6;
		.my-aside-box{
			width: 100%;
			height: 100%;
			margin: 0;
			padding: 0;
			background-color: inherit;
			/deep/ .el-menu{
				/*修改ele标签样式--需要先用一个原生的标签套住,然后根据这个原生的标签的关系找到需要修改的标签的样式,关系不一定要非常精确,只要是原生标签下的标签即可*/
				background-color: #eef1f6;
			}
		}
	}
	.el-menu-item{
		color: #48576a;
		background-color: #e4e8f1;
	}
</style>


<template>

	<div class="my-aside-con">
		<div class="my-aside-box">
			<el-menu :default-openeds="['1', '3']">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-message"></i>
						导航一
					</template>
						<el-menu-item index="1-1">
							<router-link to="/table">
								选项1
							</router-link>
						</el-menu-item>
						<el-menu-item index="1-2">
							<router-link to="/table2">
								选项2
							</router-link>
						</el-menu-item>
				</el-submenu>
			</el-menu>
		</div>
	</div>



<!--	<el-aside style="width: 230px">-->
<!--		<el-menu :default-openeds="['1', '3']">-->
<!--			<el-submenu index="1">-->
<!--				<template slot="title">-->
<!--					<i class="el-icon-message"></i>-->
<!--					导航一-->
<!--				</template>-->
<!--					<el-menu-item index="1-1">-->
<!--						选项1-->
<!--					</el-menu-item>-->
<!--					<el-menu-item index="1-2">-->
<!--						选项2-->
<!--					</el-menu-item>-->
<!--			</el-submenu>-->
<!--		</el-menu>-->
<!--	</el-aside>-->
</template>

<script>
    export default {
        name: "Aside"
    }
</script>



