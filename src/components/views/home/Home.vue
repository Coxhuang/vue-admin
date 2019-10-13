<template>
	<div class="my-home">
<!--		<el-container style="height: 500px; border: 1px solid #eee">-->
			<myaside></myaside>
<!--			<el-container>-->
<!--				<el-header style="text-align: right; font-size: 12px">-->
<!--					<el-dropdown>-->
<!--						<i class="el-icon-setting" style="margin-right: 15px"></i>-->
<!--						<el-dropdown-menu slot="dropdown">-->
<!--							<el-dropdown-item>查看</el-dropdown-item>-->
<!--							<el-dropdown-item>新增</el-dropdown-item>-->
<!--							<el-dropdown-item>删除</el-dropdown-item>-->
<!--						</el-dropdown-menu>-->
<!--					</el-dropdown>-->
<!--					<span>王小虎</span>-->
<!--				</el-header>-->

<!--				<el-main>-->
<!--					<el-table :data="tableData">-->
<!--						<el-table-column prop="date" label="日期" width="140">-->
<!--						</el-table-column>-->
<!--						<el-table-column prop="name" label="姓名" width="120">-->
<!--						</el-table-column>-->
<!--						<el-table-column prop="address" label="地址">-->
<!--						</el-table-column>-->
<!--					</el-table>-->
<!--				</el-main>-->
<!--			</el-container>-->
<!--		</el-container>-->
	</div>
</template>

<script>
	import myaside from "@/components/views/home/aside/Aside"

	export default {
		name: 'Home',
		data() {
			const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
				tableData: Array(20).fill(item)
			}
		},
		components:{
            myaside
		}
}
</script>


<style lang="scss" scoped>

	.my-home{
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: inherit;
	}
	.el-header {
		background-color: #B3C0D1;
		color: #333;
		line-height: 60px;
	}
	.el-aside {
		color: #333;
	}
</style>
